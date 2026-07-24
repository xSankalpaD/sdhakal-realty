"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Areas", "#areas"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/92 text-slate-950 shadow-sm backdrop-blur-xl"
          : "border-b border-white/10 bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Go to homepage"
          onClick={() => setOpen(false)}
        >
          <div
            className={`relative h-16 w-28 shrink-0 rounded-xl p-1 transition ${
              scrolled || open ? "bg-transparent" : "bg-white/90"
            }`}
          >
            <Image
              src="/remax-centre-logo.png"
              alt="RE/MAX Real Estate Centre Inc."
              fill
              loading="eager"
              className="object-contain"
              sizes="80px"
            />
          </div>

          <span className="leading-tight">
            <span
              className={`block text-base font-black tracking-wide transition ${
                scrolled || open ? "text-slate-950" : "text-white"
              }`}
            >
              {siteConfig.name}
            </span>

            <span
              className={`block text-xs uppercase tracking-[0.18em] transition ${
                scrolled || open ? "text-slate-500" : "text-white/70"
              }`}
            >
              Real Estate
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-base font-bold transition ${
                scrolled
                  ? "text-slate-600 hover:text-[#e11b22]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className={`inline-flex items-center gap-2 text-base font-bold transition ${
              scrolled
                ? "text-slate-700 hover:text-[#003da5]"
                : "text-white/90 hover:text-white"
            }`}
          >
            <Phone
              className={`size-5 ${
                scrolled ? "text-[#e11b22]" : "text-red-300"
              }`}
            />
            {siteConfig.phoneDisplay}
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#e11b22] px-6 py-3.5 text-base font-black text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-[#c8101a]"
          >
            Book a consultation
          </a>
        </div>

        <button
          type="button"
          className={`grid size-11 place-items-center rounded-full border transition lg:hidden ${
            scrolled || open
              ? "border-slate-200 text-slate-950"
              : "border-white/20 bg-white/10 text-white backdrop-blur"
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 text-slate-950 shadow-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-bold text-slate-700 hover:bg-slate-50"
              >
                {label}
              </a>
            ))}

            <a
              href={`tel:${siteConfig.phoneHref}`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-base font-black text-slate-950"
            >
              <Phone className="size-4 text-[#e11b22]" />
              {siteConfig.phoneDisplay}
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#e11b22] px-5 py-3 text-center text-sm font-black text-white"
            >
              Book a consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}