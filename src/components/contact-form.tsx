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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Symulacja opóźnienia
      
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Wystąpił błąd!",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="container py-24">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="grid gap-16 lg:grid-cols-2 p-8">
          {/* Lewa kolumna z danymi kontaktowymi */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Skontaktuj się z nami
              </h2>
              <p className="mt-4 text-muted-foreground">
                Masz pytania? Napisz do nas, a my postaramy się odpowiedzieć jak najszybciej.
              </p>
            </div>

            <div className="space-y-4">
              <Card 
                className="p-4 transition-colors hover:bg-muted cursor-pointer"
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
                  <div className="flex items-center space-x-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Phone className="h-5 w-5 text-primary" />
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
                className="p-4 transition-colors hover:bg-muted cursor-pointer"
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
                  <div className="flex items-center space-x-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
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
          <div className="lg:border-l lg:pl-16">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    className="w-full sm:w-auto"
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