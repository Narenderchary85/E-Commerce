"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import AnimateIn from "../animations/AnimateIn"
import TextReveal from "../animations/TextReveal"

const testimonials = [
  {
    id: 1,
    content:
      "This platform has completely transformed our workflow. The intuitive interface and powerful features have helped us increase productivity by over 40%.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "I've tried many similar solutions, but none compare to this. The attention to detail and customer support are unmatched in the industry.",
    author: "Michael Chen",
    role: "CTO at StartupX",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "The ROI we've seen since implementing this platform has been incredible. It's rare to find a solution that delivers on all its promises.",
    author: "Emily Rodriguez",
    role: "Marketing Director at GrowthCo",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function AnimatedTestimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">Testimonials</h2>
          </AnimateIn>
          <TextReveal className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our customers are saying
          </TextReveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -top-10 left-0 text-blue-200 opacity-50">
            <Quote size={80} />
          </div>

          <div className="relative overflow-hidden px-4 py-10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex flex-col items-center"
              >
                <p className="mb-8 text-center text-xl text-gray-600">{testimonials[current].content}</p>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[current].avatar || "/placeholder.svg"}
                    alt={testimonials[current].author}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <h4 className="mt-4 font-medium text-gray-900">{testimonials[current].author}</h4>
                  <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={handlePrev}
              className="rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`h-2 w-2 rounded-full ${
                    index === current ? "bg-blue-600" : "bg-gray-300"
                  } transition-all hover:bg-blue-400`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg focus:outline-none"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
