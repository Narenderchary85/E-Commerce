"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type HoverCardProps = {
  children: ReactNode
  className?: string
  scale?: number
  rotateX?: number
  rotateY?: number
}

export default function HoverCard({
  children,
  className = "",
  scale = 1.05,
  rotateX = 5,
  rotateY = 5,
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        rotateX: `${rotateX}deg`,
        rotateY: `${rotateY}deg`,
        transition: { duration: 0.3 },
      }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}
