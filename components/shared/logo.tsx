import * as React from "react"

interface LogoProps {
  variant?: "full" | "mark"
  className?: string
  ariaLabel?: string
}

export function Logo({ variant = "full", className, ariaLabel = "MedFlow Pro" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      className={className}
      aria-label={ariaLabel}
      role="img"
    >
      {variant === "full" ? (
        <>
          {/* Símbolo - curva em S estilizada com círculo */}
          <path
            d="M12 25c0-5 3-9 8-9s7 4 7 9-3 9-8 9-7-4-7-9z"
            fill="currentColor"
            opacity="0.8"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          {/* Wordmark */}
          <text
            x="35"
            y="32"
            className="font-semibold tracking-tight"
            fontSize="24"
            fill="currentColor"
          >
            MedFlow
          </text>
        </>
      ) : (
        <>
          <path d="M12 25c0-5 3-9 8-9s7 4 7 9-3 9-8 9-7-4-7-9z" fill="currentColor" opacity="0.8" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </>
      )}
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      MedFlow Pro
    </span>
  )
}
