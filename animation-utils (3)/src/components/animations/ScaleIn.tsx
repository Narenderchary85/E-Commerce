"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

type ScaleInProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  initialScale?: number
}

export default function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  initialScale = 0.9,
}: ScaleInProps) {
  const motionProps: MotionProps = {
    initial: {
      opacity: 0,
      scale: initialScale,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: initialScale,
    },
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
}
