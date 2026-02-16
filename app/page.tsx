import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  FileSearch2,
  Fingerprint,
  Globe2,
  Handshake,
  Landmark,
  Mail,
  Network,
  Phone,
  Radar,
  ScanFace,
  Smartphone,
} from "lucide-react"
import Image from "next/image"

const navItems = ["Solutions", "Capabilities", "Method", "Contact"]

const metrics = [
  { label: "Projects Delivered", value: "40+" },
  { label: "Automation Workflows", value: "65+" },
  { label: "Avg. Delivery Speedup", value: "3.4x" },
]

const challengeBars = [
  { label: "Acquisition", width: "100%" },
  { label: "Onboarding", width: "82%" },
  { label: "Verification", width: "64%" },
  { label: "Transaction", width: "46%" },
]

const capabilityCards = [
  {
    icon: Fingerprint,
    title: "Digital Footprints",
    description: "Cross-platform behavior signatures and interaction patterns.",
  },
  {
    icon: BrainCircuit,
    title: "Cognitive Signals",
    description: "Intent detection from timing, navigation, and response traits.",
  },
  {
    icon: Smartphone,
    title: "Device Intelligence",
    description: "Hardware consistency, emulator checks, and device risk scoring.",
  },
  {
    icon: Radar,
    title: "Geo Context",
    description: "Location confidence with anomaly-aware movement validation.",
  },
  {
    icon: Network,
    title: "Network Trust",
    description: "Proxy and network quality detection to reduce spoofing risk.",
  },
  {
    icon: ScanFace,
    title: "Identity Proofing",
    description: "Layered ID checks to spot mismatch and synthetic activity.",
  },
  {
    icon: FileSearch2,
    title: "Document Validation",
    description: "Document structure and metadata checks for forged artifacts.",
  },
  {
    icon: Landmark,
    title: "Compliance Guardrails",
    description: "Policy-first automation for regulated onboarding workflows.",
  },
  {
    icon: Activity,
    title: "Transaction Intent",
    description: "Early transaction behavior signals for faster risk decisions.",
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
    { Icon: BadgeCheck, top: "14%", label: "Trust" },
    { Icon: BrainCircuit, top: "27%", label: "Signals" },
    { Icon: Radar, top: "40%", label: "Risk" },
    { Icon: Globe2, top: "53%", label: "Geo" },
    { Icon: Network, top: "66%", label: "Network" },
    { Icon: Handshake, top: "79%", label: "Decision" },
  ]

  return (
    <main className="min-h-screen bg-[#01050d] text-[#f0fbff]">
      <section className="relative isolate overflow-hidden border-b border-cyan-500/25 bg-[#030812]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(58,168,217,0.2),transparent_40%),radial-gradient(circle_at_76%_22%,rgba(245,154,52,0.15),transparent_38%),linear-gradient(180deg,#020913_0%,#040d19_56%,#030712_100%)]" />
        <div className="pointer-events-none absolute inset-0">
          {particles.map((dot) => (
            <span
              key={dot.id}
              className="absolute rounded-full bg-[#39b8f0] blur-[1px] animate-pulse"
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
          <header className="flex flex-col gap-5 border-b border-cyan-400/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-cyan-300/30 bg-white/95 shadow-[0_0_40px_rgba(50,179,241,0.2)]">
                <Image
                  src="/techmitra-logo.jpeg"
                  alt="TechMitra logo"
                  fill
                  sizes="56px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-xl font-extrabold tracking-tight text-[#51c5f7]">
                  TechMitra
                </p>
                <p className="text-xs font-medium tracking-[0.18em] text-[#9bcbe4] uppercase">
                  Intelligent Digital Systems
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#d2ebfb]">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Contact" ? "#contact" : "#"}
                  className="transition hover:text-[#53cdf8]"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#38b9ef] bg-[#38b9ef]/15 px-5 py-2 text-[#bcf2ff] transition hover:bg-[#38b9ef]/25"
              >
                Ask for demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </header>

          <div className="mt-11 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#89c9e8] uppercase">
                advanced risk intelligence
              </p>
              <h1 className="mt-3 text-4xl leading-[1.1] font-extrabold text-[#62ccf6] sm:text-5xl lg:text-6xl">
                DECISION ENGINE
                <br />
                FOR TRUSTED
                <br />
                DIGITAL JOURNEYS
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#d7ecf7]/90">
                TechMitra blends product engineering and AI analytics to detect
                suspicious intent early, automate verification workflows, and
                improve onboarding confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#52cbf8] bg-[#52cbf8]/10 px-5 py-2.5 font-semibold text-[#bdeeff] transition hover:bg-[#52cbf8]/20"
                >
                  Quick Preview
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#model"
                  className="inline-flex items-center gap-2 rounded-full border border-[#f0a342]/45 bg-[#f0a342]/10 px-5 py-2.5 font-semibold text-[#ffd39f] transition hover:bg-[#f0a342]/20"
                >
                  See 9-Box Model
                </a>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-140">
              <div className="absolute inset-0 rounded-[34%] bg-[radial-gradient(circle_at_40%_40%,rgba(56,183,237,0.2),transparent_58%)] blur-2xl" />
              <div className="absolute inset-[11%] rounded-[38%] border border-[#4fc8f5]/45" />
              <div className="absolute inset-[16%] rounded-[40%] border border-[#4fc8f5]/35" />
              <div className="absolute inset-[21%] rounded-[42%] border border-[#4fc8f5]/25" />
              <div className="absolute inset-[26%] rounded-[43%] border border-[#4fc8f5]/20" />
              <div className="absolute inset-[31%] rounded-[45%] border border-[#f0a13f]/40 bg-[#041526]/85 shadow-[0_0_60px_rgba(56,187,240,0.3)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-2xl border border-[#53cdf8]/45 bg-[#031425]/85 px-5 py-4 text-center shadow-[0_0_40px_rgba(62,196,250,0.2)]">
                  <p className="text-sm tracking-[0.16em] text-[#8ecce9] uppercase">
                    TechMitra Core
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-[#61cef6]">
                    AI + Data
                  </p>
                </div>
              </div>
              {heroNodes.map(({ Icon, top, label }) => (
                <div
                  key={label}
                  className="absolute left-[54%] right-0"
                  style={{ top }}
                >
                  <div className="relative h-0.5 w-full bg-linear-to-r from-[#50c6f2]/70 to-transparent">
                    <div className="absolute top-1/2 right-0 -translate-y-1/2">
                      <div className="flex items-center gap-2 rounded-full border border-[#4ac4f3]/55 bg-[#041423] px-2.5 py-1.5 text-xs font-semibold text-[#bdefff] shadow-[0_0_25px_rgba(78,196,244,0.2)]">
                        <Icon className="h-3.5 w-3.5 text-[#5cd1f8]" />
                        {label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-cyan-300/20 bg-[#041425]/85 px-5 py-4 shadow-[0_16px_32px_rgba(0,0,0,0.35)]"
              >
                <p className="text-3xl font-extrabold text-[#62cef8]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-[#cbe9f7]/80">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-cyan-500/15 bg-[#02060f] py-18">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <article>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#eff8ff] sm:text-5xl">
              What is our <span className="text-[#5dcdf7]">hypothesis?</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#c6def0]">
              Traditional verification starts too late. By the time risk rules
              trigger, suspicious users may already cross acquisition and login
              steps. TechMitra shifts risk sensing to the earliest touchpoints.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#c6def0]">
              We score intent continuously, combining identity confidence with
              behavioral and device context before high-value actions happen.
            </p>
          </article>

          <article className="rounded-3xl border border-cyan-400/20 bg-[#031325]/75 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.35)] sm:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#9fd7ee] uppercase">
              problem signal
            </p>
            <h3 className="mt-2 text-3xl font-bold text-[#60cdf8]">
              Leakage in early onboarding
            </h3>
            <div className="mt-7 space-y-3">
              {challengeBars.map((bar, index) => (
                <div key={bar.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold tracking-[0.12em] text-[#aedff3] uppercase">
                    <span>{bar.label}</span>
                    <span>{index === 0 ? "High volume" : "Filter gap"}</span>
                  </div>
                  <div className="h-10 rounded-full border border-cyan-300/25 bg-[#04192f] p-1">
                    <div
                      className="flex h-full items-center justify-end rounded-full bg-linear-to-r from-[#3db8ef] to-[#ef9f3f] pr-4 text-xs font-bold text-[#001120]"
                      style={{ width: bar.width }}
                    >
                      Risk escapes
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-cyan-500/15 bg-[#01050d] py-18">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <article>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#f2fbff] sm:text-5xl">
              What are we <span className="text-[#5ecdf6]">proposing?</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#c6deef]">
              A modular KYC++ layer that sits on top of your existing
              onboarding. We derive decision-ready intelligence from what users
              have, what users know, and how they behave across the journey.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-[#52cbf8]/35 bg-[#06192b] p-4">
                <p className="text-sm font-semibold tracking-[0.14em] text-[#9bd8ef] uppercase">
                  Layer 1
                </p>
                <p className="mt-1 text-xl font-semibold text-[#e8f9ff]">
                  Existing KYC Inputs
                </p>
              </div>
              <div className="rounded-2xl border border-[#f0a342]/35 bg-[#28180a]/70 p-4">
                <p className="text-sm font-semibold tracking-[0.14em] text-[#ffd59d] uppercase">
                  Layer 2
                </p>
                <p className="mt-1 text-xl font-semibold text-[#fff3df]">
                  TechMitra Derived Intelligence
                </p>
              </div>
              <div className="rounded-2xl border border-[#52cbf8]/35 bg-[#06192b] p-4">
                <p className="text-sm font-semibold tracking-[0.14em] text-[#9bd8ef] uppercase">
                  Layer 3
                </p>
                <p className="mt-1 text-xl font-semibold text-[#e8f9ff]">
                  Adaptive Decision Automation
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-cyan-300/20 bg-[#041324]/85 p-6 sm:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#9ed7ee] uppercase">
              model design
            </p>
            <h3 className="mt-2 text-3xl font-bold text-[#63cef8]">
              TechMitra KYC++ Stack
            </h3>
            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-[#f0a84d]/45 bg-[#f0a84d]/15 p-4 text-center text-sm font-semibold text-[#ffd5a0]">
                What you can derive (TechMitra Layer)
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-cyan-300/25 bg-[#06192d] p-5 text-center">
                  <p className="text-sm tracking-wide text-[#9dd5eb]">
                    What you
                  </p>
                  <p className="text-2xl font-bold text-[#e4f7ff]">HAVE</p>
                </div>
                <div className="rounded-xl border border-cyan-300/25 bg-[#06192d] p-5 text-center">
                  <p className="text-sm tracking-wide text-[#9dd5eb]">
                    What you
                  </p>
                  <p className="text-2xl font-bold text-[#e4f7ff]">KNOW</p>
                </div>
              </div>
              <div className="rounded-xl border border-cyan-300/25 bg-[#06192d] p-5 text-center">
                <p className="text-sm tracking-wide text-[#9dd5eb]">
                  What you do
                </p>
                <p className="text-2xl font-bold text-[#e4f7ff]">BEHAVE</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="model" className="bg-[#01050d] py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#f3fbff] sm:text-5xl">
              9 Box <span className="text-[#5ecdf7]">Model</span>
            </h2>
            <p className="mt-4 text-lg text-[#c3ddef]">
              A triangulated risk profile across identity, behavior, device,
              network, and compliance signals for better decision quality.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map((card) => (
              <article
                key={card.title}
                className="group rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,30,50,0.9),rgba(6,20,35,0.92))] p-5 shadow-[0_14px_26px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-[#5acdf7]/50 hover:shadow-[0_18px_32px_rgba(36,157,209,0.2)]"
              >
                <div className="inline-flex rounded-lg border border-cyan-300/30 bg-[#082339] p-2.5 text-[#63cef7]">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#ebf8ff]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#c4deee]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-cyan-500/20 bg-[linear-gradient(90deg,#04192d,#072542,#0a2740)]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h2 className="text-4xl font-extrabold text-[#67d0f7] sm:text-5xl">
              Let&apos;s Build With TechMitra
            </h2>
            <p className="mt-2 text-[#d5ecf8]">
              Share your workflow or product challenge and we will map the
              fastest path to launch.
            </p>
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
