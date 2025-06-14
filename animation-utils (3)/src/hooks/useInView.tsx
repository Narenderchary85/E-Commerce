"use client"

import { useInView as useFramerInView } from "framer-motion"
import { type RefObject, useRef } from "react"

type UseInViewProps = {
  once?: boolean
  threshold?: number
  margin?: string
}

export function useInView({
  once = true,
  threshold = 0.1,
  margin = "0px",
}: UseInViewProps = {}): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useFramerInView(ref, {
    once,
    amount: threshold,
    margin,
  })

  return [ref, isInView]
}
