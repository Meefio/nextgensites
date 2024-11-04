"use server";

import { contactFormSchema } from "@/lib/validations/contact";
import type { ContactFormData } from "@/types/contact";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormData) {
  try {
    // Walidacja danych
    const validatedData = contactFormSchema.parse(data);

    // Wysyłka emaila
    await resend.emails.send({
      from: 'Formularz kontaktowy <kontakt@nextgensites.pl>',
      to: ['kontakt@nextgensites.pl'],
      subject: 'Nowa wiadomość z formularza kontaktowego',
      text: `
        Imię i nazwisko: ${validatedData.name}
        Email: ${validatedData.email}
        Telefon: ${validatedData.phone || 'Nie podano'}
        Preferowane godziny: ${validatedData.preferredTime || 'Nie określono'}
        Preferowana forma kontaktu: ${validatedData.preferredContact || 'Nie określono'}
        Wiadomość: ${validatedData.message}
        Zgoda marketingowa: ${validatedData.marketingConsent ? 'Tak' : 'Nie'}
      `,
    });

    // Możesz też zapisać do bazy danych używając Drizzle
    // await db.insert(contactTable).values(validatedData);

    return { success: true };
  } catch (error) {
    console.error('Błąd podczas wysyłania formularza:', error);
    return { success: false, error: 'Wystąpił błąd podczas wysyłania formularza' };
  }
} 