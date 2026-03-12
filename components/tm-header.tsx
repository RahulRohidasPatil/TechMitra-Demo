"use client"

import { SignInButton, UserButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated } from "convex/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const navItems = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact Us", href: "#contact" },
]

export default function TMHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-cyan-400/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,247,238,0.96))] shadow-[0_0_40px_rgba(50,179,241,0.18),0_0_26px_rgba(240,163,66,0.14)]">
          <Image
            src="/techmitra-logo.jpeg"
            alt="Tech Mitra logo"
            fill
            sizes="56px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-xl font-extrabold tracking-tight">
            <span className="text-[#51c5f7]">Tech </span>
            <span className="bg-[linear-gradient(135deg,#f7c56e_0%,#f0a342_48%,#eb8325_100%)] bg-clip-text text-transparent">
              Mitra
            </span>
          </p>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#d2ebfb]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition hover:text-[#53cdf8]"
          >
            {item.label}
          </a>
        ))}
        <Link href="/services" className="transition hover:text-[#53cdf8]">
          Services
        </Link>
        <Unauthenticated>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        </Unauthenticated>
        <Authenticated>
          <Link
            href="/previous-work-requests"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-[#06223a]/70 px-4 py-2 text-sm font-semibold text-[#bdefff] transition hover:bg-[#0a2f4f]"
          >
            Access requests
          </Link>
          <Link
            href="/project-inquiries"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-[#06223a]/70 px-4 py-2 text-sm font-semibold text-[#bdefff] transition hover:bg-[#0a2f4f]"
          >
            Enquiries
          </Link>
          <UserButton />
        </Authenticated>
      </nav>
    </header>
  )
}
