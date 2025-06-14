"use client"

import { motion, AnimatePresence } from "framer-motion"
import { type ReactNode, useState, useEffect } from "react"
import { X } from "lucide-react"

type ToastProps = {
  id: string
  title?: string
  description?: ReactNode
  duration?: number
  onClose: (id: string) => void
  variant?: "default" | "success" | "error" | "warning" | "info"
}

export function Toast({ id, title, description, duration = 5000, onClose, variant = "default" }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose(id), 300) // Wait for exit animation
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, id, onClose])

  const variantStyles = {
    default: "bg-background border",
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`rounded-md border shadow-lg p-4 max-w-md ${variantStyles[variant]}`}
        >
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              {title && <div className="font-medium">{title}</div>}
              {description && <div className="text-sm mt-1">{description}</div>}
            </div>
            <button
              onClick={() => {
                setIsVisible(false)
                setTimeout(() => onClose(id), 300)
              }}
              className="rounded-full p-1 hover:bg-muted/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

type ToastProviderProps = {
  children: ReactNode
}

type ToastData = ToastProps & { id: string }

export function useToast() {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = (toast: Omit<ToastProps, "id" | "onClose">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...toast, id, onClose: removeToast }])
    return id
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return {
    toasts,
    addToast,
    removeToast,
  }
}

export function ToastProvider({ children }: ToastProviderProps) {
  const { toasts, removeToast } = useToast()

  return (
    <>
      {children}
      <div className="fixed bottom-0 right-0 p-4 space-y-4 z-50">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={removeToast} />
        ))}
      </div>
    </>
  )
}
