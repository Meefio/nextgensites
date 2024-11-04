import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/validations/contact";
import type { ContactFormData } from "@/types/contact";
import { useState } from "react";
import { submitContactForm } from "@/app/_actions/contact";
import { useToast } from "@/hooks/use-toast";

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      rodoConsent: false,
      marketingConsent: false,
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      const result = await submitContactForm(data);
      
      if (result.success) {
        toast({
          title: "Sukces!",
          description: "Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.",
        });
        form.reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.",
        variant: "destructive",
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