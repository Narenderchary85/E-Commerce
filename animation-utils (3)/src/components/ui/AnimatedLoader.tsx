"use client"

import { motion } from "framer-motion"

type AnimatedLoaderProps = {
  size?: "sm" | "md" | "lg"
  color?: string
  className?: string
  type?: "spinner" | "dots" | "pulse"
}

export default function AnimatedLoader({
  size = "md",
  color = "currentColor",
  className = "",
  type = "spinner",
}: AnimatedLoaderProps) {
  const sizeMap = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  if (type === "dots") {
    return (
      <div className={`flex space-x-1 ${className}`}>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`rounded-full ${sizeMap.sm} bg-current`}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
            style={{ color }}
          />
        ))}
      </div>
    )
  }

  if (type === "pulse") {
    return (
      <motion.div
        className={`rounded-full ${sizeMap[size]} ${className}`}
        initial={{ opacity: 0.3, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ backgroundColor: color }}
      />
    )
  }

  // Default spinner
  return (
    <motion.div
      className={`${sizeMap[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" />
        <path
          className="opacity-75"
          d="M12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19"
          stroke="currentColor"
        />
      </svg>
    </motion.div>
  )
}
