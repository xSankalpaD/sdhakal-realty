"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Listings", "#listings"],
  ["Areas", "#areas"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 text-slate-950 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Go to homepage">
          <span className="relative grid size-12 place-items-center overflow-hidden rounded-full bg-white text-sm font-black tracking-[0.16em] text-[#e11b22] shadow ring-1 ring-slate-200">
            <span className="absolute inset-x-0 top-0 h-1/3 bg-[#e11b22]" />
            <span className="absolute inset-x-0 bottom-0 h-1/3 bg-[#003da5]" />
            <span className="relative rounded-full bg-white px-1">{siteConfig.shortName}</span>
          </span>
          <span>
            <span className="block text-sm font-black tracking-wide text-slate-950">{siteConfig.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-500">Real Estate</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-bold text-slate-600 transition hover:text-[#e11b22]">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-[#003da5]">
            <Phone className="size-4 text-[#e11b22]" />
            {siteConfig.phoneDisplay}
          </a>
          <a href="#contact" className="rounded-full bg-[#e11b22] px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-600/15 transition hover:bg-[#c8101a]">
            Book a consultation
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-slate-200 text-slate-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
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
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[#e11b22] px-5 py-3 text-center text-sm font-black text-white"
            >
              Book a consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
