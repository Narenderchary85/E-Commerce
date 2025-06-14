"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type TextRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
}

export default function TextReveal({ children, className = "", delay = 0, staggerChildren = 0.03 }: TextRevealProps) {
  // Convert children to string if possible
  const text = children?.toString() || ""

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={className}
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {Array.from(text).map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
