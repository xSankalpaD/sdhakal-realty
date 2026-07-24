import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} | GTA Real Estate`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} helps clients buy, sell, and invest in real estate across the ${siteConfig.serviceArea}.`,
  openGraph: {
    title: `${siteConfig.name} | GTA Real Estate`,
    description: siteConfig.hero.description,
    type: "website",
    locale: "en_CA",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
  },
  alternates: { canonical: `https://${siteConfig.domain}` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
