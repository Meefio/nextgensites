"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Copy } from "lucide-react";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Imię musi mieć co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Wprowadź poprawny adres email.",
  }),
  message: z.string().min(10, {
    message: "Wiadomość musi mieć co najmniej 10 znaków.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const email = "kontakt@nextgensites.pl";
  const phone = "+48 694 671 786";

  const handleCopy = (text: string, type: 'email' | 'telefon') => (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    toast({
      title: "Skopiowano!",
      description: `${type === 'email' ? 'Adres email' : 'Numer telefonu'} został skopiowany do schowka.`,
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas wysyłania wiadomości');
      }

      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Błąd",
        description: "Wystąpił problem podczas wysyłania formularza. Spróbuj ponownie później.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="kontakt" className="container flex flex-col items-center gap-6 py-14 md:py-24 sm:gap-7 scroll-mt-header">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-full overflow-hidden">
        <div className="grid gap-6 p-3 md:gap-16 md:p-8 lg:grid-cols-2">
          {/* Lewa kolumna z danymi kontaktowymi */}
          <div className="space-y-4 md:space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold md:text-3xl text-center md:text-left">
                Skontaktuj się z nami
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base md:mt-4 text-center md:text-left">
                Masz pytania? Napisz do nas, a my postaramy się odpowiedzieć jak najszybciej.
              </p>
            </div>

            <div className="space-y-3">
              <Card 
                className="p-3 md:p-4 transition-colors hover:bg-muted cursor-pointer"
                onClick={() => window.location.href = `tel:${phone.replace(/\s/g, '')}`}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="rounded-lg bg-primary/10 p-2 md:p-3">
                      <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p 
                        className="text-muted-foreground select-text"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {phone}
                      </p>
                    </div>
                  </div>
                  <button
                    className="p-2 rounded-md hover:bg-background transition-colors"
                    onClick={handleCopy(phone, 'telefon')}
                    aria-label="Kopiuj numer telefonu"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </Card>

              <Card 
                className="p-3 md:p-4 transition-colors hover:bg-muted cursor-pointer"
                onClick={() => window.location.href = `mailto:${email}`}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.location.href = `mailto:${email}`;
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="rounded-lg bg-primary/10 p-2 md:p-3">
                      <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p 
                        className="text-muted-foreground select-text"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {email}
                      </p>
                    </div>
                  </div>
                  <button
                    className="p-2 rounded-md hover:bg-background transition-colors"
                    onClick={handleCopy(email, 'email')}
                    aria-label="Kopiuj adres email"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* Prawa kolumna z formularzem */}
          <div className="lg:border-l lg:pl-6 xl:pl-16">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 md:space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imię</FormLabel>
                      <FormControl>
                        <Input placeholder="Jan Kowalski" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="jan@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wiadomość</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="W czym możemy Ci pomóc?"
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isLoading}
                    className="w-full sm:w-auto px-3 md:px-6"
                  >
                    {isLoading ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
} 