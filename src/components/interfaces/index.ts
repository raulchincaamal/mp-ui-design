import React, { MouseEventHandler } from "react"

export type Size = "sm" | "md" | "lg" | "xl"
export type Type = "primary" | "secondary" | "text" | "default" | "danger"
export type JustifyContent =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
export type AlignItems = "start" | "center" | "end" | "baseline"
export type FlexSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type FlexDirection = "vertical" | "horizontal"
export interface IColorVariants {
  bgColor?: string
  color: string
}

export interface IButton {
  children: React.ReactNode
  type?: Type
  size?: Size
  isDisabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface IFlex {
  children: React.ReactNode
  rootClassName?: string
  justify?: JustifyContent
  align?: AlignItems
  size?: FlexSize
  direction?: FlexDirection
  isReverse?: boolean
}
