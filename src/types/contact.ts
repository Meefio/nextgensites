import { z } from "zod";
import { contactFormSchema } from "@/lib/validations/contact";

export type ContactFormData = z.infer<typeof contactFormSchema>; 