import {
  IFlex,
  JustifyContent,
  AlignItems,
  FlexSize,
  FlexDirection,
} from "./../interfaces"

const justifyVariants: Record<JustifyContent, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  around: "justify-around",
  between: "justify-between",
  evenly: "justify-evenly",
}

const alignVariants: Record<AlignItems, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
}

const flexSize: Record<FlexSize, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
}

const flexDirection: Record<FlexDirection, string> = {
  horizontal: "flex-row",
  vertical: "flex-col",
}

const flexDirectionReverse: Record<FlexDirection, string> = {
  horizontal: "flex-row-reverse",
  vertical: "flex-col-reverse",
}

export const Flex = ({
  children,
  rootClassName = "",
  justify,
  align,
  size,
  direction = "horizontal",
  isReverse = false,
}: IFlex) => {
  const innerJustify = justifyVariants[justify ?? "start"]
  const innerAlign = alignVariants[align ?? "start"]
  const innerFlexSize = flexSize[size ?? 0]
  const innerFlexDirection = isReverse
    ? flexDirectionReverse[direction]
    : flexDirection[direction]

  return (
    <div
      className={`flex ${innerJustify} ${innerAlign} ${innerFlexSize} ${innerFlexDirection} ${rootClassName}`}
    >
      {children}
    </div>
  )
}
