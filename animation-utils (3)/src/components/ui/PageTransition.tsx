"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type PageTransitionProps = {
  children: ReactNode
  className?: string
  type?: "fade" | "slide" | "scale" | "none"
}

export default function PageTransition({ children, className = "", type = "fade" }: PageTransitionProps) {
  const getAnimationVariants = () => {
    switch (type) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
        }
      case "slide":
        return {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.3 },
        }
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.3 },
        }
      case "none":
      default:
        return {}
    }
  }

  const animationVariants = getAnimationVariants()

  return (
    <motion.div className={className} {...animationVariants}>
      {children}
    </motion.div>
  )
}
