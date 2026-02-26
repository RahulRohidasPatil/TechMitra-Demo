import TMHeader from "@/components/tm-header"
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  ChevronDown,
  Handshake,
  Mail,
  Network,
  Phone,
  Code2,
  ServerCog,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

const serviceGroups = [
  {
    title: "Design",
    items: [
      "Web Design",
      "App Design",
      "UI/ UX Design",
      "Content Design",
      "Graphic Design",
      "Brand Visuals",
    ],
  },
  {
    title: "Develop",
    items: [
      "Growth Intelligence Dashboard",
      "Decision Intelligence Model",
      "Genetic AI Solutions Expert",
      "Customer Relationship Management (CRM)",
      "Digital Marketing",
      "Front End Deployment",
      "Back End Deployment",
      "Full Stack Web Apps",
      "Cloud Solutions",
    ],
  },
  {
    title: "Support",
    items: [
      "Maintenance Plans",
      "Monitoring",
      "Security Patches",
      "A/B Experiments",
    ],
  },
  {
    title: "Delivery & Deployment",
    items: [
      "Deployment Setup",
      "CI / CD Pipelines",
      "LinkedIn Optimization",
      "SEO & Accessibility",
      "Cross-device Testing",
    ],
  },
]

const highlights = [
  {
    icon: BrainCircuit,
    title: "Tailored Solutions",
    description:
      "Every project is tailored to your goals for solutions that are practical, efficient, and truly yours.",
  },
  {
    icon: BadgeCheck,
    title: "On-Time Delivery",
    description:
      "We value your deadlines and ensure timely delivery with smart planning and quality execution.",
  },
  {
    icon: Handshake,
    title: "Support",
    description:
      "From start to finish, we guide, document, and support you every step of the way.",
  },
]

export default function Home() {
  const particles = Array.from({ length: 42 }, (_, index) => ({
    id: index,
    left: `${(index * 23) % 100}%`,
    top: `${(index * 17) % 100}%`,
    size: 2 + (index % 4),
    opacity: 0.2 + (index % 5) * 0.11,
    delay: `${(index % 6) * -0.7}s`,
    duration: `${7 + (index % 4)}s`,
  }))

  const heroNodes = [
    { Icon: BadgeCheck, angle: -78, radius: 36, label: "Trust" },
    { Icon: BrainCircuit, angle: -30, radius: 38, label: "AI" },
    { Icon: Blocks, angle: 14, radius: 34, label: "Design" },
    { Icon: Code2, angle: 58, radius: 36, label: "Develop" },
    { Icon: ServerCog, angle: 104, radius: 35, label: "Cloud" },
    { Icon: Network, angle: 150, radius: 36, label: "Network" },
    { Icon: Handshake, angle: 198, radius: 34, label: "Delivery" },
    { Icon: ShieldCheck, angle: 242, radius: 35, label: "Security" },
  ]

  return (
    <main className="min-h-screen bg-[#01050d] text-[#f0fbff]">
      <section className="relative isolate overflow-hidden border-b border-cyan-500/25 bg-[#030812]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(58,168,217,0.2),transparent_40%),radial-gradient(circle_at_76%_22%,rgba(245,154,52,0.15),transparent_38%),linear-gradient(180deg,#020913_0%,#040d19_56%,#030712_100%)]" />
        <div className="pointer-events-none absolute inset-0">
          {particles.map((dot) => (
            <span
              key={dot.id}
              className="absolute animate-pulse rounded-full bg-[#39b8f0] blur-[1px]"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.size,
                height: dot.size,
                opacity: dot.opacity,
                animationDelay: dot.delay,
                animationDuration: dot.duration,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-5 pb-18 sm:px-8 lg:px-10 lg:pt-8 lg:pb-24">
          <TMHeader />

          <div className="mt-11 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#89c9e8] uppercase">
                Tech Mitra
              </p>
              <h1 className="mt-3 text-4xl leading-[1.1] font-extrabold text-[#62ccf6] sm:text-5xl lg:text-6xl">
                Shaping Ideas into
                <br />
                Scalable Solutions
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#d7ecf7]/90">
                Every project deserves more than just code - it deserves a
                vision. Tech Mitra specialises in end-to-end development,
                combining data science, AI, and design to deliver solutions that
                stand out.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/ask-for-previous-work"
                  className="inline-flex items-center gap-2 rounded-full border border-[#52cbf8] bg-[#52cbf8]/10 px-5 py-2.5 font-semibold text-[#bdeeff] transition hover:bg-[#52cbf8]/20"
                >
                  Ask for previous work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#f0a342]/45 bg-[#f0a342]/10 px-5 py-2.5 font-semibold text-[#ffd39f] transition hover:bg-[#f0a342]/20"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative isolate mx-auto aspect-square w-full max-w-140">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -inset-[8%] rounded-[42%] bg-[radial-gradient(circle_at_28%_24%,rgba(94,209,248,0.38),transparent_58%),radial-gradient(circle_at_72%_74%,rgba(240,161,63,0.22),transparent_52%)] opacity-90 blur-3xl" />

              {/* Bowl */}
              <div className="absolute inset-[4%] rounded-[40%] border border-[#54cdf7]/35 bg-[radial-gradient(circle_at_50%_35%,rgba(23,97,145,0.28),rgba(3,15,28,0.96))] shadow-[inset_0_0_55px_rgba(88,206,252,0.14),0_0_70px_rgba(56,187,240,0.18)]" />

              {/* Orbit rings (subtle rotation) */}
              <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[conic-gradient(from_180deg,rgba(99,217,255,0.0),rgba(99,217,255,0.28),rgba(240,161,63,0.18),rgba(99,217,255,0.0))] opacity-80 blur-[0.5px] motion-safe:animate-[spin_22s_linear_infinite] motion-reduce:animate-none" />
              <div className="pointer-events-none absolute inset-[14%] rounded-full border [border-width:1px] border-dashed border-[#4fc8f5]/18 opacity-70 motion-safe:animate-[spin_34s_linear_infinite] motion-safe:direction-[reverse] motion-reduce:animate-none" />

              {/* Inner rings */}
              <div className="pointer-events-none absolute inset-[22%] rounded-[44%] border border-[#4fc8f5]/22" />
              <div className="pointer-events-none absolute inset-[30%] rounded-[46%] border border-[#f0a13f]/32 shadow-[0_0_55px_rgba(56,187,240,0.18)]" />

              {/* Center card */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-3xl border border-[#53cdf8]/45 bg-[linear-gradient(180deg,rgba(2,22,41,0.92),rgba(3,20,37,0.78))] px-7 py-6 text-center shadow-[inset_0_0_34px_rgba(56,178,233,0.14),0_0_48px_rgba(62,196,250,0.18)] backdrop-blur-sm">
                  <div className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full border border-[#57cff8]/35 bg-[#083055]/50 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#a6def3] uppercase">
                    <BrainCircuit className="h-3.5 w-3.5 text-[#67d5f9] drop-shadow-[0_0_10px_rgba(93,214,251,0.65)]" />
                    Scalable Solutions
                  </div>
                  <p className="text-sm tracking-[0.18em] text-[#8ecce9] uppercase">
                    Tech Mitra
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-[#61cef6] drop-shadow-[0_0_14px_rgba(93,214,251,0.35)]">
                    AI + Data
                  </p>
                </div>
              </div>

              {/* Polar-positioned nodes */}
              <div className="pointer-events-none absolute inset-0 motion-safe:animate-[spin_34s_linear_infinite] motion-reduce:animate-none">
                {heroNodes.map(({ Icon, angle, radius, label }) => {
                  const rad = (angle * Math.PI) / 180
                  const x = (radius * Math.cos(rad)).toFixed(3)
                  const y = (radius * Math.sin(rad)).toFixed(3)

                  return (
                    <div
                      key={label}
                      className="pointer-events-auto absolute"
                      style={{
                        left: `calc(50% + ${x}%)`,
                        top: `calc(50% + ${y}%)`,
                      }}
                    >
                      <div className="group relative -translate-x-1/2 -translate-y-1/2 motion-safe:animate-[spin_34s_linear_infinite_reverse] motion-reduce:animate-none">
                        {/* Tooltip */}
                        <span className="pointer-events-none absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 rounded-full border border-[#4ac4f3]/55 bg-[#041423]/95 px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-[#c9f3ff] opacity-0 shadow-[0_0_26px_rgba(78,196,244,0.22)] backdrop-blur-sm transition duration-200 group-focus-within:opacity-100 group-hover:opacity-100">
                          {label}
                        </span>

                        {/* Glow halo */}
                        <span className="pointer-events-none absolute -inset-2 rounded-full bg-[#56cff8]/18 opacity-0 blur-md transition duration-200 group-focus-within:opacity-100 group-hover:opacity-100" />

                        <button
                          type="button"
                          aria-label={label}
                          className="relative grid h-10 w-10 place-items-center rounded-full border border-[#4ac4f3]/60 bg-[#041423]/95 text-[#bdefff] shadow-[0_0_28px_rgba(78,196,244,0.20)] transition duration-200 outline-none group-hover:scale-105 focus-visible:scale-105 focus-visible:ring-2 focus-visible:ring-[#5cd1f8]/60"
                        >
                          <Icon
                            aria-hidden
                            className="h-4.5 w-4.5 text-[#5cd1f8] drop-shadow-[0_0_10px_rgba(92,209,248,0.65)]"
                          />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-500/15 bg-[#01050d] py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div className="space-y-12">
            <article id="who-we-are">
              <h2 className="text-4xl font-extrabold tracking-tight text-[#f2fbff] sm:text-5xl">
                Who We Are?
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#c6def0]">
                At Tech Mitra, we believe that great ideas deserve the right
                execution. We combine AI, analytics, full-stack development, and
                design to craft solutions that work in the real world.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#c6def0]">
                From dashboards that turn numbers into growth stories, to
                websites that convert, we deliver creatively, precisely, and
                reliably with technology as our backbone.
              </p>
            </article>

            <article id="why-choose-us">
              <h2 className="text-4xl font-extrabold tracking-tight text-[#f2fbff] sm:text-5xl">
                Why Choose Us?
              </h2>
              <ul className="mt-7 space-y-4">
                {highlights.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-cyan-300/20 bg-[#041324]/85 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg border border-cyan-300/30 bg-[#082339] p-2.5 text-[#63cef7]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#e7f7ff]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-[#c4deee]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <aside
            id="our-services"
            className="self-start rounded-3xl border border-cyan-300/20 bg-[#041324]/80 p-6 sm:p-8"
          >
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#f2fbff] sm:text-5xl">
              Our Services
            </h2>
            <div className="mt-7 space-y-4">
              {serviceGroups.map((group) => (
                <details
                  key={group.title}
                  className="group overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#081f38]/70 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5">
                    <div>
                      <h3 className="text-xs font-bold tracking-[0.14em] text-[#90d6f2] uppercase">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#9bc9df]/80">
                        {group.items.length} services
                      </p>
                    </div>
                    <span className="rounded-full border border-cyan-300/30 bg-[#0e2c4d] p-1.5 text-[#9bdcf8] transition group-open:bg-[#13436f]">
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                    </span>
                  </summary>

                  <ul className="space-y-2 px-4 pb-4">
                    {group.items.map((service) => (
                      <li
                        key={service}
                        className="rounded-lg border border-cyan-300/25 bg-[#10244d] px-4 py-3 text-base font-semibold text-[#e9f6ff]"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-cyan-500/20 bg-[linear-gradient(90deg,#04192d,#072542,#0a2740)]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h2 className="text-4xl font-extrabold text-[#67d0f7] sm:text-5xl">
              Contact Us
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-base text-[#ebf8ff] sm:text-lg">
            <a
              href="tel:+917028596727"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-black/15 px-4 py-2.5 transition hover:bg-black/30"
            >
              <Phone className="h-4 w-4 text-[#68d1f8]" />
              +91 70285 96727 / +91 79745 56547
            </a>
            <a
              href="mailto:techmitra06@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-black/15 px-4 py-2.5 transition hover:bg-black/30"
            >
              <Mail className="h-4 w-4 text-[#68d1f8]" />
              techmitra06@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
