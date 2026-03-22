'use client'

import { ReactNode, useState } from "react"

export default function InteractiveCard({ children }: { children: ReactNode }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className={`rounded-lg ${
        isHover ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"
      }`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {children}
    </div>
  )
}