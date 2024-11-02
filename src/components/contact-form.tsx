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
      <div className="mx-auto max-w-2xl">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Skontaktuj się z nami
        </h2>
        <p className="mt-4 text-muted-foreground">
          Masz pytania? Napisz do nas, a my postaramy się odpowiedzieć jak najszybciej.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-8">
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
            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading ? "Wysyłanie..." : "Wyślij wiadomość"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
} 