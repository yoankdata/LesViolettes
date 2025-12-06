"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Chambres", href: "/chambres" },
    { name: "Studios", href: "/studios" },
    { name: "Situation", href: "/situation" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                "bg-white shadow-sm py-3 md:py-5" // Responsive padding
            )}
        >
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="h-12 w-12 md:h-16 md:w-16 relative rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                            <img
                                src="/images/logo-violettes.jpg"
                                alt="Les Violettes Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={cn("flex flex-col")}>
                            <span className={cn("font-poppins font-bold text-lg md:text-xl leading-tight text-violet-deep")}>Les Violettes</span>
                            <span className={cn("text-[10px] md:text-xs uppercase tracking-wider font-medium text-gray-500")}>Résidence Hôtelière</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-violet-primary",
                                    pathname === item.href ? "text-violet-primary font-semibold" : "text-gray-600"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button size="sm" asChild>
                            <a href="tel:0561477302">
                                <Phone className="mr-2 h-4 w-4" />
                                05 61 47 73 02
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden p-4 flex flex-col gap-4"
                    >
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-base font-medium p-2 rounded-md hover:bg-gray-50 transition-colors",
                                    pathname === item.href ? "text-violet-primary bg-violet-50" : "text-gray-600"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full" asChild>
                            <a href="tel:0561477302">Appeler: 05 61 47 73 02</a>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
