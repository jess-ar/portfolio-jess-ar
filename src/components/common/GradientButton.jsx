import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

const focusStyle = `
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-white
  focus-visible:ring-offset-2
  focus-visible:ring-offset-black
`;

const gradientButtonVariants = {
  default: `
    gradient-button inline-flex items-center justify-center rounded-[11px]
    min-w-[100px] px-4 py-2 md:px-7 md:py-2.5 lg:py-3.5
    text-xs md:text-base lg:text-base leading-[19px] text-white font-sans font-bold
    ${focusStyle}
    disabled:pointer-events-none disabled:opacity-50
  `,

  variant: `
    gradient-button-variant inline-flex items-center justify-center rounded-[11px]
    min-w-[100px] px-6 py-3 md:px-7 md:py-4 lg:py-3.5
    text-xs md:text-base lg:text-base leading-[19px] text-white font-sans font-bold
    ${focusStyle}
    disabled:pointer-events-none disabled:opacity-50
  `,

  neutral: `
    gradient-button-neutral inline-flex items-center justify-center rounded-[11px]
    min-w-[100px] px-4 py-2 md:px-7 md:py-2.5 lg:py-3.5
    text-xs md:text-base lg:text-base leading-[19px] text-white font-sans font-bold
    ${focusStyle}
    disabled:pointer-events-none disabled:opacity-50
  `,
};

const GradientButton = React.forwardRef(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx(gradientButtonVariants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
