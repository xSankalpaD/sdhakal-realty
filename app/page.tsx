import type { CSSProperties } from "react";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Check,
  CircleDollarSign,
  Compass,
  Home,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

const services = [
  {
    icon: Search,
    title: "Buy with confidence",
    text: "Clear neighbourhood advice, fast showing coordination, and offer guidance before you make a move.",
    points: [
      "Personalized home search",
      "Offer strategy",
      "Step-by-step guidance",
    ],
  },
  {
    icon: Home,
    title: "Sell for the right price",
    text: "A practical pricing, staging, and marketing plan built around your property and timeline.",
    points: ["Home evaluation", "Listing preparation", "Negotiation support"],
  },
  {
    icon: CircleDollarSign,
    title: "Invest smarter",
    text: "Compare opportunities with local context, rental considerations, and long-term value in mind.",
    points: [
      "Market comparisons",
      "Cash-flow discussion",
      "Long-term planning",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Quick call",
    text: "Talk through your goals, timeline, area, and budget.",
  },
  {
    number: "02",
    title: "Clear plan",
    text: "Get a practical next-step plan for buying, selling, or investing.",
  },
  {
    number: "03",
    title: "Strong support",
    text: "Move through showings, offers, paperwork, and closing with guidance.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    url: `https://${siteConfig.domain}`,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea,
  };

  return (
    <main id="top" className="overflow-hidden bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section className="relative isolate bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_64%,#ffffff_100%)] pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_24%,rgba(225,27,34,0.18),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(0,61,165,0.16),transparent_42%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28 lg:pt-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#e11b22]">
              <Sparkles className="size-4" />
              {siteConfig.hero.eyebrow}
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              {siteConfig.hero.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {siteConfig.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e11b22] px-7 py-4 font-black text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-[#c8101a]"
              >
                Book a consultation <ArrowRight className="size-4" />
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-[#003da5] hover:text-[#003da5]"
              >
                <Phone className="size-4" /> {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-2xl font-black text-[#003da5]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-[#e11b22] md:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-full bg-[#003da5] md:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/12">
              <div className="relative aspect-[1.1/1] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90"
                  alt="Modern detached home exterior"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/95 p-5 text-slate-950 shadow-xl backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e11b22]">
                    Serving
                  </p>
                  <p className="mt-2 text-2xl font-black tracking-tight">
                    {siteConfig.cityLine}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:-left-10 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-blue-50 text-[#003da5]">
                  <ShieldCheck className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-black">Local GTA guidance</p>
                  <p className="text-xs text-slate-500">
                    Clear answers. No pressure.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 right-5 rounded-2xl bg-[#e11b22] p-5 text-white shadow-2xl sm:right-12">
              <div className="flex items-center gap-3">
                <TrendingUp className="size-8" />
                <div>
                  <p className="font-black">Free home evaluation</p>
                  <p className="text-sm text-white/80">
                    Ask what your home could sell for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
            Guidance from search to sold
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-slate-700">
            {[
              "Responsive communication",
              "Local market insight",
              "Confident negotiation",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="size-4 text-[#e11b22]" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-200 p-[7px] shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[1.5rem]">
                <div className="relative aspect-[4/5] bg-[#f3f4f6]">
                  <Image
                    src="/s_dklpic.jpeg"
                    alt="Suresh Dhakal"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 420px"
                  />

                  {/* darker global contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/8 to-transparent" />

                  {/* stronger red fade, moved higher */}
                  <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#d71920] via-[#e11b22]/92 via-45% to-transparent" />

                  {/* text */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/90">
                      {siteConfig.title}
                    </p>
                    <h2 className="mt-2 text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.28)]">
                      {siteConfig.name}
                    </h2>
                    <p className="mt-3 max-w-sm text-base leading-7 text-white/95">
                      Helping families buy, sell, and invest across the GTA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.14)] sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-red-50">
                  <Star className="size-5 fill-[#e11b22] text-[#e11b22]" />
                </div>
                <div>
                  <p className="font-black text-slate-950">
                    Relationship first
                  </p>
                  <p className="text-sm text-slate-500">Transaction second</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#e11b22]">
              Meet Suresh
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
              A straightforward local realtor for your next move.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Buying or selling a home is a major decision. My role is to
              simplify the process, explain the trade-offs, and help you move
              forward with confidence, not pressure.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                [
                  Compass,
                  "Local insight",
                  "Neighbourhood knowledge and market context for smarter decisions.",
                ],
                [
                  ShieldCheck,
                  "Your interests first",
                  "Advice grounded in your goals, comfort, and long-term plans.",
                ],
                [
                  Building2,
                  "RE/MAX backed",
                  "Professional service supported by a trusted real-estate brand.",
                ],
                [
                  Phone,
                  "Fast follow-up",
                  "Clear communication before, during, and after the transaction.",
                ],
              ].map(([Icon, title, text]) => {
                const FeatureIcon = Icon as typeof Compass;
                return (
                  <div
                    key={String(title)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FeatureIcon className="size-6 text-[#003da5]" />
                    <h3 className="mt-4 font-black text-slate-950">
                      {String(title)}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {String(text)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#e11b22]">
              How I can help
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Simple support for buying, selling, and investing.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const featured = index === 1;
              return (
                <article
                  key={service.title}
                  className={`rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8 ${featured ? "border-[#e11b22] bg-[#e11b22] text-white" : "border-slate-200 bg-white text-slate-950"}`}
                >
                  <span
                    className={`grid size-14 place-items-center rounded-2xl ${featured ? "bg-white text-[#e11b22]" : "bg-blue-50 text-[#003da5]"}`}
                  >
                    <ServiceIcon className="size-7" />
                  </span>
                  <h3 className="mt-7 text-2xl font-black">{service.title}</h3>
                  <p
                    className={`mt-3 leading-7 ${featured ? "text-white/85" : "text-slate-600"}`}
                  >
                    {service.text}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-bold"
                      >
                        <span
                          className={`grid size-6 place-items-center rounded-full ${featured ? "bg-white/15 text-white" : "bg-red-50 text-[#e11b22]"}`}
                        >
                          <Check className="size-3.5" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section id="listings" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#003da5]">
                Featured properties
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
                Homes worth a closer look.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                Replace these sample cards with authorized listings, or link
                this section to Suresh&apos;s official search page.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-slate-950 px-6 py-3 font-black text-white transition hover:bg-[#003da5] md:self-auto"
            >
              Find a home <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {siteConfig.listings.map((listing) => (
              <article
                key={listing.title}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 90vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#e11b22] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white">
                    Sample
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm font-black uppercase tracking-wide text-[#003da5]">
                    {listing.type}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black text-slate-950">
                      {listing.title}
                    </h3>
                    <p className="text-xl font-black text-[#e11b22]">
                      {listing.price}
                    </p>
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="size-4" /> {listing.location}
                  </p>
                  <div className="mt-5 flex gap-5 border-t border-slate-200 pt-5 text-sm font-semibold text-slate-600">
                    <span className="flex items-center gap-2">
                      <BedDouble className="size-4 text-[#003da5]" />{" "}
                      {listing.beds} beds
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath className="size-4 text-[#003da5]" /> {listing.baths}{" "}
                      baths
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-[#003da5] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">
                Simple by design
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                From first conversation to closing day.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-white/75">
                You should always understand what happens next and why it
                matters.
              </p>
            </div>
            <div className="space-y-4">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur sm:grid-cols-[72px_1fr] sm:items-center"
                >
                  <p className="text-3xl font-black text-white">
                    {step.number}
                  </p>
                  <div>
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="mt-1 leading-6 text-white/70">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#e11b22]">
                Neighbourhood expertise
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
                Explore communities across the GTA.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Highlight the cities and neighbourhoods Suresh actually serves.
                Later, each can become its own local SEO page.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {siteConfig.areas.map((area) => (
                  <a
                    key={area}
                    href="#contact"
                    className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#e11b22] hover:text-[#e11b22]"
                  >
                    {area}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1400&q=85"
                alt="Toronto skyline"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <MapPin className="size-8 text-white" />
                <h3 className="mt-4 text-3xl font-black">
                  Local context matters.
                </h3>
                <p className="mt-3 max-w-md leading-7 text-white/75">
                  Schools, commute, development, property types, and pricing all
                  shape the right choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#003da5]">
              Client experiences
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Trust is earned one move at a time.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {siteConfig.testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.quote}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-9"
              >
                <div
                  className="flex gap-1 text-[#e11b22]"
                  aria-label="Five stars"
                >
                  ★★★★★
                </div>
                <p className="mt-6 text-xl font-semibold leading-9 text-slate-800">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-7 flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-[#003da5] font-black text-white">
                    {testimonial.author.charAt(0)}
                  </span>
                  <div>
                    <p className="font-black text-slate-950">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.detail}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section> */}

      <section
        id="contact"
        className="relative bg-slate-950 py-20 text-white sm:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(225,27,34,0.20),transparent_28%),radial-gradient(circle_at_88%_35%,rgba(0,61,165,0.24),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-300">
              Let&apos;s connect
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Thinking about your next move?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Tell Suresh what you&apos;re planning. Even if you&apos;re early
              in the process, a clear conversation is a good place to start.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <span className="grid size-12 place-items-center rounded-full bg-[#e11b22] text-white">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">Call</span>
                  <span className="font-black">{siteConfig.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <span className="grid size-12 place-items-center rounded-full bg-[#003da5] text-white">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">Email</span>
                  <span className="font-black">{siteConfig.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="grid size-12 place-items-center rounded-full bg-white text-slate-950">
                  <Building2 className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">
                    Brokerage
                  </span>
                  <span className="font-black">{siteConfig.brokerage}</span>
                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl border-t border-white/10 px-5 py-12 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-white text-sm font-black tracking-[0.16em] text-[#e11b22]">
                  {siteConfig.shortName}
                </span>
                <div>
                  <p className="font-black">{siteConfig.name}</p>
                  <p className="text-sm text-slate-400">{siteConfig.title}</p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
                Helping clients buy, sell, and invest across the{" "}
                {siteConfig.serviceArea} with responsive, straightforward
                service.
              </p>
            </div>
            <div>
              <p className="font-black">Quick links</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-400">
                <a href="#about" className="hover:text-white">
                  About
                </a>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
                <a href="#listings" className="hover:text-white">
                  Listings
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <p className="font-black">Contact</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-400">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-7 text-xs leading-6 text-slate-500">
            <p>
              {siteConfig.name}, {siteConfig.title}. {siteConfig.brokerage}.
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved. Information is believed to be accurate but should be
              independently verified.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
