"use client"

import PageTransition from "../../src/components/ui/PageTransition"
import AnimatedHero from "../../src/components/designs/AnimatedHero"
import AnimatedFeatures from "../../src/components/designs/AnimatedFeatures"
import AnimatedPricing from "../../src/components/designs/AnimatedPricing"
import AnimatedTestimonials from "../../src/components/designs/AnimatedTestimonials"
import AnimatedContactForm from "../../src/components/designs/AnimatedContactForm"
import AnimatedStats from "../../src/components/designs/AnimatedStats"
import AnimatedTimeline from "../../src/components/designs/AnimatedTimeline"
import AnimatedCTA from "../../src/components/designs/AnimatedCTA"

export default function DesignsPage() {
  return (
    <PageTransition>
      <AnimatedHero />
      <AnimatedFeatures />
      <AnimatedStats />
      <AnimatedTimeline />
      <AnimatedPricing />
      <AnimatedTestimonials />
      <AnimatedContactForm />
      <AnimatedCTA />
    </PageTransition>
  )
}
