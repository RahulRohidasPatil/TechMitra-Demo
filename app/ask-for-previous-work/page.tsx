"use client"

import { useForm } from "@tanstack/react-form"
import { useMutation } from "convex/react"
import { makeFunctionReference } from "convex/server"
import { ArrowLeft, ExternalLink, Lock, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type PreviousWorkAccessValues = {
  firstName: string
  lastName: string
  mobileNumber: string
  companyEmail: string
  companyName: string
  industry: string
  location: string
  useCase: string
}

type PreviousWorkAccessResponse = {
  leadId: string
  createdAt: number
}

const initialValues: PreviousWorkAccessValues = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  companyEmail: "",
  companyName: "",
  industry: "",
  location: "",
  useCase: "",
}

const previousWorkItems = [
  {
    title: "Conversational AI Assistant For Support",
    industry: "SaaS Platform",
    summary:
      "Built a context-aware assistant with multi-channel support for web chat and WhatsApp queries.",
    impact:
      "Reduced average response time by 46% and increased first-contact resolution by 28%.",
    stack: "Next.js, Convex, OpenAI, Clerk",
  },
  {
    title: "Operations Intelligence Dashboard",
    industry: "Manufacturing",
    summary:
      "Delivered a live analytics dashboard combining production, quality, and inventory signals in one view.",
    impact:
      "Improved weekly planning accuracy and lowered reporting turnaround from hours to minutes.",
    stack: "React, Node.js, Python, PostgreSQL",
  },
  {
    title: "Demand Forecasting And Lead Scoring",
    industry: "E-Commerce",
    summary:
      "Implemented forecasting and lead-priority models with automated campaign triggers for growth teams.",
    impact:
      "Improved campaign ROI by 31% through better targeting and faster decision loops.",
    stack: "Python, FastAPI, ML Pipelines, Power BI",
  },
]

const requestAccessReference = makeFunctionReference<
  "mutation",
  PreviousWorkAccessValues,
  PreviousWorkAccessResponse
>("previousWork:requestAccess")

const inputClassName =
  "mt-2 w-full rounded-full border border-cyan-300/35 bg-[#041426]/90 px-5 py-3 text-[#eaf8ff] outline-none transition placeholder:text-[#85b9d4] focus:border-[#62cef8] focus:ring-2 focus:ring-[#62cef8]/30"

const labelClassName = "text-2xl font-semibold tracking-tight text-[#eef9ff]"

const errorClassName = "mt-2 text-sm text-[#ffd6a7]"

const requiredField =
  (fieldName: string) =>
  ({ value }: { value: string }) =>
    value.trim().length > 0 ? undefined : `${fieldName} is required`

const companyEmailValidator = ({ value }: { value: string }) => {
  const trimmed = value.trim()

  if (trimmed.length === 0) {
    return "Company Email is required"
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Enter a valid company email"
  }

  return undefined
}

const mobileNumberValidator = ({ value }: { value: string }) => {
  const trimmed = value.trim()

  if (trimmed.length === 0) {
    return "Mobile Number is required"
  }

  const normalized = trimmed.replace(/[\s()-]/g, "")

  if (!/^\+?\d{7,15}$/.test(normalized)) {
    return "Enter a valid mobile number"
  }

  return undefined
}

const getFirstError = (errors: unknown[]) =>
  errors.find((error) => typeof error === "string") as string | undefined

export default function AskForPreviousWorkPage() {
  const [accessGranted, setAccessGranted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const requestAccess = useMutation(requestAccessReference)
  const particles = Array.from({ length: 36 }, (_, index) => ({
    id: index,
    left: `${(index * 19) % 100}%`,
    top: `${(index * 29) % 100}%`,
    size: 2 + (index % 3),
    opacity: 0.18 + (index % 5) * 0.12,
    delay: `${(index % 7) * -0.8}s`,
    duration: `${8 + (index % 4)}s`,
  }))

  const form = useForm({
    defaultValues: initialValues,
    onSubmit: async ({ value }) => {
      setSubmitError(null)

      try {
        await requestAccess({
          firstName: value.firstName.trim(),
          lastName: value.lastName.trim(),
          mobileNumber: value.mobileNumber.trim(),
          companyEmail: value.companyEmail.trim(),
          companyName: value.companyName.trim(),
          industry: value.industry.trim(),
          location: value.location.trim(),
          useCase: value.useCase.trim(),
        })
        setAccessGranted(true)
      } catch (error) {
        setAccessGranted(false)
        setSubmitError(
          error instanceof Error
            ? error.message
            : "We couldn't unlock previous work right now. Please try again.",
        )
      }
    },
  })

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    void form.handleSubmit()
  }

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

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-[#f6fbff] sm:text-6xl">
              Ask For Our <span className="text-[#5ecdf7]">Previous Work</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-[#d3eafb]/95">
              Share your details to unlock selected project case studies and
              implementation outcomes from our portfolio.
            </p>
          </div>

          {!accessGranted ? (
            <form
              onSubmit={handleFormSubmit}
              className="mx-auto mt-10 max-w-5xl rounded-3xl border border-cyan-300/20 bg-[#041324]/72 p-5 shadow-[0_24px_44px_rgba(0,0,0,0.35)] sm:p-8"
            >
              <div className="mb-7 rounded-2xl border border-[#4fc8f5]/30 bg-[#031a2d]/85 px-4 py-3 text-sm text-[#bdefff]">
                <div className="flex items-center gap-2 font-semibold">
                  <Lock className="h-4 w-4 text-[#5ecdf7]" />
                  Access is gated
                </div>
                <p className="mt-2">
                  We use this information to track who views our previous work.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
                <form.Field
                  name="firstName"
                  validators={{ onChange: requiredField("First Name") }}
                >
                  {(field) => {
                    const errorMessage = getFirstError(field.state.meta.errors)

                    return (
                      <label className="block">
                        <span className={labelClassName}>
                          First Name <span className="text-[#f0a342]">*</span>
                        </span>
                        <input
                          className={inputClassName}
                          value={field.state.value}
                          onChange={(event) => {
                            if (submitError) {
                              setSubmitError(null)
                            }
                            field.handleChange(event.target.value)
                          }}
                          onBlur={field.handleBlur}
                          autoComplete="given-name"
                        />
                        {field.state.meta.isTouched && errorMessage ? (
                          <p className={errorClassName}>{errorMessage}</p>
                        ) : null}
                      </label>
                    )
                  }}
                </form.Field>

                <form.Field
                  name="lastName"
                  validators={{ onChange: requiredField("Last Name") }}
                >
                  {(field) => {
                    const errorMessage = getFirstError(field.state.meta.errors)

                    return (
                      <label className="block">
                        <span className={labelClassName}>
                          Last Name <span className="text-[#f0a342]">*</span>
                        </span>
                        <input
                          className={inputClassName}
                          value={field.state.value}
                          onChange={(event) => {
                            if (submitError) {
                              setSubmitError(null)
                            }
                            field.handleChange(event.target.value)
                          }}
                          onBlur={field.handleBlur}
                          autoComplete="family-name"
                        />
                        {field.state.meta.isTouched && errorMessage ? (
                          <p className={errorClassName}>{errorMessage}</p>
                        ) : null}
                      </label>
                    )
                  }}
                </form.Field>

                <form.Field
                  name="mobileNumber"
                  validators={{ onChange: mobileNumberValidator }}
                >
                  {(field) => {
                    const errorMessage = getFirstError(field.state.meta.errors)

                    return (
                      <label className="block">
                        <span className={labelClassName}>
                          Mobile Number{" "}
                          <span className="text-[#f0a342]">*</span>
                        </span>
                        <input
                          className={inputClassName}
                          value={field.state.value}
                          onChange={(event) => {
                            if (submitError) {
                              setSubmitError(null)
                            }
                            field.handleChange(event.target.value)
                          }}
                          onBlur={field.handleBlur}
                          autoComplete="tel"
                        />
                        {field.state.meta.isTouched && errorMessage ? (
                          <p className={errorClassName}>{errorMessage}</p>
                        ) : null}
                      </label>
                    )
                  }}
                </form.Field>

                <form.Field
                  name="companyEmail"
                  validators={{ onChange: companyEmailValidator }}
                >
                  {(field) => {
                    const errorMessage = getFirstError(field.state.meta.errors)

                    return (
                      <label className="block">
                        <span className={labelClassName}>
                          Company Email{" "}
                          <span className="text-[#f0a342]">*</span>
                        </span>
                        <input
                          type="email"
                          className={inputClassName}
                          value={field.state.value}
                          onChange={(event) => {
                            if (submitError) {
                              setSubmitError(null)
                            }
                            field.handleChange(event.target.value)
                          }}
                          onBlur={field.handleBlur}
                          autoComplete="email"
                        />
                        {field.state.meta.isTouched && errorMessage ? (
                          <p className={errorClassName}>{errorMessage}</p>
                        ) : null}
                      </label>
                    )
                  }}
                </form.Field>

                <form.Field
                  name="companyName"
                  validators={{ onChange: requiredField("Company Name") }}
                >
                  {(field) => {
                    const errorMessage = getFirstError(field.state.meta.errors)

                    return (
                      <label className="block">
                        <span className={labelClassName}>
                          Company Name <span className="text-[#f0a342]">*</span>
                        </span>
                        <input
                          className={inputClassName}
                          value={field.state.value}
                          onChange={(event) => {
                            if (submitError) {
                              setSubmitError(null)
                            }
                            field.handleChange(event.target.value)
                          }}
                          onBlur={field.handleBlur}
                          autoComplete="organization"
                        />
                        {field.state.meta.isTouched && errorMessage ? (
                          <p className={errorClassName}>{errorMessage}</p>
                        ) : null}
                      </label>
                    )
                  }}
                </form.Field>

                <form.Field
                  name="industry"
                  validators={{ onChange: requiredField("Industry") }}
                >
                  {(field) => {
                    const errorMessage = getFirstError(field.state.meta.errors)

                    return (
                      <label className="block">
                        <span className={labelClassName}>
                          Industry <span className="text-[#f0a342]">*</span>
                        </span>
                        <input
                          className={inputClassName}
                          value={field.state.value}
                          onChange={(event) => {
                            if (submitError) {
                              setSubmitError(null)
                            }
                            field.handleChange(event.target.value)
                          }}
                          onBlur={field.handleBlur}
                          autoComplete="organization-title"
                        />
                        {field.state.meta.isTouched && errorMessage ? (
                          <p className={errorClassName}>{errorMessage}</p>
                        ) : null}
                      </label>
                    )
                  }}
                </form.Field>

                <form.Field
                  name="location"
                  validators={{ onChange: requiredField("Location") }}
                >
                  {(field) => {
                    const errorMessage = getFirstError(field.state.meta.errors)

                    return (
                      <label className="block">
                        <span className={labelClassName}>
                          Location <span className="text-[#f0a342]">*</span>
                        </span>
                        <input
                          className={inputClassName}
                          value={field.state.value}
                          onChange={(event) => {
                            if (submitError) {
                              setSubmitError(null)
                            }
                            field.handleChange(event.target.value)
                          }}
                          onBlur={field.handleBlur}
                          autoComplete="address-level2"
                        />
                        {field.state.meta.isTouched && errorMessage ? (
                          <p className={errorClassName}>{errorMessage}</p>
                        ) : null}
                      </label>
                    )
                  }}
                </form.Field>

                <form.Field
                  name="useCase"
                  validators={{ onChange: requiredField("Use Case") }}
                >
                  {(field) => {
                    const errorMessage = getFirstError(field.state.meta.errors)

                    return (
                      <label className="block">
                        <span className={labelClassName}>
                          Explain your use case{" "}
                          <span className="text-[#f0a342]">*</span>
                        </span>
                        <input
                          className={inputClassName}
                          value={field.state.value}
                          onChange={(event) => {
                            if (submitError) {
                              setSubmitError(null)
                            }
                            field.handleChange(event.target.value)
                          }}
                          onBlur={field.handleBlur}
                        />
                        {field.state.meta.isTouched && errorMessage ? (
                          <p className={errorClassName}>{errorMessage}</p>
                        ) : null}
                      </label>
                    )
                  }}
                </form.Field>
              </div>

              <div className="mt-11 flex justify-center">
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                >
                  {([canSubmit, isSubmitting]) => (
                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="rounded-full bg-linear-to-r from-[#3db8ef] to-[#ef9f3f] px-14 py-4 text-2xl font-bold tracking-wide text-[#001221] transition hover:brightness-110 disabled:cursor-not-allowed disabled:from-[#2d5d71] disabled:to-[#71604a] disabled:text-[#9cb5c2]"
                    >
                      {isSubmitting ? "Unlocking..." : "Submit & Unlock"}
                    </button>
                  )}
                </form.Subscribe>
              </div>

              {submitError ? (
                <p className="mt-4 text-center text-base text-[#ffd6a7]">
                  {submitError}
                </p>
              ) : null}
            </form>
          ) : (
            <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-cyan-300/20 bg-[#041324]/72 p-5 shadow-[0_24px_44px_rgba(0,0,0,0.35)] sm:p-8">
              <div className="rounded-2xl border border-emerald-300/35 bg-emerald-500/10 px-4 py-3 text-emerald-100">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  Access granted
                </div>
                <p className="mt-2 text-sm">
                  Thank you. Your details are securely recorded, and our
                  previous work is now unlocked.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
                {previousWorkItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-cyan-300/20 bg-[#081d34]/80 p-5"
                  >
                    <p className="text-xs font-semibold tracking-[0.16em] text-[#91d2ee] uppercase">
                      {item.industry}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-[#e9f7ff]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#c7e0ef]">
                      {item.summary}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#9fd8ef]">
                      {item.impact}
                    </p>
                    <p className="mt-4 rounded-lg border border-cyan-300/20 bg-[#03253f]/80 px-3 py-2 text-xs text-[#b8e9ff]">
                      Stack: {item.stack}
                    </p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#5fd0f8] transition hover:text-[#9ce8ff]"
                    >
                      Discuss a similar project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  )
}
