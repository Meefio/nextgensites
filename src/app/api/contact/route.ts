import { NextResponse } from "next/server";
import { Resend } from "resend";

// Sprawdzamy czy klucz API istnieje
if (!process.env.RESEND_API_KEY) {
  throw new Error("Brak klucza API Resend");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Kontakt <onboarding@resend.dev>",
      to: ["kontakt@nextgensites.pl"],
      subject: `Nowa wiadomość od ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">
            Nowa wiadomość ze strony internetowej
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #666;">Od:</strong> 
              <span style="color: #333;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #666;">Email:</strong> 
              <span style="color: #333;">${email}</span>
            </p>
            
            <div style="margin: 20px 0;">
              <strong style="color: #666;">Wiadomość:</strong>
              <p style="color: #333; background: #f9f9f9; padding: 15px; border-radius: 4px; margin: 10px 0;">
                ${message.replace(/\n/g, '<br/>')}
              </p>
            </div>
          </div>
          
          <div style="font-size: 12px; color: #666; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eaeaea;">
            <p>Ta wiadomość została wysłana z formularza kontaktowego na stronie ${process.env.NEXT_PUBLIC_SITE_URL}</p>
            <p>Data wysłania: ${new Date().toLocaleString('pl-PL')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Błąd wysyłania email:", error);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości" },
      { status: 500 }
    );
  }
} 