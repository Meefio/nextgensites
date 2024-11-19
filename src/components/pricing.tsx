'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { AnimatedElement } from '@/components/motion/animated-element'

export function Pricing() {
	const [isMonthly, setIsMonthly] = useState(true)

	const plans = [
		{
			name: 'Podstawowy',
			monthlyPrice: '150zł*',
			oneTimePrice: '2500zł',
			description:
				'Idealne rozwiązanie dla małych firm i startupów, które potrzebują profesjonalnej obecności w sieci',
			features: [
				'Do 5 sekcji na stronie',
				'Przygotowanie Treści na stronę',
				'Formularz kontaktowy',
				'Podstawowe animacje',
				'zaawansowane SEO',
				'Integracja z Google Analytics',
				'Podstawowe wsparcie techniczne',
				'Hosting i domena w cenie',
				'Polityka RODO i Cookies',
				'Certyfikat SSL',
				'Optymalizacja pod urządzenia mobilne',
			],
		},
		{
			name: 'Pro',
			monthlyPrice: '250zł*',
			oneTimePrice: '3500zł',
			description:
				'Zaawansowane rozwiązanie dla rozwijających się firm, które chcą więcej możliwości i lepszą analitykę',
			features: [
				'Wszystko co w planie Podstawowym',
				'Do 7 sekcji na stronie',
				'Możliwość edycji treści strony',
				'Blog z systemem edycji treści',
				'Monitoring wydajności (Sentry)',
				'Analityka zachowań (PostHog)',
				'Priorytetowe wsparcie',
				'Integracja z mapami Google',
				'Interaktywna mapa Google z lokalizacją firmy',
			],
			isPopular: true,
		},
		{
			name: 'Indywidualny',
			monthlyPrice: 'Ustalmy',
			oneTimePrice: 'Ustalmy',
			description:
				'Pełna customizacja i nielimitowane możliwości dla wymagających firm',
			features: [
				'Dedykowane funkcje na zamówienie',
				'Możliwość dodania elementów 3D',
				'zaawansowane animacje oraz efekty',
				'System rezerwacji online',
				'Wielojęzyczność',
				'Dodanie przełącznika dark mode / light mode',
				'Możliwość stworzenia sklepu internetowego',
				'Newsletter i system mailingowy',
				'Integracja z systemami płatności',
				'Moduł opinii i recenzji',
				'Chatbot lub widget czatu',
			],
		},
	]

	const PriceDisplay = ({ plan }: { plan: typeof plans[0] }) => {
		if (plan.name === 'Indywidualny') {
			return <span className='text-lg'>wycena indywidualna</span>
		}

		return (
			<div className='relative h-[60px] flex items-center justify-center'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={isMonthly ? 'monthly' : 'onetime'}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className='absolute'
					>
						<span className='font-heading font-semibold text-4xl'>
							{isMonthly ? plan.monthlyPrice : plan.oneTimePrice}
						</span>
						<span className='text-sm'>
							{isMonthly ? '/miesięcznie' : '/jednorazowo'}
						</span>
					</motion.div>
				</AnimatePresence>
			</div>
		)
	}

	return (
		<section
			id='cennik'
			className='container flex flex-col items-center gap-6 py-14 md:py-24 sm:gap-7 scroll-mt-header'
		>
			<AnimatedElement className='flex flex-col gap-3'>
				<span className='font-bold uppercase text-primary text-center'>
					Cennik
				</span>
				<h2 className='font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center'>
					Przyjazne ceny
				</h2>
				<p className='text-lg text-muted-foreground text-balance max-w-lg text-center'>
					Cennik, który dopasuje się do Twoich potrzeb
				</p>
			</AnimatedElement>

			<AnimatedElement className='flex items-center gap-2 mt-4'>
				<span
					className={
						isMonthly ? 'text-foreground' : 'text-muted-foreground'
					}
					>
						Subskrypcyjnie
				</span>
				<Switch
					checked={!isMonthly}
					onCheckedChange={() => setIsMonthly(!isMonthly)}
					className='data-[state=checked]:bg-primary'
					aria-label={
						isMonthly
							? 'Zmień na opcję jednorazową'
							: 'Zmień na opcję subskrypcyjną'
					}
				/>
				<span
					className={
						!isMonthly ? 'text-foreground' : 'text-muted-foreground'
					}
				>
					Jednorazowo
				</span>
			</AnimatedElement>

			<div className='mt-7 grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>
				{plans.map((plan, index) => (
					<AnimatedElement
						key={index}
						delay={typeof window !== 'undefined' && window.innerWidth >= 768 ? index * 0.2 : 0}
					>
						<Card
							className={`relative h-full shadow-lg ${plan.isPopular ? 'border-2 border-primary' : ''}`}
						>
							<CardContent className='flex h-full flex-col p-0'>
								<div className='flex flex-col items-center px-7 py-10'>
									{plan.isPopular && (
										<span className='absolute inset-x-0 -top-5 mx-auto rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md w-40'>
											Najpopularniejsze
										</span>
									)}
									<h3 className='font-heading text-2xl font-semibold text-foreground'>
										{plan.name}
									</h3>
									<p className='mt-2 text-muted-foreground text-center'>
										{plan.description}
									</p>
									<div className='mt-5'>
										<PriceDisplay plan={plan} />
									</div>
									<Button size='lg' asChild className='mt-10 w-full'>
										<a href='/kontakt'>Skontaktuj się z nami</a>
									</Button>
								</div>
								<ul className='flex-1 space-y-2 px-7 py-10'>
									{plan.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className='flex items-center gap-3'
										>
											<Check size={24} className='text-primary flex-shrink-0' />
											<span className='text-muted-foreground'>
												{feature}
											</span>
										</li>
									))}
								</ul>
								{plan.name !== 'Indywidualny' && (
									<div className='px-7 py-4'>
										<p className='text-xs text-muted-foreground'>
											* Podane ceny są cenami netto, należy doliczyć 23%
											VAT
										</p>
										<p className='text-xs text-muted-foreground'>
											* Rozpoczęcie projektu po wpłacie zadatku 500 zł
										</p>
									</div>
								)}
							</CardContent>
						</Card>
					</AnimatedElement>
				))}
			</div>
		</section>
	)
}
