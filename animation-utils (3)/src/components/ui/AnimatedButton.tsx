"use client"

import { motion } from "framer-motion"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  withRipple?: boolean
}

export default function AnimatedButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  withRipple = true,
  ...props
}: AnimatedButtonProps) {
  // Base styles
  const baseStyles =
    "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"

  // Variant styles
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/50",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/50",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-primary/50",
  }

  // Size styles
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}

      {withRipple && (
        <motion.span
          className="absolute inset-0 rounded-md bg-white"
          initial={{ opacity: 0 }}
          whileTap={{
            opacity: 0.3,
            scale: 1.5,
            transition: { duration: 0.4 },
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.button>
  )
}
