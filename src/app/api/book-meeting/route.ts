import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const calendar = google.calendar({
  version: 'v3',
  auth: new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY,
    ['https://www.googleapis.com/auth/calendar']
  )
})

export async function POST(req: Request) {
  try {
    const { date, time } = await req.json()
    
    const startDateTime = new Date(`${date}T${time}`)
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000) // 1h meeting

    const event = {
      summary: 'Konsultacja projektowa',
      description: 'Spotkanie konsultacyjne dotyczące projektu',
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
          requestId: `meeting-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    }

    const response = await calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      requestBody: event,
    })

    // Wysyłka emaila z potwierdzeniem
    await resend.emails.send({
      from: 'no-reply@twojadomena.pl',
      to: 'klient@email.com',
      subject: 'Potwierdzenie rezerwacji spotkania',
      html: `
        <h1>Spotkanie zostało zarezerwowane</h1>
        <p>Data: ${date}</p>
        <p>Godzina: ${time}</p>
        <p>Link do spotkania: ${response.data.hangoutLink}</p>
      `
    })

    return NextResponse.json({ 
      success: true, 
      meetingUrl: response.data.hangoutLink 
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas rezerwacji' },
      { status: 500 }
    )
  }
} 