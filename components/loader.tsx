"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const duration = 2500
    const interval = 25
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(onComplete, 500)
          }, 200)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated GIF */}
      <div className="relative mb-2">
        <Image
          src="https://i.pinimg.com/originals/66/11/f9/6611f91e4bff4c3c902fec3aafe87f41.gif"
          alt="Loading animation"
          width={120}
          height={120}
          className="rounded-lg ml-4"
          unoptimized
          priority
        />
      </div>

      {/* Text */}
      <div className="mb-6 text-center">
        <h2 className="text-sm font-light tracking-widest text-muted-foreground uppercase">
          Loading
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="relative h-0.5 w-48 overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute inset-y-0 left-0 bg-primary transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Percentage */}
      <div className="mt-4 font-mono text-xs text-muted-foreground">
        {Math.round(progress)}%
      </div>
    </div>
  )
}
