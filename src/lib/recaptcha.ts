import { z } from "zod";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY!;

export async function verifyRecaptcha(token: string) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: "POST" }
  );

  const data = await response.json();
  return data.success;
} 