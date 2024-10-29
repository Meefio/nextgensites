'use client'
import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
	title: string
	content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect()
			setHeight(rect.height)
		}
	}, [ref])

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 10%', 'end 50%'],
	})

	const heightTransform = useTransform(
		scrollYProgress,
		[0, 1],
		[0, height]
	)
	const opacityTransform = useTransform(
		scrollYProgress,
		[0, 0.1],
		[0, 1]
	)

	return (
		<section
			className='container flex flex-col items-center gap-6 py-24 md:px-10'
			ref={containerRef}
		>
			<div className='flex flex-col gap-3 animate-fade-in'>
				<span className='font-bold uppercase text-primary text-center'>
					Jak działamy
				</span>
				<h2 className='font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center'>
					Proces współpracy krok po kroku
				</h2>
				<p className='text-lg text-muted-foreground text-balance max-w-lg text-center'>
					Przejrzysty plan współpracy od kontaktu po finalizację
					projektu
				</p>
			</div>

			<div ref={ref} className='relative mx-auto pb-20'>
				{data.map((item, index) => (
					<div
						key={index}
						className='flex justify-start pt-10 md:pt-40 md:gap-10'
					>
						<div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs md:w-full'>
							<div className='h-10 absolute left-3 w-10 rounded-full bg-background flex items-center justify-center'>
								<div className='h-4 w-4 rounded-full bg-muted-foreground p-2' />
							</div>
							<h3 className='hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground'>
								{item.title}
							</h3>
						</div>

						<div className='relative pl-20 pr-4 md:pl-4 w-full'>
							<h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground'>
								{item.title}
							</h3>
							{item.content}
						</div>
					</div>
				))}
				<div
					style={{ height: height + 'px' }}
					className='absolute left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-muted-foreground to-transparent'
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary to-transparent rounded-full'
					/>
				</div>
			</div>
		</section>
	)
}
