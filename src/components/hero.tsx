import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { TextShimmer } from '@/components/magicui/text-shimmer'
import { Button } from '@/components/ui/button'
import { BorderBeam } from '@/components/magicui/border-beam'
import { AnimatedElement } from '@/components/motion/animated-element'

export function Hero() {
	return (
		<section className='container flex flex-col items-center gap-10 pb-14 pt-10 md:pb-28 md:pt-20 sm:gap-14 lg:flex-row'>
			<div className='flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10'>
				<AnimatedElement as='div' delay={0.1}>
					<Link
						href='#cennik'
						scroll={true}
						className='inline-flex h-7 items-center justify-between rounded-full border bg-secondary text-secondary-foreground px-3 text-xs transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem]'
					>
						<TextShimmer className='inline-flex items-center justify-center'>
							<span className='text-xs text-secondary-foreground/80'>
								Zacznij już za 150 PLN / miesiąc
							</span>
							<ArrowRight
								size={20}
								className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5'
							/>
						</TextShimmer>
					</Link>
				</AnimatedElement>

				<AnimatedElement
					as='h1'
					delay={0.2}
					className='max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl lg:text-left tracking-tight'
				>
					Stwórz stronę, która przyciągnie klientów
				</AnimatedElement>

				<AnimatedElement
					as='p'
					delay={0.3}
					className='max-w-md text-center text-lg text-muted-foreground lg:text-left'
				>
					Tworzymy szybkie i nowoczesne strony internetowe z
					wykorzystaniem technologii Next.js, które zwiększają
					sprzedaż i budują wiarygodność Twojej firmy.
				</AnimatedElement>

				<AnimatedElement delay={0.4}>
					<div className='grid gap-3'>
						<Button size='lg' asChild>
							<Link href='#korzysci' scroll={true}>
								Dowiedz się więcej!
							</Link>
						</Button>
					</div>
				</AnimatedElement>
			</div>

			<AnimatedElement
				delay={0.5}
				className='relative flex-1'
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
			>
				<Link
					href='https://myciecisnieniem.pl/'
					target='_blank'
					rel='noopener noreferrer'
					className='block'
				>
					<BorderBeam
						size={200}
						anchor={90}
						colorTo='#0000'
						duration={10}
						borderWidth={1.8}
						className='rounded-xl'
					/>

					<Image
						alt='Przykład nowoczesnej strony internetowej'
						src='/images/hero-image.webp'
						width={1482}
						height={899}
						priority
						quality={90}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1482px'
						className='rounded-xl border border-border shadow-lg hover:opacity-95 transition-opacity'
					/>
				</Link>
				<div className='absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]' />
			</AnimatedElement>
		</section>
	)
}
