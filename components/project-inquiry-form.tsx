"use client"

import { useForm } from "@tanstack/react-form"
import { useMutation } from "convex/react"
import { makeFunctionReference } from "convex/server"
import Link from "next/link"
import { useState } from "react"

type ProjectInquiryValues = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

type ProjectInquiryResponse = {
  submissionId: string
  createdAt: number
}

const initialValues: ProjectInquiryValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
}

const submitProjectInquiryReference = makeFunctionReference<
  "mutation",
  ProjectInquiryValues,
  ProjectInquiryResponse
>("projectInquiries:submitProjectInquiry")

const inputClassName =
  "h-11 w-full rounded-lg border border-cyan-300/20 bg-[#0f2a47] px-4 text-base text-[#e8f6ff] outline-none transition placeholder:text-[#98c5dc] focus:border-[#5ecff8]/70 focus:ring-2 focus:ring-[#58cdf7]/35"

const selectClassName =
  "h-11 w-full rounded-lg border border-cyan-300/20 bg-[#0f2a47] px-4 text-base text-[#98c5dc] outline-none transition focus:border-[#5ecff8]/70 focus:ring-2 focus:ring-[#58cdf7]/35"

const textareaClassName =
  "h-32 w-full resize-none rounded-lg border border-cyan-300/20 bg-[#0f2a47] p-4 text-base text-[#e8f6ff] outline-none transition placeholder:text-[#98c5dc] focus:border-[#5ecff8]/70 focus:ring-2 focus:ring-[#58cdf7]/35"

const errorClassName = "mt-2 text-xs text-[#ffd6a7] sm:text-sm"

const requiredField =
  (fieldName: string) =>
  ({ value }: { value: string }) =>
    value.trim().length > 0 ? undefined : `${fieldName} is required`

const emailValidator = ({ value }: { value: string }) => {
  const trimmed = value.trim()

  if (trimmed.length === 0) {
    return "Email Address is required"
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Enter a valid email address"
  }

  return undefined
}

const phoneValidator = ({ value }: { value: string }) => {
  const trimmed = value.trim()

  if (trimmed.length === 0) {
    return undefined
  }

  const normalized = trimmed.replace(/[\s()-]/g, "")

  if (!/^\+?\d{7,15}$/.test(normalized)) {
    return "Enter a valid phone number"
  }

  return undefined
}

const getFirstError = (errors: unknown[]) =>
  errors.find((error) => typeof error === "string") as string | undefined

export default function ProjectInquiryForm() {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const submitProjectInquiry = useMutation(submitProjectInquiryReference)

  const form = useForm({
    defaultValues: initialValues,
    onSubmit: async ({ value }) => {
      setSubmitError(null)

      try {
        await submitProjectInquiry({
          name: value.name.trim(),
          email: value.email.trim(),
          phone: value.phone.trim(),
          service: value.service.trim(),
          message: value.message.trim(),
        })
        setSubmitSuccess(true)
      } catch (error) {
        setSubmitSuccess(false)
        setSubmitError(
          error instanceof Error
            ? error.message
            : "We couldn't submit your request right now. Please try again.",
        )
      }
    },
  })

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    void form.handleSubmit()
  }

  const handleFieldChange = (
    value: string,
    onChange: (nextValue: string) => void,
  ) => {
    if (submitError) {
      setSubmitError(null)
    }

    if (submitSuccess) {
      setSubmitSuccess(false)
    }

    onChange(value)
  }

  return (
    <form
      aria-labelledby="project-form-title"
      onSubmit={handleFormSubmit}
      className="rounded-3xl border border-cyan-300/20 bg-[#041324]/85 p-6 sm:p-8"
    >
      <h3
        id="project-form-title"
        className="text-[clamp(1.35rem,2vw,2.2rem)] font-extrabold text-[#f2fbff]"
      >
        Tell us about your project
      </h3>
      <p className="mt-2 text-[clamp(0.95rem,1.1vw,1.1rem)] leading-relaxed text-[#b9d9ea]">
        The more details you share, the better we can understand your goals and
        prepare accurate timelines and estimates.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <form.Field
          name="name"
          validators={{ onChange: requiredField("Name") }}
        >
          {(field) => {
            const errorMessage = getFirstError(field.state.meta.errors)

            return (
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  name={field.name}
                  placeholder="Name"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) =>
                    handleFieldChange(event.target.value, field.handleChange)
                  }
                  autoComplete="name"
                  className={inputClassName}
                />
                {field.state.meta.isTouched && errorMessage ? (
                  <p className={errorClassName}>{errorMessage}</p>
                ) : null}
              </label>
            )
          }}
        </form.Field>

        <form.Field name="email" validators={{ onChange: emailValidator }}>
          {(field) => {
            const errorMessage = getFirstError(field.state.meta.errors)

            return (
              <label className="block">
                <span className="sr-only">Email Address</span>
                <input
                  name={field.name}
                  type="email"
                  placeholder="Email Address"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) =>
                    handleFieldChange(event.target.value, field.handleChange)
                  }
                  autoComplete="email"
                  className={inputClassName}
                />
                {field.state.meta.isTouched && errorMessage ? (
                  <p className={errorClassName}>{errorMessage}</p>
                ) : null}
              </label>
            )
          }}
        </form.Field>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <form.Field name="phone" validators={{ onChange: phoneValidator }}>
          {(field) => {
            const errorMessage = getFirstError(field.state.meta.errors)

            return (
              <label className="block">
                <span className="sr-only">Phone number</span>
                <input
                  name={field.name}
                  type="tel"
                  placeholder="Phone number"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) =>
                    handleFieldChange(event.target.value, field.handleChange)
                  }
                  autoComplete="tel"
                  className={inputClassName}
                />
                {field.state.meta.isTouched && errorMessage ? (
                  <p className={errorClassName}>{errorMessage}</p>
                ) : null}
              </label>
            )
          }}
        </form.Field>

        <form.Field
          name="service"
          validators={{ onChange: requiredField("Service") }}
        >
          {(field) => {
            const errorMessage = getFirstError(field.state.meta.errors)

            return (
              <label className="block">
                <span className="sr-only">Service</span>
                <select
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) =>
                    handleFieldChange(event.target.value, field.handleChange)
                  }
                  className={selectClassName}
                >
                  <option value="">Select your service</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="hardware-support-hourly">
                    Hardware support (hourly)
                  </option>
                  <option value="hardware-support-monthly">
                    Hardware support (monthly)
                  </option>
                  <option value="hardware-support-custom">
                    Hardware support (custom)
                  </option>
                  <option value="other">Other</option>
                </select>
                {field.state.meta.isTouched && errorMessage ? (
                  <p className={errorClassName}>{errorMessage}</p>
                ) : null}
              </label>
            )
          }}
        </form.Field>
      </div>

      <div className="mt-4">
        <form.Field
          name="message"
          validators={{ onChange: requiredField("Message") }}
        >
          {(field) => {
            const errorMessage = getFirstError(field.state.meta.errors)

            return (
              <label className="block">
                <span className="sr-only">Tell us about your project</span>
                <textarea
                  name={field.name}
                  placeholder="Tell us about your project"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) =>
                    handleFieldChange(event.target.value, field.handleChange)
                  }
                  className={textareaClassName}
                />
                {field.state.meta.isTouched && errorMessage ? (
                  <p className={errorClassName}>{errorMessage}</p>
                ) : null}
              </label>
            )
          }}
        </form.Field>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-[#a8cddd] sm:text-sm">
        By submitting this form I accept the{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-2 transition hover:text-[#e6f8ff]"
        >
          Privacy Policy
        </Link>{" "}
        of this site.
      </p>

      <div className="mt-5 flex items-center justify-start">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="rounded-full border border-cyan-300/40 bg-[#5ecff8]/20 px-6 py-2.5 text-sm font-semibold text-[#e8f8ff] transition hover:bg-[#5ecff8]/30 disabled:cursor-not-allowed disabled:opacity-55 sm:text-base"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          )}
        </form.Subscribe>
      </div>

      {submitSuccess ? (
        <p className="mt-4 text-sm text-emerald-200 sm:text-base">
          Thanks. Your project details have been sent successfully.
        </p>
      ) : null}

      {submitError ? (
        <p className="mt-3 text-sm text-[#ffd6a7] sm:text-base">
          {submitError}
        </p>
      ) : null}
    </form>
  )
}
