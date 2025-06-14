"use client"

import { motion } from "framer-motion"
import AnimateIn from "../animations/AnimateIn"
import TextReveal from "../animations/TextReveal"

const timelineItems = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Our journey began with a small team and a big vision to transform the industry.",
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Secured our first enterprise client, validating our approach and technology.",
  },
  {
    year: "2020",
    title: "Platform Launch",
    description: "Officially launched our platform after months of development and testing.",
  },
  {
    year: "2021",
    title: "International Expansion",
    description: "Expanded operations to Europe and Asia, establishing a global presence.",
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $10M in Series A funding to accelerate growth and product development.",
  },
  {
    year: "2023",
    title: "Award-Winning Platform",
    description: "Recognized as the industry leader with multiple awards for innovation.",
  },
]

export default function AnimatedTimeline() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">Our Journey</h2>
          </AnimateIn>
          <TextReveal className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Milestones that shaped our story
          </TextReveal>
          <AnimateIn delay={0.3}>
            <p className="mt-4 text-xl text-gray-500">
              From humble beginnings to industry leadership, explore the key moments in our company's history.
            </p>
          </AnimateIn>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-blue-200" />

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <AnimateIn key={index} delay={0.2 * index} threshold={0.2}>
                <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2 px-8">
                    <motion.div
                      className={`rounded-lg bg-white p-6 shadow-md ${
                        index % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none"
                      }`}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="mb-2 text-sm font-bold text-blue-600">{item.year}</div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="relative">
                    <motion.div
                      className="absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 rounded-full bg-blue-600"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    />
                  </div>

                  <div className="w-1/2" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
