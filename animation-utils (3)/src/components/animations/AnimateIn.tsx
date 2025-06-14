"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

type AnimateInProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  once?: boolean
  threshold?: number
  type?: "spring" | "tween"
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
  threshold = 0.1,
  type = "spring",
}: AnimateInProps) {
  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  const motionProps: MotionProps = {
    initial: {
      opacity: 0,
      ...directionMap[direction],
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    viewport: { once, threshold },
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
}
