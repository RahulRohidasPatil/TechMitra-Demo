import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  BrainCircuit,
  Code2,
  MonitorSmartphone,
  Rocket,
  ServerCog,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import type { CSSProperties } from "react"

type ServiceLane = {
  title: string
  subtitle: string
  description: string
  points: string[]
  icon: LucideIcon
  panelClassName: string
  badgeClassName: string
  surfaceClassName: string
  pointClassName: string
  pointNumberClassName: string
}

const serviceLanes: ServiceLane[] = [
  {
    title: "Design",
    subtitle: "Visual and experience direction",
    description:
      "Design services focused on brand clarity, product usability, and content experience across web and app surfaces.",
    points: [
      "Web Design",
      "App Design",
      "UI/ UX Design",
      "Content Design",
      "Graphic Design",
      "Brand Visuals",
    ],
    icon: Blocks,
    panelClassName:
      "border-[#ffe4a5]/50 bg-linear-to-br from-[#f5cb63]/96 via-[#d69f33]/95 to-[#8f6517]/95",
    badgeClassName: "border-[#fff0c9]/75 bg-[#6a4b10]/45 text-[#fff7e3]",
    surfaceClassName: "border-[#ffe6ac]/38 bg-[#5b3d07]/34",
    pointClassName: "border-[#ffe9bc]/26 bg-[#3d2803]/34",
    pointNumberClassName: "text-[#ffeabf]/95",
  },
  {
    title: "Develop",
    subtitle: "Build intelligence and production systems",
    description:
      "Development services for analytics, AI, CRM, marketing, and complete frontend-backend production delivery.",
    points: [
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
    icon: Code2,
    panelClassName:
      "border-[#ffc9ee]/50 bg-linear-to-br from-[#ff7be0]/95 via-[#e545ba]/95 to-[#8f1d70]/95",
    badgeClassName: "border-[#ffd9f3]/75 bg-[#651b51]/45 text-[#fff0fb]",
    surfaceClassName: "border-[#ffcaed]/38 bg-[#531445]/34",
    pointClassName: "border-[#ffd9f4]/28 bg-[#36092b]/34",
    pointNumberClassName: "text-[#ffd9f3]/95",
  },
  {
    title: "Support",
    subtitle: "Post-launch continuity and reliability",
    description:
      "Structured support to keep performance stable, secure, and continuously optimized after launch.",
    points: [
      "Maintenance Plans",
      "Monitoring",
      "Security Patches",
      "A/B Experiments",
    ],
    icon: ShieldCheck,
    panelClassName:
      "border-[#d6d9df]/50 bg-linear-to-br from-[#9ea5b0]/95 via-[#767d89]/95 to-[#4f5662]/95",
    badgeClassName: "border-[#e2e5ea]/75 bg-[#343a45]/45 text-[#f7f9fc]",
    surfaceClassName: "border-[#d4d8df]/38 bg-[#2b313d]/34",
    pointClassName: "border-[#dde1e7]/28 bg-[#1c222d]/36",
    pointNumberClassName: "text-[#e2e6ec]/95",
  },
  {
    title: "Delivery & Deployment",
    subtitle: "Ship, optimize, and scale confidently",
    description:
      "Deployment services designed for repeatable releases, stronger discoverability, and reliable multi-device behavior.",
    points: [
      "Deployment Setup",
      "CI / CD Pipelines",
      "LinkedIn Optimization",
      "SEO & Accessibility",
      "Cross-device Testing",
    ],
    icon: Rocket,
    panelClassName:
      "border-[#daf9a7]/50 bg-linear-to-br from-[#b8f557]/95 via-[#8ece31]/95 to-[#4f7d12]/95",
    badgeClassName: "border-[#e7ffbe]/75 bg-[#3d6310]/45 text-[#f8ffe8]",
    surfaceClassName: "border-[#ddf8aa]/38 bg-[#33530d]/34",
    pointClassName: "border-[#e8ffbf]/28 bg-[#223607]/36",
    pointNumberClassName: "text-[#e9ffc4]/95",
  },
]

const stackHighlights = [
  {
    title: "Languages & Frameworks",
    detail: "TypeScript, React, Next.js, Node.js, Python",
    icon: BrainCircuit,
  },
  {
    title: "Delivery & Ops",
    detail: "GitHub, Docker, CI/CD, AWS, observability tooling",
    icon: ServerCog,
  },
  {
    title: "Experience & Devices",
    detail: "UI/UX, responsive web, and onsite hardware support",
    icon: MonitorSmartphone,
  },
]

export default function ServicesPage() {
  const particles = Array.from({ length: 28 }, (_, index) => ({
    id: index,
    left: `${(index * 31) % 100}%`,
    top: `${(index * 19) % 100}%`,
    size: 2 + (index % 4),
    opacity: 0.18 + (index % 4) * 0.12,
    delay: `${(index % 6) * -0.9}s`,
    duration: `${8 + (index % 4)}s`,
  }))

  return (
    <main className="min-h-screen bg-[#01050d] text-[#f0fbff]">
      <section className="relative isolate overflow-hidden border-b border-cyan-500/25 bg-[#030812]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(58,168,217,0.2),transparent_40%),radial-gradient(circle_at_76%_22%,rgba(245,154,52,0.12),transparent_38%),linear-gradient(180deg,#020913_0%,#040d19_56%,#030712_100%)]" />
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

        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-[#06223a]/70 px-4 py-2 text-sm font-semibold text-[#bdefff] transition hover:bg-[#0a2f4f]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tech Mitra
          </Link>

          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#89c9e8] uppercase">
              Services
            </p>
            <h1 className="mt-2 text-5xl leading-[1.05] font-extrabold text-[#f4fbff] sm:text-6xl">
              End-to-End Execution,
              <br />
              Designed to Scale
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#d7ecf7]/90">
              A service flow inspired by your reference page: stacked,
              full-viewport cards that reveal each capability while you scroll.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-500/15 bg-[#01050d] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-extrabold text-[#ebf8ff] sm:text-5xl">
              What We Build. How We Deliver.
            </h2>
            <p className="mt-4 text-lg text-[#c6def0]">
              Scroll to navigate each service lane.
            </p>
          </div>

          <div className="mt-10">
            {serviceLanes.map((lane, index) => {
              const laneWrapperStyle = {
                "--lane-mobile-height": `max(${480 + lane.points.length * 68}px, ${92 + lane.points.length * 6}svh)`,
              } as CSSProperties

              const lanePanelStyle = {
                "--lane-mobile-top": `${24 + index * 8}px`,
                "--lane-desktop-top": `${88 + index * 8}px`,
                zIndex: serviceLanes.length - index,
              } as CSSProperties

              return (
                <div
                  key={lane.title}
                  className="relative mb-6 h-(--lane-mobile-height) last:mb-0 sm:mb-0 sm:h-[88vh]"
                  style={laneWrapperStyle}
                >
                  <article
                    className={`sticky top-(--lane-mobile-top) rounded-3xl border p-6 text-white shadow-[0_28px_70px_rgba(0,0,0,0.35)] sm:top-(--lane-desktop-top) sm:p-10 ${lane.panelClassName}`}
                    style={lanePanelStyle}
                  >
                    <div className="grid grid-cols-1 gap-8 sm:h-full sm:items-center lg:grid-cols-[1fr_1.1fr]">
                      <div>
                        <div
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase ${lane.badgeClassName}`}
                        >
                          <lane.icon className="h-4 w-4" />
                          Stage {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl">
                          {lane.title}
                        </h3>
                        <p className="mt-2 text-lg font-semibold text-white/90">
                          {lane.subtitle}
                        </p>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                          {lane.description}
                        </p>
                      </div>

                      <div
                        className={`rounded-2xl border p-4 sm:p-6 ${lane.surfaceClassName}`}
                      >
                        <ul className="space-y-3">
                          {lane.points.map((point, pointIndex) => (
                            <li
                              key={point}
                              className={`flex items-center gap-4 rounded-xl border px-3 py-2.5 sm:px-4 ${lane.pointClassName}`}
                            >
                              <span
                                className={`w-9 text-center text-lg font-bold ${lane.pointNumberClassName}`}
                              >
                                {String(pointIndex + 1).padStart(2, "0")}
                              </span>
                              <span className="text-base font-semibold sm:text-lg">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-500/20 bg-[linear-gradient(90deg,#04192d,#072542,#0a2740)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-extrabold text-[#ecf9ff] sm:text-4xl">
            Tech Stack That Supports Delivery
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {stackHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-2xl border border-cyan-300/30 bg-[#03182b]/75 p-5"
              >
                <div className="inline-flex rounded-lg border border-cyan-300/35 bg-[#0a2a45] p-2 text-[#63cef7]">
                  <highlight.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#e7f7ff]">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#c4deee]">
                  {highlight.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#01050d] py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#67d0f7] sm:text-4xl">
              Need a similar delivery setup?
            </h2>
            <p className="mt-2 text-[#cfe6f5]">
              We can map your current process and define the right service lane.
            </p>
          </div>
          <Link
            href="/ask-for-previous-work"
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#52cbf8] bg-[#52cbf8]/10 px-5 py-2.5 font-semibold text-[#bdeeff] transition hover:bg-[#52cbf8]/20 sm:self-auto"
          >
            Ask for previous work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
