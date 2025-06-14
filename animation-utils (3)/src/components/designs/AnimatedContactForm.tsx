"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import AnimateIn from "../animations/AnimateIn"
import TextReveal from "../animations/TextReveal"
import AnimatedButton from "../ui/AnimatedButton"
import { AnimatePresence } from "framer-motion"

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

export default function AnimatedContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after a delay
        setTimeout(() => {
          setFormState({ name: "", email: "", message: "" })
          setIsSubmitted(false)
        }, 3000)
      }, 1500)
    }
  }

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">Contact Us</h2>
          </AnimateIn>
          <TextReveal className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in touch with our team
          </TextReveal>
          <AnimateIn delay={0.3}>
            <p className="mt-4 text-xl text-gray-500">
              Have questions or need assistance? We're here to help. Fill out the form below and we'll get back to you
              as soon as possible.
            </p>
          </AnimateIn>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="rounded-lg bg-green-50 p-6 text-center"
              >
                <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
                <h3 className="text-xl font-medium text-green-800">Message Sent!</h3>
                <p className="mt-2 text-green-600">Thank you for reaching out. We'll be in touch shortly.</p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <motion.div
                      animate={errors.name ? { x: [0, -10, 10, -10, 0] } : {}}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                    </motion.div>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <motion.div
                      animate={errors.email ? { x: [0, -10, 10, -10, 0] } : {}}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                    </motion.div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <motion.div
                      animate={errors.message ? { x: [0, -10, 10, -10, 0] } : {}}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                          errors.message ? "border-red-500" : ""
                        }`}
                      />
                    </motion.div>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <AnimatedButton
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </motion.div>
                    ) : (
                      <motion.div className="flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatedButton>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
