"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "@/../public/logo-transparent-cropped.png";
import { useEffect, useRef, useState } from "react";
import FadeInSection from "../FadeInSection/FadeInSection";

const navLinks = [
    { href: "/#", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#philosophy", label: "Philosophy" },
    { href: "/#services", label: "Services" },
    { href: "/#rates", label: "Rates" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef<HTMLElement>(null);

    // Measure header height on mount and on resize
    useEffect(() => {
        function updateHeight() {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.getBoundingClientRect().height);
            }
        }
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    // Lock background scroll via inline style
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
    }, [menuOpen]);

    return (

        <header ref={headerRef} id="header" className="flex w-full items-center justify-between py-[6vw] mylg:py-[3vw] px-4 sm:px-8 md:px-[4%] relative z-20">
            <FadeInSection className="w-full">
                <div className="flex flex-row items-center justify-between w-full ml-1 sm:ml-2 md:ml-3 mylg:ml-0">
                    <Link href={"/"}>
                        <div className="block exs:hidden w-full max-w-[231px]">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={231}
                                height={59}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                        {/* For 337px and up, but < md */}
                        <Image
                            src={logo}
                            alt="Logo"
                            width={247}
                            height={63}
                            className="hidden exs:block md:hidden"
                            priority
                        />
                        {/* For md and up */}
                        <Image
                            src={logo}
                            alt="Logo"
                            width={274.19}
                            height={70}
                            className="hidden md:block"
                            priority
                        />
                    </Link>
                    <button
                        className="flex flex-col items-center justify-center mylg:hidden px-5 relative"
                        aria-label="Open menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                    >
                        {/* Burger icon */}
                        <span
                            className={`block absolute w-9 h-[1px] bg-dark rounded transition-all duration-300
                            ${menuOpen
                                    ? "rotate-45 -translate-x-1/2 -translate-y-1/2"
                                    : "-translate-x-1/2 -translate-y-2"}
                            `}
                        />
                        <span
                            className={`block absolute w-9 h-[1px] bg-dark rounded transition-all duration-300
                            ${menuOpen
                                    ? "opacity-0"
                                    : "-translate-x-1/2"}
                            `}
                        />
                        <span
                            className={`block absolute w-9 h-[1px] bg-dark rounded transition-all duration-300
                            ${menuOpen
                                    ? "-rotate-45 -translate-x-1/2 -translate-y-1/2"
                                    : "-translate-x-1/2 translate-y-2"}
                            `}
                        />
                    </button>
                </div>
            </FadeInSection>
            <FadeInSection>
                <nav
                    style={{ top: headerHeight }}
                    className={`fixed inset-0 top-30 z-50 
                    bg-bg flex flex-col px-12 items-start sm:items-center justify-start gap-8
                    transition-opacity duration-300 mylg:hidden 
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                >
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-2xl font-freight-display-pro text-dark hover:text-primary hover:underline underline-offset-2 decoration-1 transition-colors duration-150"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </FadeInSection>
        </header>

    )
}

export default Header;