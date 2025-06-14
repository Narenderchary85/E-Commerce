"use client"

import { AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

type AnimatePresenceWrapperProps = {
  children: ReactNode
  mode?: "sync" | "wait" | "popLayout"
}

export default function AnimatePresenceWrapper({ children, mode = "sync" }: AnimatePresenceWrapperProps) {
  return <AnimatePresence mode={mode}>{children}</AnimatePresence>
}
