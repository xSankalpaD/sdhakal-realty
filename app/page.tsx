import Image from "next/image";
import {
  ArrowRight,
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

      <section className="relative isolate min-h-screen overflow-hidden bg-slate-950 pt-20 text-white">
        {/* YouTube video background */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <iframe
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-110"
            src="https://www.youtube.com/embed/OO1pAYOEraI?autoplay=1&mute=1&controls=0&loop=1&playlist=OO1pAYOEraI&modestbranding=1&playsinline=1&rel=0&showinfo=0"
            title="Toronto real estate background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* dark overlay */}
        <div className="absolute inset-0 -z-10 bg-slate-950/65" />

        {/* red/blue brand glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_30%,rgba(225,27,34,0.35),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(0,61,165,0.30),transparent_40%)]" />

        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
            <Sparkles className="size-4 text-red-300" />
            {siteConfig.hero.eyebrow}
          </div>

          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
            {siteConfig.hero.heading}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            {siteConfig.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e11b22] px-7 py-4 font-black text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-0.5 hover:bg-[#c8101a]"
            >
              Book a consultation <ArrowRight className="size-4" />
            </a>

            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              <Phone className="size-4" /> {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="mt-12 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 text-left shadow-xl backdrop-blur"
              >
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
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

      <section
  id="about"
  className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_64%,#ffffff_100%)] py-20 sm:py-28"
>
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_28%,rgba(225,27,34,0.16),transparent_40%),radial-gradient(circle_at_86%_20%,rgba(0,61,165,0.15),transparent_42%)]" />

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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/8 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#d71920] via-[#e11b22]/92 via-45% to-transparent" />

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
                  className={`rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                    featured
                      ? "border-[#e11b22] bg-[#e11b22] text-white"
                      : "border-slate-200 bg-white text-slate-950"
                  }`}
                >
                  <span
                    className={`grid size-14 place-items-center rounded-2xl ${
                      featured
                        ? "bg-white text-[#e11b22]"
                        : "bg-blue-50 text-[#003da5]"
                    }`}
                  >
                    <ServiceIcon className="size-7" />
                  </span>

                  <h3 className="mt-7 text-2xl font-black">{service.title}</h3>

                  <p
                    className={`mt-3 leading-7 ${
                      featured ? "text-white/85" : "text-slate-600"
                    }`}
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
                          className={`grid size-6 place-items-center rounded-full ${
                            featured
                              ? "bg-white/15 text-white"
                              : "bg-red-50 text-[#e11b22]"
                          }`}
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

      <div className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_18%,rgba(225,27,34,0.22),transparent_34%),radial-gradient(circle_at_90%_22%,rgba(0,61,165,0.30),transparent_38%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-slate-950 to-slate-950" />

        <section id="contact" className="relative py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
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
                    <span className="font-black">
                      {siteConfig.phoneDisplay}
                    </span>
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

        <footer className="relative">
          <div className="mx-auto max-w-7xl border-t border-white/10 px-5 py-14 text-center sm:px-8">
            <div className="mx-auto flex max-w-4xl flex-col items-center">
              <div className="relative h-28 w-72 sm:h-32 sm:w-80">
                <Image
                  src="/remax-centre-full--logo.png"
                  alt="RE/MAX Real Estate Centre Inc. Brokerage"
                  fill
                  className="object-contain"
                  sizes="320px"
                />
              </div>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-300">
                {siteConfig.name}, {siteConfig.title}. {siteConfig.brokerage}.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-black uppercase tracking-wide text-white">
                <a href="#top" className="transition hover:text-[#e11b22]">
                  Home
                </a>
                <a href="#about" className="transition hover:text-[#e11b22]">
                  About
                </a>
                <a href="#services" className="transition hover:text-[#e11b22]">
                  Services
                </a>
                <a href="#areas" className="transition hover:text-[#e11b22]">
                  Areas
                </a>
                <a href="#contact" className="transition hover:text-[#e11b22]">
                  Contact
                </a>
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-2 text-sm font-semibold text-slate-300 sm:flex-row sm:gap-5">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition hover:text-white"
                >
                  Phone: {siteConfig.phoneDisplay}
                </a>

                <span className="hidden text-slate-600 sm:block">|</span>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-white"
                >
                  E-mail: {siteConfig.email}
                </a>
              </div>

              <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-slate-300">
                Location: 2 County Court Boulevard ste 150, Brampton, ON L6W
                3W8, Canada
              </p>

              <div className="mt-10 w-full border-t border-white/10 pt-6 text-xs leading-6 text-slate-500">
                <p>
                  © {new Date().getFullYear()} {siteConfig.name}. All rights
                  reserved.
                </p>
                <p className="mt-1">
                  Information is believed to be accurate but should be
                  independently verified.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
