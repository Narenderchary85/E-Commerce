"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type StaggerProps = {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export default function Stagger({ children, className = "", delayChildren = 0, staggerChildren = 0.1 }: StaggerProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  }

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  )
}
