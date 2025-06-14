"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

type SlideInProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  duration?: number
}

export default function SlideIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.5,
}: SlideInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return { y: distance }
    }
  }

  const motionProps: MotionProps = {
    initial: {
      opacity: 0,
      ...getInitialPosition(),
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      ...getInitialPosition(),
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
