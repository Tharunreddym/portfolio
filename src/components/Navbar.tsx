import { RESUME_LINK, NAV_LINKS } from "@/constants";
import Magnetic from "./Magnetic";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                {/* Logo */}
                <div className="text-xl font-bold text-accent">TM.</div>

                {/* 1. Navigation Links (Home, Experience, etc.) */}
                <ul className="hidden md:flex gap-8">
                    {NAV_LINKS.map((nav) => (
                        <li key={nav.link}>
                            <a
                                href={nav.link}
                                className="text-sm font-medium transition-colors hover:text-accent"
                            >
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 2. Single Resume Button on the right */}
                <Magnetic strength={0.1}>
                    <a
                        href={RESUME_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-accent px-5 py-2 text-xs font-bold text-white transition-transform hover:scale-105"
                    >
                        Resume
                    </a>
                </Magnetic>
            </div>
        </nav>
    );
}