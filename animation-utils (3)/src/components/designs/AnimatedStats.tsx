"use client"

import { motion } from "framer-motion"
import AnimateIn from "../animations/AnimateIn"
import TextReveal from "../animations/TextReveal"
import { useEffect, useState } from "react"

const stats = [
  {
    id: 1,
    name: "Active Users",
    value: 10000,
    suffix: "+",
    formatter: (value: number) => Math.round(value).toLocaleString(),
  },
  { id: 2, name: "Countries", value: 120, suffix: "+", formatter: (value: number) => Math.round(value).toString() },
  { id: 3, name: "Uptime", value: 99.9, suffix: "%", formatter: (value: number) => value.toFixed(1) },
  {
    id: 4,
    name: "Projects Delivered",
    value: 5000,
    suffix: "+",
    formatter: (value: number) => Math.round(value).toLocaleString(),
  },
]

export default function AnimatedStats() {
  const [animatedValues, setAnimatedValues] = useState(
    stats.map((stat) => ({
      id: stat.id,
      value: 0,
    })),
  )

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []

    stats.forEach((stat, index) => {
      const duration = 2
      const delay = 0.5 + index * 0.1
      const startTime = performance.now()

      const tick = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / (duration * 1000), 1) // duration is in seconds

        const currentValue = stat.formatter(stat.value * progress)

        setAnimatedValues((prev) => prev.map((item) => (item.id === stat.id ? { ...item, value: currentValue } : item)))

        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      const timeout = setTimeout(() => {
        requestAnimationFrame(tick)
      }, delay * 1000)

      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <section className="bg-blue-900 py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-300">Our Impact</h2>
          </AnimateIn>
          <TextReveal className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by businesses worldwide
          </TextReveal>
          <AnimateIn delay={0.3}>
            <p className="mt-4 text-xl text-blue-200">
              We've helped thousands of companies achieve their goals. Here's what we've accomplished together.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimateIn key={stat.id} delay={0.2 * index} direction="up">
                <motion.div
                  className="rounded-lg bg-blue-800/50 p-8 text-center backdrop-blur-sm"
                  whileHover={{ y: -5, backgroundColor: "rgba(30, 64, 175, 0.6)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-4xl font-bold text-white sm:text-5xl">
                    {animatedValues.find((item) => item.id === stat.id)?.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-2 text-lg font-medium text-blue-200">{stat.name}</div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
