"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export default function FadeIn({ children, className = "", delay = 0, duration = 0.5 }: FadeInProps) {
  const motionProps: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration,
      delay,
      ease: "easeInOut",
    },
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
}
