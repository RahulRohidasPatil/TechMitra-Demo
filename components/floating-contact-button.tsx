"use client"

import { Linkedin, Mail, Phone, Plus, X } from "lucide-react"
import { useState } from "react"

const PHONE_NUMBER = "+917028596727"
const EMAIL_ADDRESS = "techmitra06@gmail.com"
const LINKEDIN_URL = "https://www.linkedin.com/company/109415400"

const ACTIONS = [
  {
    key: "email",
    label: "Email us",
    href: `mailto:${EMAIL_ADDRESS}`,
    icon: Mail,
    external: false,
  },
  {
    key: "phone",
    label: "Call us",
    href: `tel:${PHONE_NUMBER}`,
    icon: Phone,
    external: false,
  },
  {
    key: "linkedin",
    label: "Visit LinkedIn",
    href: LINKEDIN_URL,
    icon: Linkedin,
    external: true,
  },
] as const

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="group fixed right-3 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#52cbf8]/80 bg-[#05233e]/95 text-[#bdeeff] shadow-[0_0_28px_rgba(82,203,248,0.28)] transition-all duration-300 hover:scale-110 hover:bg-[#0a2f4f] sm:right-6 sm:h-16 sm:w-16"
        aria-label={isOpen ? "Close contact options" : "Contact options"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? (
          <X className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
        ) : (
          <Plus
            className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90 sm:h-7 sm:w-7"
            aria-hidden
          />
        )}
      </button>

      <div
        className={`fixed right-3 bottom-22 z-40 flex flex-col-reverse items-center space-y-3 space-y-reverse transition-all duration-300 ease-in-out sm:right-6 sm:bottom-26 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        {ACTIONS.map((action) => {
          const Icon = action.icon
          return (
            <a
              key={action.key}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-[#041423]/95 text-[#67d0f7] shadow-[0_0_22px_rgba(78,196,244,0.16)] transition-all duration-300 hover:scale-110 hover:bg-[#0a2f4f] hover:text-[#ecf9ff] focus-visible:ring-2 focus-visible:ring-[#5cd1f8]/60 focus-visible:outline-none sm:h-16 sm:w-16"
              aria-label={action.label}
              tabIndex={isOpen ? 0 : -1}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
            </a>
          )
        })}
      </div>
    </>
  )
}
