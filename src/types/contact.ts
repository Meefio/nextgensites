export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  preferredTime?: 'morning' | 'afternoon' | 'evening';
  preferredContact?: 'email' | 'phone';
  rodoConsent: boolean;
  marketingConsent?: boolean;
}; 