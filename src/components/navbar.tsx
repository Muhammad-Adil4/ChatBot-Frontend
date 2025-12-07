import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavLink {
  href: string;
  text: string;
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navlinks: NavLink[] = [
        { href: "#creations", text: "Creations" },
        { href: "#about", text: "About" },
        { href: "#testimonials", text: "Testimonials" },
        { href: "#contact", text: "Contact" },
    ];

    return (
        <>
            <motion.nav
                className="sticky top-0 z-50 flex items-center justify-between w-full h-18 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <img className="h-9 w-auto" src="/assets/logo.svg" width={138} height={36} alt="logo" />
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {navlinks.map((link) => (
                        <Link key={link.href} to={link.href} className="hover:text-slate-300 transition">
                            {link.text}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <Link to={'/signup'} state={{ mode: "signup" }} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md active:scale-95 transition">
                        Get started
                    </Link>
                    <Link to={'/login'} state={{ mode: "login" }}  className="px-6 py-2 border border-slate-400 rounded-md hover:bg-slate-300/20 active:scale-95 transition">
                        Login
                    </Link>
                </div>

                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden active:scale-90 transition"
                >
                    <MenuIcon className="w-6 h-6" />
                </button>
            </motion.nav>

            {/* Mobile menu */}
            <motion.div
                className={`fixed inset-0 z-100 bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 lg:hidden`}
                initial={{ x: "-100%" }}
                animate={{ x: isMenuOpen ? 0 : "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {navlinks.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white hover:text-indigo-400 transition"
                    >
                        {link.text}
                    </Link>
                ))}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center w-10 h-10 p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-black transition active:ring-3 active:ring-white"
                >
                    <XIcon className="w-5 h-5" />
                </button>
            </motion.div>
        </>
    );
}
