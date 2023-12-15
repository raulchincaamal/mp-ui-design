import React from "react"

export type Size = "sm" | "md" | "lg" | "xl"
export type Type = "primary" | "secondary" | "text" | "default"

export interface IColorVariants {
  bgColor?: string
  color: string
}

export interface IButton {
  children: React.ReactNode
  type?: Type
  size?: Size
}
