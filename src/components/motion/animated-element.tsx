"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"

type MotionTags = "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "section" | "li" | 'ul'

interface AnimatedElementProps extends HTMLMotionProps<"div"> {
  as?: MotionTags
  children?: React.ReactNode
  delay?: number
}

export const AnimatedElement = forwardRef<HTMLElement, AnimatedElementProps>(
  ({ as = "div", children, delay = 0, className, ...props }, ref) => {
    const MotionComponent = (motion as any)[as] || motion.div

    return (
      <MotionComponent
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.4, 0, 0.2, 1],
        }}
        {...props}
      >
        {children}
      </MotionComponent>
    )
  }
)

AnimatedElement.displayName = "AnimatedElement" 