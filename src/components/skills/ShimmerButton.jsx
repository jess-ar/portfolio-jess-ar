import React from "react";
import { clsx } from "clsx";

const ShimmerButton = (
    {
        shimmerColor = "rgba(255, 255, 255, 0.148)",
        shimmerSize = "0.1em",
        shimmerDuration = "2s",
        borderRadius = "12px",
        background = "linear-gradient(90deg, rgba(30,30,30,1) 0%, #100f0f 100%)",
        className,
        children,
        ...props
    },
    ref
) => {
    return (
        <button
            style={{
                "--spread": "90deg",
                "--shimmer-color": shimmerColor,
                "--radius": borderRadius,
                "--speed": shimmerDuration,
                "--cut": shimmerSize,
                "--bg": background,
            }}
            className={clsx(
                "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-2 py-1 text-white [background:var(--bg)] [border-radius:var(--radius)] ",
                "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
                className,
            )}
            {...props}
        >
            <div
                className={clsx(
                    "-z-30 blur-[2px]",
                    "absolute inset-0 overflow-visible [container-type:size]",
                    "animate-shimmer-move lg:animate-none lg:group-hover:animate-shimmer-move"
                )}
            >
                <div className="absolute inset-0 -z-30 overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-600 via-transparent to-transparent" />
                </div>
            </div>

            {children}

            <div
                className={clsx(
                    "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
                )}
            />
        </button>
    );
};

export default ShimmerButton;