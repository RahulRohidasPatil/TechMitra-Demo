import TMHeader from "@/components/tm-header"
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Globe2,
  Handshake,
  Mail,
  Network,
  Phone,
  Radar,
} from "lucide-react"
import Link from "next/link"

const serviceGroups = [
  {
    title: "Technology & Development",
    items: [
      "Data Analytics Solutions",
      "Data Science Solutions",
      "AI Agents Development",
      "Generative AI Solutions",
      "Website Design & Development",
      "Web Application Development",
      "Mobile Application Development",
      "Full-Stack Project Development",
      "E-Learning Platform Development",
      "Customer Relationship Management (CRM) Systems",
    ],
  },
  {
    title: "Design & Creative Services",
    items: [
      "UI/UX Design",
      "Graphic Designing",
      "Content Creation (Posters, Branding Creatives)",
    ],
  },
  {
    title: "Marketing & Growth",
    items: ["Digital Marketing", "Growth Strategy & Lead Generation"],
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
    { Icon: BadgeCheck, top: "14%", label: "Trust" },
    { Icon: BrainCircuit, top: "27%", label: "Signals" },
    { Icon: Radar, top: "40%", label: "Risk" },
    { Icon: Globe2, top: "53%", label: "Geo" },
    { Icon: Network, top: "66%", label: "Network" },
    { Icon: Handshake, top: "79%", label: "Delivery" },
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
                    Tech Mitra
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-[#61cef6]">
                    AI + Data
                  </p>
                </div>
              </div>
              {heroNodes.map(({ Icon, top, label }) => (
                <div
                  key={label}
                  className="absolute right-0 left-[54%]"
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
            className="rounded-3xl border border-cyan-300/20 bg-[#041324]/80 p-6 sm:p-8"
          >
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#f2fbff] sm:text-5xl">
              Our Services
            </h2>
            <div className="mt-7 space-y-6">
              {serviceGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-bold tracking-[0.14em] text-[#90d6f2] uppercase">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {group.items.map((service) => (
                      <li
                        key={service}
                        className="rounded-lg border border-cyan-300/25 bg-[#10244d] px-4 py-3 text-base font-semibold text-[#e9f6ff]"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
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
