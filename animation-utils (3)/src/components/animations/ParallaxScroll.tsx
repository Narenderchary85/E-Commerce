"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { type ReactNode, useRef } from "react"

type ParallaxScrollProps = {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function ParallaxScroll({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  let transformValue
  switch (direction) {
    case "up":
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`])
      break
    case "down":
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * speed}%`])
      break
    case "left":
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`])
      break
    case "right":
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * speed}%`])
      break
    default:
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`])
  }

  const transformProperty = direction === "up" || direction === "down" ? "y" : "x"

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ [transformProperty]: transformValue }}>{children}</motion.div>
    </div>
  )
}
