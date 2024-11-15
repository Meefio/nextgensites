'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().email('Wprowadź poprawny adres email'),
  name: z.string().min(2, 'Imię musi mieć minimum 2 znaki'),
  date: z.date({
    required_error: 'Wybierz datę spotkania',
  }),
  time: z.string({
    required_error: 'Wybierz godzinę spotkania',
  }),
})

export function BookMeetingDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const availableHours = Array.from({ length: 11 }, (_, i) => {
    const hour = i + 10 // 10:00 - 20:00
    return `${hour}:00`
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/book-meeting', {
        method: 'POST',
        body: JSON.stringify({
          ...values,
          date: format(values.date, 'yyyy-MM-dd'),
        }),
      })

      if (!response.ok) throw new Error('Błąd podczas rezerwacji')

      toast({
        title: 'Spotkanie zarezerwowane!',
        description: 'Link do spotkania został wysłany na podany adres email.',
      })
      setOpen(false)
    } catch (error) {
      toast({
        title: 'Wystąpił błąd',
        description: 'Nie udało się zarezerwować spotkania. Spróbuj ponownie.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <DialogTitle>Zarezerwuj termin spotkania</DialogTitle>
          <DialogDescription>
            Wybierz dogodny termin konsultacji. Spotkanie odbędzie się online przez Google Meet.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  
                  <FormControl>
                    <Input placeholder="Imię" {...field} />
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
               
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormLabel className="pb-2">Data spotkania</FormLabel>
                  <FormControl>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      locale={pl}
                      disabled={(date: Date) => {
                        const now = new Date()
                        return date < now || date.getDay() === 0 || date.getDay() === 6
                      }}
                      className="rounded-md border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormLabel className="pb-2">Godzina spotkania</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz godzinę" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableHours.map((hour) => (
                        <SelectItem key={hour} value={hour}>
                          {hour}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Zarezerwuj spotkanie
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
} 