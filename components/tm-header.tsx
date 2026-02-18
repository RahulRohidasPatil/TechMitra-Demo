"use client"

import { SignInButton, UserButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated } from "convex/react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const navItems = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Our Services", href: "#our-services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact Us", href: "#contact" },
]

export default function TMHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-cyan-400/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-cyan-300/30 bg-white/95 shadow-[0_0_40px_rgba(50,179,241,0.2)]">
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
          <p className="text-xl font-extrabold tracking-tight text-[#51c5f7]">
            Tech Mitra
          </p>
          <p className="text-xs font-medium tracking-[0.18em] text-[#9bcbe4] uppercase">
            Shaping Ideas Into Scalable Solutions
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
        <Link
          href="/ask-for-previous-work"
          className="inline-flex items-center gap-2 rounded-full border border-[#38b9ef] bg-[#38b9ef]/15 px-5 py-2 text-[#bcf2ff] transition hover:bg-[#38b9ef]/25"
        >
          Ask for previous work
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Unauthenticated>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        </Unauthenticated>
        <Authenticated>
          <UserButton />
        </Authenticated>
      </nav>
    </header>
  )
}
