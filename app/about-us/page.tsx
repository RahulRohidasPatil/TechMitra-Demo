import TMHeader from "@/components/tm-header"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BrainCircuit,
  Handshake,
  Rocket,
  type LucideIcon,
} from "lucide-react"

type Principle = {
  title: string
  description: string
  icon: LucideIcon
}

const principles: Principle[] = [
  {
    title: "Execution-first thinking",
    description:
      "We shape strategy around practical delivery so decisions turn into working systems, not stalled plans.",
    icon: Rocket,
  },
  {
    title: "Cross-disciplinary build",
    description:
      "AI, analytics, design, and engineering are handled together so teams do not lose momentum between handoffs.",
    icon: BrainCircuit,
  },
  {
    title: "Long-term partnership",
    description:
      "We stay involved through launch, iteration, and support to keep products useful after the first release.",
    icon: Handshake,
  },
]

const focusAreas = [
  "AI, analytics, and data-led products",
  "Full-stack design and development delivery",
  "Reliable launch support and iteration",
]

export const metadata: Metadata = {
  title: "About Us | TechMitra Demo",
  description:
    "Learn how Tech Mitra combines AI, analytics, design, and engineering into practical delivery.",
}

export default function AboutUsPage() {
  const particles = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    left: `${(index * 29) % 100}%`,
    top: `${(index * 13) % 100}%`,
    size: 2 + (index % 4),
    opacity: 0.18 + (index % 5) * 0.1,
    delay: `${(index % 6) * -0.6}s`,
    duration: `${8 + (index % 4)}s`,
  }))

  return (
    <main className="min-h-screen bg-[#01050d] text-[#f0fbff]">
      <section className="relative isolate overflow-hidden border-b border-cyan-500/25 bg-[#030812]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(58,168,217,0.2),transparent_40%),radial-gradient(circle_at_78%_20%,rgba(245,154,52,0.12),transparent_34%),linear-gradient(180deg,#020913_0%,#040d19_56%,#030712_100%)]" />
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

        <div className="relative mx-auto max-w-7xl px-4 pt-5 pb-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-20">
          <TMHeader />

          <div className="mt-11 grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-[#89c9e8] uppercase">
                <span>About Us</span>
                <span className="h-2 w-2 rounded-full bg-[#f0a342] shadow-[0_0_14px_rgba(240,163,66,0.9)]" />
              </p>
              <h1 className="mt-3 text-4xl leading-[1.08] font-extrabold text-[#f2fbff] sm:text-5xl lg:text-6xl">
                Execution that keeps
                <br />
                ideas moving.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#d7ecf7]/90">
                Tech Mitra brings AI, analytics, design, and engineering into
                one delivery flow so ambitious ideas become production-ready
                systems with less friction.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#52cbf8] bg-[#52cbf8]/10 px-5 py-2.5 font-semibold text-[#bdeeff] transition hover:bg-[#52cbf8]/20"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-[#06223a]/70 px-5 py-2.5 font-semibold text-[#bdefff] transition hover:bg-[#0a2f4f]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-cyan-300/20 bg-[linear-gradient(160deg,rgba(4,19,36,0.92),rgba(7,30,51,0.78))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.25)] sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#8ecce9] uppercase">
                Where We Add Value
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#f2fbff] sm:text-4xl">
                Clarity, build quality, and follow-through.
              </h2>
              <ul className="mt-6 space-y-3">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-cyan-300/20 bg-[#081f38]/70 px-4 py-4 text-base font-semibold text-[#d8effa]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-500/15 bg-[#01050d] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-3xl border border-cyan-300/20 bg-[#041324]/80 p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#8ecce9] uppercase">
                Who We Are
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#f2fbff] sm:text-5xl">
                Built around practical delivery.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c6def0]">
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

            <div className="grid gap-4">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-3xl border border-cyan-300/20 bg-[#041324]/80 p-6"
                >
                  <div className="inline-flex rounded-xl border border-cyan-300/30 bg-[#082339] p-3 text-[#63cef7]">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-[#e7f7ff]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#c4deee]">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#04192d,#072542,#0a2740)] py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#ebf8ff] sm:text-4xl">
              Need a team that can carry the full build?
            </h2>
            <p className="mt-2 max-w-2xl text-[#cfe6f5]">
              We can map the right mix of strategy, design, development, and
              launch support for your next project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#52cbf8] bg-[#52cbf8]/10 px-5 py-2.5 font-semibold text-[#bdeeff] transition hover:bg-[#52cbf8]/20"
            >
              Explore Services
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-[#06223a]/70 px-5 py-2.5 font-semibold text-[#bdefff] transition hover:bg-[#0a2f4f]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
