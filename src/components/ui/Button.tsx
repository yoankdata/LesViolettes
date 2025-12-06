import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, asChild = false, children, ...props }, ref) => {
        const variants = {
            primary: "bg-violet-primary text-white hover:bg-violet-deep shadow-md hover:shadow-lg transition-all duration-300",
            secondary: "bg-green-accent text-white hover:bg-opacity-90 shadow-sm hover:shadow-md",
            outline: "border-2 border-violet-primary text-violet-primary hover:bg-violet-primary hover:text-white",
            ghost: "hover:bg-gray-100 text-gray-text",
            link: "text-violet-primary underline-offset-4 hover:underline p-0 h-auto",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-6 text-base",
            lg: "h-14 px-8 text-lg font-semibold",
            icon: "h-10 w-10 p-0 flex items-center justify-center",
        };

        const compClass = cn(
            "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
        );

        if (asChild) {
            return (
                <Slot
                    ref={ref}
                    className={compClass}
                    {...props}
                >
                    {children}
                </Slot>
            );
        }

        return (
            <button
                ref={ref}
                className={compClass}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
