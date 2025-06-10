import { forwardRef } from "react";
import { clsx } from "clsx";

const VARIANTS = {
  default: {
    shimmerColor: "rgba(255, 255, 255, 0.148)",
    shimmerSize: "0.05em",
    shimmerDuration: "2s",
    borderRadius: "16px",
    background: "linear-gradient(90deg, rgba(30,30,30,1) 0%, #100f0f 100%)",
    shimmerAlwaysOn: false,
  },

  darkMetal: {
    shimmerColor: "rgba(100, 149, 237, 0.5)",
    shimmerSize: "0.1em",
    shimmerDuration: "2s",
    borderRadius: "16px",
    background: "linear-gradient(50deg, #0e5792 10%, #0d0d35 80%, #19105c 120%, #0e5792 100%)",
    boxShadow: "0 0 8px rgba(0, 183, 255, 0.4)",
    shimmerAlwaysOn: true,
  },
};

const ShimmerButton = forwardRef(
  (
    {
      as = "button",
      variant = "default",
      shimmerColor,
      shimmerSize,
      shimmerDuration,
      borderRadius,
      background,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const styles = VARIANTS[variant];
    const Component = as;

    return (
      <Component
        ref={ref}
        {...props}
        style={{
          "--spread": "90deg",
          "--shimmer-color": shimmerColor || styles.shimmerColor,
          "--radius": borderRadius || styles.borderRadius,
          "--speed": shimmerDuration || styles.shimmerDuration,
          "--cut": shimmerSize || styles.shimmerSize,
          "--bg": background || styles.background,
          ...(styles.boxShadow && { boxShadow: styles.boxShadow }),
          ...props.style,
        }}
        className={clsx(
          "group relative z-0 flex items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-4 py-2 text-white [background:var(--bg)] [border-radius:var(--radius)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          "outline-none focus:outline-none focus:ring-0",
          className
        )}
      >
        {/* Shimmer */}
        <div
          className={clsx(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]",
            styles.shimmerAlwaysOn
              ? "animate-shimmer-move"
              : "group-hover:animate-shimmer-move"
          )}
        >
          <div className="absolute inset-0 -z-30 overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: `linear-gradient(90deg, var(--shimmer-color), transparent, transparent)`,
              }}
            />
          </div>
        </div>

        {children}

        <div
          className={clsx(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
          )}
        />
      </Component>
    );
  }
);

export default ShimmerButton;
