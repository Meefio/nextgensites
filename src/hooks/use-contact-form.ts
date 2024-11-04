import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/validations/contact";
import type { ContactFormData } from "@/types/contact";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      rodo: false,
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Wystąpił błąd podczas wysyłania wiadomości');
      }

      toast({
        title: "Sukces!",
        description: "Twoja wiadomość została wysłana pomyślnie.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Błąd wysyłania:', error);
      toast({
        variant: "destructive",
        title: "Błąd!",
        description: error instanceof Error ? error.message : "Wystąpił błąd podczas wysyłania wiadomości",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
} 