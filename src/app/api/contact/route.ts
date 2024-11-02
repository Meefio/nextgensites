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
      from: "Kontakt <onboarding@resend.dev>", // Na początku użyj tego adresu
      to: ["kontakt@nextgensites.pl"], // Zmień na swój adres email
      subject: `Nowa wiadomość od ${name}`,
      text: `
        Imię i nazwisko: ${name}
        Email: ${email}
        Wiadomość: ${message}
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