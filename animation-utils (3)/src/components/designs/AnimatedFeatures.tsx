"use client"

import { motion } from "framer-motion"
import { Zap, Shield, BarChart, Layers, Users, Globe } from "lucide-react"
import Stagger from "../animations/Stagger"
import StaggerItem from "../animations/StaggerItem"
import AnimateIn from "../animations/AnimateIn"
import TextReveal from "../animations/TextReveal"

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring your users have a seamless experience.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure by Design",
    description: "Built with security in mind, protecting your data and your users' privacy.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Detailed Analytics",
    description: "Gain insights into user behavior with comprehensive analytics tools.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Modular Architecture",
    description: "Our component-based design allows for easy customization and scaling.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with built-in collaboration features.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global CDN",
    description: "Content delivery optimized for users anywhere in the world.",
  },
]

export default function AnimatedFeatures() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">Features</h2>
          </AnimateIn>
          <TextReveal className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </TextReveal>
          <AnimateIn delay={0.3}>
            <p className="mt-4 text-xl text-gray-500">
              Our platform provides all the tools you need to build, launch, and grow your digital presence.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-20">
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" delayChildren={0.1} staggerChildren={0.1}>
            {features.map((feature, index) => (
              <StaggerItem key={index} direction="up" distance={30}>
                <motion.div
                  className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
