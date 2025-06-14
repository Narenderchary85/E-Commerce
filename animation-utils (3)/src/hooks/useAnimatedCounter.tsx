"use client"

import { useEffect, useState } from "react"
import { animate } from "framer-motion"

type UseAnimatedCounterProps = {
  from?: number
  to: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
}

export function useAnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  formatter = (value) => Math.round(value).toString(),
}: UseAnimatedCounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      delay,
      onUpdate: (value) => setCount(value),
      ease: "easeInOut",
    })

    return () => controls.stop()
  }, [from, to, duration, delay])

  return formatter(count)
}
