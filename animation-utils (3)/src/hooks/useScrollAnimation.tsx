"use client"

import { useScroll, useTransform, type MotionValue } from "framer-motion"
import { type RefObject, useRef } from "react"

type UseScrollAnimationProps = {
  inputRange?: [number, number]
  outputRange: [string | number, string | number]
  axis?: "y" | "x"
  offset?: [string, string]
}

export function useScrollAnimation({
  inputRange = [0, 1],
  outputRange,
  axis = "y",
  offset = ["start end", "end start"],
}: UseScrollAnimationProps): [RefObject<HTMLDivElement>, MotionValue<string | number>] {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
    offset,
  })

  const scrollProgress = axis === "y" ? scrollYProgress : scrollXProgress
  const transformValue = useTransform(scrollProgress, inputRange, outputRange)

  return [ref, transformValue]
}
