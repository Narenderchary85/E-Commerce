"use client"

import { motion, type Variant } from "framer-motion"
import type { ReactNode } from "react"

type StaggerItemProps = {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export default function StaggerItem({ children, className = "", direction = "up", distance = 20 }: StaggerItemProps) {
  const getVariants = () => {
    const variants: Record<string, Variant> = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    }

    switch (direction) {
      case "up":
        variants.hidden = { ...variants.hidden, y: distance }
        variants.show = { ...variants.show, y: 0 }
        break
      case "down":
        variants.hidden = { ...variants.hidden, y: -distance }
        variants.show = { ...variants.show, y: 0 }
        break
      case "left":
        variants.hidden = { ...variants.hidden, x: distance }
        variants.show = { ...variants.show, x: 0 }
        break
      case "right":
        variants.hidden = { ...variants.hidden, x: -distance }
        variants.show = { ...variants.show, x: 0 }
        break
    }

    return variants
  }

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  )
}
