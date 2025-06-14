"use client"

import { motion } from "framer-motion"
import { useState, type ReactNode } from "react"

type Tab = {
  id: string
  label: ReactNode
  content: ReactNode
}

type AnimatedTabsProps = {
  tabs: Tab[]
  defaultTabId?: string
  className?: string
  tabClassName?: string
  contentClassName?: string
}

export default function AnimatedTabs({
  tabs,
  defaultTabId,
  className = "",
  tabClassName = "",
  contentClassName = "",
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id)

  return (
    <div className={className}>
      <div className="relative flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            } ${tabClassName}`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className={`mt-4 ${contentClassName}`}>
        <AnimatePresenceWrapper mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.content}
                </motion.div>
              ),
          )}
        </AnimatePresenceWrapper>
      </div>
    </div>
  )
}

function AnimatePresenceWrapper({ children, mode = "wait" }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  )
}
