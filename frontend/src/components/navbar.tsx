
"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Activities", href: "#activities" },
  { label: "Our Team", href: "#team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <nav className="container flex h-[76px] items-center justify-between">

        {/* CLUB BRANDING */}
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white">
            <Image
              src="/images/club-logo.jpeg"
              alt="SuperComputing Club Logo"
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-extrabold tracking-tight">
              SuperComputing
            </p>
            <p className="text-xs text-[var(--muted)]">
              CLUB · RAMDEOBABA UNIVERSITY
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="#community"
            className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Explore community
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-xl border border-[var(--border)] p-2"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] p-5 md:hidden">
          <div className="container flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#community"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Explore community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
