"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import TextReveal from "../animations/TextReveal"
import AnimateIn from "../animations/AnimateIn"
import ParallaxScroll from "../animations/ParallaxScroll"
import AnimatedButton from "../ui/AnimatedButton"

export default function AnimatedHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-md"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-2 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-sm font-medium"
            >
              Introducing Our Platform
            </motion.div>

            <TextReveal className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transform Your Digital Experience
            </TextReveal>

            <AnimateIn delay={0.3} className="mb-8 max-w-xl text-lg text-slate-300">
              <p>
                Elevate your online presence with our cutting-edge platform. Designed for performance, built for
                success, and optimized for growth.
              </p>
            </AnimateIn>

            <div className="flex flex-wrap gap-4">
              <AnimateIn delay={0.5}>
                <AnimatedButton size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </AnimateIn>

              <AnimateIn delay={0.6}>
                <AnimatedButton size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Learn More
                </AnimatedButton>
              </AnimateIn>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <ParallaxScroll speed={0.2} direction="up">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-900/80 p-1 backdrop-blur-sm"
              >
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-30" />
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Dashboard Preview"
                    className="h-auto w-full rounded-lg object-cover"
                    width={800}
                    height={600}
                  />
                </div>
              </motion.div>
            </ParallaxScroll>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-blue-500/30 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-purple-500/30 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
