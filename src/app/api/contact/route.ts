import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormEmail } from "@/components/emails/contact-form-email";
import { formSchema } from "@/lib/validations/contact";

// Sprawdzamy czy klucz API istnieje
if (!process.env.RESEND_API_KEY) {
  throw new Error("Brak klucza API Resend");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Dodaj endpoint OPTIONS dla preflight requests
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
  
    
    // Walidacja danych po stronie serwera
    const result = formSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Nieprawidłowe dane formularza" },
        { status: 400 }
      );
    }

    const { name, email, subject, message, rodo } = result.data;

    await resend.emails.send({
      from: "NextGen Sites <onboarding@resend.dev>",
      to: ["kontakt@nextgensites.pl"],
      subject: `Nowa wiadomość: ${subject}`,
      react: ContactFormEmail({
        name,
        email,
        subject,
        message,
        rodo: rodo ? "Tak" : "Nie",
      }),
    });

    return NextResponse.json(
      { message: "Wiadomość wysłana pomyślnie" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości" },
      { status: 500 }
    );
  }
} 