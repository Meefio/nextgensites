import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Konfiguracja Google Calendar z Service Account
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    project_id: process.env.GOOGLE_PROJECT_ID,
  },
  scopes: [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events'
  ],
});

const calendar = google.calendar({ version: 'v3', auth });

export async function POST(req: Request) {
  try {
    const { date, time, email, name, phone } = await req.json();

    // Walidacja danych
    if (!date || !time || !email || !name) {
      return NextResponse.json(
        { success: false, error: 'Brak wymaganych danych' },
        { status: 400 }
      );
    }

    const startDateTime = new Date(`${date}T${time}`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    // Tworzenie wydarzenia z Google Meet
    const event = {
      summary: 'Konsultacja NextGen Sites',
      description: `
        Spotkanie konsultacyjne
        
        Dane klienta:
        Imię i nazwisko: ${name}
        Email: ${email}
        Telefon: ${phone || 'Nie podano'}
      `,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Warsaw',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Warsaw',
      },
      conferenceData: {
        createRequest: {
          requestId: `nextgen-${Date.now()}`,
          conferenceSolutionKey: {
            type: 'hangoutsMeet'
          }
        }
      }
    };

    // Dodanie wydarzenia do kalendarza z konfiguracją Google Meet
    const calendarResponse = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      conferenceDataVersion: 1,
      requestBody: event,
    });

    // Sprawdzenie czy mamy link do spotkania
    const meetingLink = calendarResponse.data.hangoutLink || 
                       calendarResponse.data.conferenceData?.entryPoints?.[0]?.uri;

    if (!meetingLink) {
      throw new Error('Nie udało się utworzyć linku do spotkania');
    }

    // Email do klienta
    await resend.emails.send({
      from: `NextGen Sites <${process.env.NEXT_PUBLIC_CONTACT_EMAIL}>`,
      to: [email],
      subject: 'Potwierdzenie rezerwacji spotkania - NextGen Sites',
      html: `
        <h1>Twoje spotkanie zostało zarezerwowane!</h1>
        <p>Witaj ${name}!</p>
        <p>Potwierdzamy rezerwację spotkania konsultacyjnego.</p>
        <p><strong>Szczegóły spotkania:</strong></p>
        <ul>
          <li>Data: ${date}</li>
          <li>Godzina: ${time}</li>
          <li>Link do spotkania: <a href="${meetingLink}">${meetingLink}</a></li>
        </ul>
        <p>Prosimy o dołączenie do spotkania poprzez powyższy link o wyznaczonej godzinie.</p>
        <p>W razie problemów technicznych lub potrzeby zmiany terminu, prosimy o kontakt.</p>
        <p>Pozdrawiamy,<br>Zespół NextGen Sites</p>
      `,
    });

    // Email do zespołu
    await resend.emails.send({
      from: `NextGen Sites <${process.env.NEXT_PUBLIC_CONTACT_EMAIL}>`,
      to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL!],
      subject: `Nowa rezerwacja spotkania - ${name}`,
      html: `
        <h2>Nowa rezerwacja spotkania</h2>
        <p><strong>Dane klienta:</strong></p>
        <ul>
          <li>Imię i nazwisko: ${name}</li>
          <li>Email: ${email}</li>
          <li>Telefon: ${phone || 'Nie podano'}</li>
        </ul>
        <p><strong>Termin:</strong></p>
        <ul>
          <li>Data: ${date}</li>
          <li>Godzina: ${time}</li>
        </ul>
        <p>Link do spotkania: <a href="${meetingLink}">${meetingLink}</a></p>
      `,
    });

    return NextResponse.json({ 
      success: true,
      meetingUrl: meetingLink
    });

  } catch (error) {
    console.error('Błąd podczas rezerwacji:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Wystąpił błąd podczas rezerwacji spotkania. Spróbuj ponownie później.' 
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
} 