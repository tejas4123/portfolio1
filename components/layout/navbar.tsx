"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => onTabChange("Home")}
            className="font-heading text-lg font-bold tracking-tight text-dark hover:opacity-80 transition-opacity cursor-pointer"
          >
            {PERSONAL.firstName}
            <span className="text-accent">.</span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => onTabChange(link.label)}
                    className={cn(
                      "relative rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors duration-200 block cursor-pointer",
                      isActive ? "text-dark" : "text-secondary hover:text-dark"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute inset-0 -z-10 rounded-lg bg-surface border border-border shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 rounded-lg p-2 text-dark hover:bg-hover md:hidden transition-colors"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <button
                  key={link.label}
                  onClick={() => {
                    onTabChange(link.label);
                    setIsMobileOpen(false);
                  }}
                  className={cn(
                    "font-heading text-2xl font-semibold transition-colors hover:text-dark cursor-pointer",
                    activeTab === link.label ? "text-dark" : "text-secondary"
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05 }}
                    className="block"
                  >
                    {link.label}
                  </motion.span>
                </button>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
