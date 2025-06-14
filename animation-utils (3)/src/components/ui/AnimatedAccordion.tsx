"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, type ReactNode } from "react"
import { ChevronDown } from "lucide-react"

type AccordionItem = {
  id: string
  title: ReactNode
  content: ReactNode
}

type AnimatedAccordionProps = {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
  itemClassName?: string
}

export default function AnimatedAccordion({
  items,
  allowMultiple = false,
  className = "",
  itemClassName = "",
}: AnimatedAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((itemId) => itemId !== id))
    } else {
      if (allowMultiple) {
        setOpenItems([...openItems, id])
      } else {
        setOpenItems([id])
      }
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id)

        return (
          <div key={item.id} className={`border rounded-md overflow-hidden ${itemClassName}`}>
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50"
            >
              <span>{item.title}</span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.3,
                      },
                      opacity: {
                        duration: 0.3,
                        delay: 0.1,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.3,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    },
                  }}
                >
                  <div className="px-4 pb-4 pt-0">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
