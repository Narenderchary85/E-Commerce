"use client"
import { Check } from "lucide-react"
import HoverCard from "../animations/HoverCard"
import AnimateIn from "../animations/AnimateIn"
import TextReveal from "../animations/TextReveal"
import AnimatedButton from "../ui/AnimatedButton"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small projects",
    features: ["Up to 5 projects", "Basic analytics", "24/7 support", "1GB storage"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing businesses and teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited everything",
      "Enterprise analytics",
      "Dedicated support",
      "100GB storage",
      "Custom domains",
      "Advanced security",
      "API access",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function AnimatedPricing() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">Pricing</h2>
          </AnimateIn>
          <TextReveal className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for you
          </TextReveal>
          <AnimateIn delay={0.3}>
            <p className="mt-4 text-xl text-gray-500">
              Simple, transparent pricing that grows with your business. No hidden fees.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimateIn key={plan.name} delay={0.2 * index} direction="up">
              <HoverCard scale={1.02} rotateX={0} rotateY={0}>
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border ${
                    plan.popular
                      ? "border-blue-600 bg-white shadow-lg"
                      : "border-gray-200 bg-white shadow-sm hover:border-gray-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -right-12 top-6 w-40 rotate-45 bg-blue-600 py-1 text-center text-sm font-semibold text-white">
                      Popular
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                      <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
                    </div>
                    <p className="mt-2 text-gray-500">{plan.description}</p>

                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <AnimatedButton
                        className={`w-full ${
                          plan.popular
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-white text-blue-600 hover:bg-gray-50"
                        } ${!plan.popular && "border border-blue-600"}`}
                      >
                        {plan.cta}
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
