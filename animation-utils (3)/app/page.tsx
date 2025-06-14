"use client"

import AnimateIn from "../src/components/animations/AnimateIn"
import FadeIn from "../src/components/animations/FadeIn"
import SlideIn from "../src/components/animations/SlideIn"
import ScaleIn from "../src/components/animations/ScaleIn"
import Stagger from "../src/components/animations/Stagger"
import StaggerItem from "../src/components/animations/StaggerItem"
import HoverCard from "../src/components/animations/HoverCard"
import ParallaxScroll from "../src/components/animations/ParallaxScroll"
import TextReveal from "../src/components/animations/TextReveal"
import { useAnimatedCounter } from "../src/hooks/useAnimatedCounter"
import AnimatedButton from "../src/components/ui/AnimatedButton"
import AnimatedCard from "../src/components/ui/AnimatedCard"
import AnimatedTabs from "../src/components/ui/AnimatedTabs"
import AnimatedAccordion from "../src/components/ui/AnimatedAccordion"
import AnimatedLoader from "../src/components/ui/AnimatedLoader"
import { ToastProvider } from "../src/components/ui/AnimatedToast"
import PageTransition from "../src/components/ui/PageTransition"

export default function Page() {
  return (
    <PageTransition>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">Framer Motion Examples</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AnimateIn</h2>
          <AnimateIn>
            <p>This element will fade in and slide up when it comes into view.</p>
          </AnimateIn>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">FadeIn</h2>
          <FadeIn>
            <p>This element will fade in on mount.</p>
          </FadeIn>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">SlideIn</h2>
          <SlideIn direction="left">
            <p>This element will slide in from the left on mount.</p>
          </SlideIn>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">ScaleIn</h2>
          <ScaleIn>
            <p>This element will scale in on mount.</p>
          </ScaleIn>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Stagger</h2>
          <Stagger>
            <StaggerItem>Item 1</StaggerItem>
            <StaggerItem>Item 2</StaggerItem>
            <StaggerItem>Item 3</StaggerItem>
          </Stagger>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">HoverCard</h2>
          <HoverCard>
            <div className="p-4 bg-white rounded-md shadow-md">Hover me!</div>
          </HoverCard>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">ParallaxScroll</h2>
          <div style={{ height: "300px", overflow: "auto" }}>
            <ParallaxScroll>
              <div
                style={{
                  height: "600px",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Parallax Content
              </div>
            </ParallaxScroll>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TextReveal</h2>
          <TextReveal>Animated Text Reveal</TextReveal>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AnimatedCounter</h2>
          <p>Count: {useAnimatedCounter({ to: 100 })}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AnimatedButton</h2>
          <AnimatedButton>Click Me</AnimatedButton>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AnimatedCard</h2>
          <AnimatedCard>
            <div className="p-4">Card Content</div>
          </AnimatedCard>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AnimatedTabs</h2>
          <AnimatedTabs
            tabs={[
              { id: "tab1", label: "Tab 1", content: <div>Content 1</div> },
              { id: "tab2", label: "Tab 2", content: <div>Content 2</div> },
            ]}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AnimatedAccordion</h2>
          <AnimatedAccordion
            items={[
              { id: "item1", title: "Item 1", content: <div>Content 1</div> },
              { id: "item2", title: "Item 2", content: <div>Content 2</div> },
            ]}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AnimatedLoader</h2>
          <AnimatedLoader />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AnimatedToast</h2>
          <ToastProvider>
            <div>Toast Example</div>
          </ToastProvider>
        </section>
      </div>
    </PageTransition>
  )
}
