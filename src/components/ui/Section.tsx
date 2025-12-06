import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    bg?: "white" | "gray" | "violet";
}

export function Section({ children, className, bg = "white", ...props }: SectionProps) {
    const backgrounds = {
        white: "bg-white",
        gray: "bg-gray-light",
        violet: "bg-violet-primary text-white",
    };

    return (
        <section className={cn("section-padding w-full", backgrounds[bg], className)} {...props}>
            {children}
        </section>
    );
}
