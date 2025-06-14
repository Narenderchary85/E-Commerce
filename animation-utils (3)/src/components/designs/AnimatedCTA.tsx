"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimateIn from "../animations/AnimateIn"
import TextReveal from "../animations/TextReveal"
import AnimatedButton from "../ui/AnimatedButton"

export default function AnimatedCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-200">Ready to Get Started?</h2>
          </AnimateIn>
          <TextReveal className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Transform your business today
          </TextReveal>
          <AnimateIn delay={0.3} className="mt-4 text-xl text-blue-100">
            <p>
              Join thousands of satisfied customers who have taken their business to the next level with our platform.
            </p>
          </AnimateIn>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <AnimateIn delay={0.5}>
              <AnimatedButton size="lg" className="bg-white text-blue-600 hover:bg-blue-50" withRipple={false}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </AnimateIn>

            <AnimateIn delay={0.6}>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                withRipple={false}
              >
                Schedule a Demo
              </AnimatedButton>
            </AnimateIn>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-8 rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:grid-cols-3">
          {[
            { label: "Satisfied Customers", value: "10,000+" },
            { label: "Uptime Guarantee", value: "99.9%" },
            { label: "Support Response", value: "< 2 hours" },
          ].map((stat, index) => (
            <AnimateIn key={index} delay={0.7 + index * 0.1} direction="up">
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-blue-200">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
