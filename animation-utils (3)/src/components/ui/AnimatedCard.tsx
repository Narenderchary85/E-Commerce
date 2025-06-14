"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type AnimatedCardProps = {
  children: ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "border" | "none"
}

export default function AnimatedCard({ children, className = "", hoverEffect = "lift" }: AnimatedCardProps) {
  const baseStyles = "rounded-lg overflow-hidden"

  const getHoverStyles = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          whileHover: { y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" },
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }
      case "glow":
        return {
          whileHover: { boxShadow: "0 0 15px 5px rgba(66, 153, 225, 0.3)" },
          transition: { duration: 0.3 },
        }
      case "border":
        return {
          whileHover: { outline: "2px solid rgba(66, 153, 225, 0.5)" },
          transition: { duration: 0.2 },
        }
      case "none":
      default:
        return {}
    }
  }

  const hoverStyles = getHoverStyles()

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      {...hoverStyles}
    >
      {children}
    </motion.div>
  )
}
