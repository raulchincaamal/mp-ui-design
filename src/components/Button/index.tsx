import { IButton, IColorVariants, Type } from "./../interfaces"

const colorVariants: Record<Type, IColorVariants> = {
  default: {
    bgColor:
      "bg-blue-800 border-blue-800 hover:bg-blue-900 hover:border-blue-900 shadow ",
    color: "text-white",
  },
  primary: {
    bgColor:
      "bg-yellow-400 border-yellow-400 text-blue-800 hover:bg-yellow-500 hover:border-yellow-500 shadow ",
    color: "text-blue-800",
  },
  secondary: {
    bgColor:
      "bg-white border-blue-800 text-blue-800 hover:text-blue-900 hover:border-blue-900 shadow",
    color: "text-blue-900",
  },
  text: {
    bgColor: "border-zinc-300 border-opacity-0",
    color: "text-blue-800 hover:text-blue-900",
  },
  danger: {
    bgColor: "bg-red-500 border border-red-500 hover:bg-red-600 shadow",
    color: "text-white",
  },
}

export const Button = ({
  children,
  type = "default",
  onClick,
  isDisabled,
}: IButton) => {
  const { bgColor, color } = colorVariants[type]
  const styleTextColor = `text-center ${color} firs font-normal font-['Avenir LT Pro'] sm:text-sm md:text-sm leading-snug lg:text-base xl:text-base sm:leading-snug md:leading-snug lg:leading-normal xl:leading-normal`

  return (
    <button
      className={`${bgColor} ${styleTextColor} disabled:border-zinc-300 disabled:bg-neutral-100 disabled:text-stone-300 border px-[15px] rounded shadow-none justify-center items-center gap-2 inline-flex sm:w-[109px] sm:h-6 md:w-[109px] md:h-8 md:py-1 md:rounded-md lg:w-[120px] lg:h-10 lg:py-[7px] lg:rounded-lg xl:w-[120px] xl:h-12 xl:py-[11px] xl:rounded-lg`}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
