import {
  ArrowRight,
  BriefcaseBusiness,
  CircleUserRound,
  HandHeart,
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image"

const services = [
  "Data Analytics & Insights",
  "Applied Data Science",
  "AI & Intelligent Systems",
  "Generative AI & Conversational Agents",
  "Website Design & Development",
  "Mobile App Development",
  "Full-Stack Development",
  "Creative Design & Branding",
  "Digital Marketing & Growth Strategy",
]

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Outcome-Focused Builds",
    description:
      "We start with your goals and users, then design and build what moves the needle: conversions, efficiency, and better decisions.",
  },
  {
    icon: CircleUserRound,
    title: "Reliable Delivery",
    description:
      "Clear scope, milestones, and communication, so you always know what is happening and what is coming next.",
  },
  {
    icon: HandHeart,
    title: "Long-Term Support",
    description:
      "Documentation, handover, and ongoing help after launch. We do not disappear once it ships.",
  },
]

const metrics = [
  { label: "Projects Delivered", value: "40+" },
  { label: "Domains Served", value: "12+" },
  { label: "Client Retention", value: "92%" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7ff] text-[#13264f]">
      <section className="relative overflow-hidden bg-[#08153a] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(8,21,58,0.98)_18%,rgba(14,42,102,0.9)_58%,rgba(8,21,58,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(44,195,242,0.35),transparent_42%)]" />
        <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#2bc4f3]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 pt-6 pb-16 sm:px-8 lg:px-10 lg:pt-10 lg:pb-20">
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
              <Image
                src="/techmitra-logo.jpeg"
                alt="TechMitra logo"
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2bc4f3]/60 bg-[#2bc4f3]/10 px-5 py-2 text-sm font-semibold text-[#b9ebff] transition hover:bg-[#2bc4f3]/20"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-[#9edffc]">
                Digital + AI Services for Growing Teams
              </p>
              <h1 className="mt-5 text-4xl leading-tight font-extrabold text-[#2ec8f4] sm:text-5xl lg:text-6xl">
                Scalable websites, apps, analytics, and AI solutions built for
                real business outcomes.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-100/95 sm:text-xl">
                TechMitra helps teams move from idea to reliable product with a
                mix of strategy, design, and engineering. We build fast, clean,
                and maintainable systems that are ready to grow with your
                business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-[0_12px_26px_rgba(0,0,0,0.2)] backdrop-blur"
                >
                  <p className="text-3xl font-extrabold text-[#2ec8f4]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-100/85">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="space-y-12">
          <article>
            <h2 className="text-4xl font-extrabold text-[#142a58] sm:text-5xl">
              Who We Are
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#344768] sm:text-xl">
              We are a product build partner for founders and businesses that
              want practical, production-ready execution. Our team combines
              full-stack engineering, data, AI, and design to deliver products
              people actually use.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#344768] sm:text-xl">
              From websites and mobile apps to analytics dashboards and GenAI
              assistants, we focus on clarity, performance, and maintainability
              so your product keeps working as you scale.
            </p>
          </article>

          <article>
            <h2 className="text-4xl font-extrabold text-[#142a58] sm:text-5xl">
              Why Choose Us
            </h2>
            <ul className="mt-8 grid gap-5">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-[#d7dfef] bg-white p-5 shadow-[0_10px_26px_rgba(16,42,100,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(16,42,100,0.12)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#102a64] p-3 text-[#2bc4f3]">
                      <item.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#142a58]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-[#344768] sm:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <aside className="rounded-3xl border border-[#d7dfef] bg-white/90 p-6 shadow-[0_14px_36px_rgba(18,39,84,0.12)] backdrop-blur sm:p-8">
          <h2 className="text-center text-4xl font-extrabold text-[#142a58] sm:text-5xl">
            Our Services
          </h2>
          <ul className="mt-8 grid gap-3">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-xl border border-[#dce4f3] bg-[#f7faff] px-4 py-3 text-base font-semibold text-[#17326d] transition hover:border-[#2bc4f3]/45 hover:bg-white"
              >
                {service}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="contact" className="bg-[#081d4a]">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold text-[#2bc4f3] sm:text-5xl">
              Contact Us
            </h2>
            <p className="text-slate-200">
              Tell us what you want to build, and we will help you shape the
              best plan.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-base text-slate-100 sm:text-lg">
            <a
              href="tel:+917028596727"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4 text-[#2bc4f3]" />
              +91 70285 96727 / +91 79745 56547
            </a>
            <a
              href="mailto:techmitra06@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 transition hover:bg-white/15"
            >
              <Mail className="h-4 w-4 text-[#2bc4f3]" />
              techmitra06@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
