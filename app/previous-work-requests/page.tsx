"use client"

import { SignInButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated, useQuery } from "convex/react"
import { makeFunctionReference } from "convex/server"
import {
  ArrowLeft,
  Building2,
  Clock3,
  Mail,
  Phone,
  UserRound,
} from "lucide-react"
import Link from "next/link"

type AccessRequest = {
  id: string
  firstName: string
  lastName: string
  mobileNumber: string
  companyEmail: string
  companyName: string
  industry: string
  location: string
  useCase: string
  createdAt: number
}

const listAccessRequestsReference = makeFunctionReference<
  "query",
  Record<string, never>,
  AccessRequest[]
>("previousWork:listAccessRequests")

const formatDate = (timestamp: number) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(timestamp))

function RequestsList() {
  const requests = useQuery(listAccessRequestsReference, {})

  if (requests === undefined) {
    return (
      <p className="rounded-2xl border border-cyan-300/20 bg-[#041324]/80 px-5 py-4 text-[#c5e2f3]">
        Loading access requests...
      </p>
    )
  }

  if (requests.length === 0) {
    return (
      <p className="rounded-2xl border border-cyan-300/20 bg-[#041324]/80 px-5 py-4 text-[#c5e2f3]">
        No one has requested previous work access yet.
      </p>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-[#9fd7ef]">
        {requests.length} request{requests.length === 1 ? "" : "s"} found
      </p>
      {requests.map((request) => (
        <article
          key={request.id}
          className="rounded-2xl border border-cyan-300/20 bg-[#041324]/80 p-5"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-[#eaf7ff]">
              {request.firstName} {request.lastName}
            </h2>
            <p className="inline-flex items-center gap-2 text-sm text-[#a5d9ef]">
              <Clock3 className="h-4 w-4" />
              {formatDate(request.createdAt)}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-[#d1e8f5] sm:grid-cols-2">
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#62cef8]" />
              {request.companyEmail}
            </p>
            <p className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#62cef8]" />
              {request.mobileNumber}
            </p>
            <p className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#62cef8]" />
              {request.companyName}
            </p>
            <p className="inline-flex items-center gap-2">
              <UserRound className="h-4 w-4 text-[#62cef8]" />
              {request.industry} - {request.location}
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-cyan-300/20 bg-[#07223d]/80 px-4 py-3 text-sm leading-relaxed text-[#c7e1ef]">
            <span className="font-semibold text-[#e0f4ff]">Use case: </span>
            {request.useCase}
          </div>
        </article>
      ))}
    </div>
  )
}

export default function PreviousWorkRequestsPage() {
  return (
    <main className="min-h-screen bg-[#01050d] text-[#f0fbff]">
      <section className="relative isolate overflow-hidden border-b border-cyan-500/25 bg-[#030812]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(58,168,217,0.2),transparent_40%),radial-gradient(circle_at_76%_22%,rgba(245,154,52,0.12),transparent_38%),linear-gradient(180deg,#020913_0%,#040d19_56%,#030712_100%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-[#06223a]/70 px-4 py-2 text-sm font-semibold text-[#bdefff] transition hover:bg-[#0a2f4f]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tech Mitra
          </Link>

          <header className="mt-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#f6fbff] sm:text-5xl">
              Previous Work Access Requests
            </h1>
            <p className="mt-3 text-lg text-[#cfe6f5]">
              People who submitted the access form for previous work.
            </p>
          </header>

          <div className="mt-8">
            <Unauthenticated>
              <div className="rounded-2xl border border-cyan-300/20 bg-[#041324]/80 p-6">
                <p className="text-[#cfe6f5]">
                  Sign in to view the access request list.
                </p>
                <div className="mt-4">
                  <SignInButton mode="modal">
                    <button
                      type="button"
                      className="rounded-full bg-linear-to-r from-[#3db8ef] to-[#ef9f3f] px-6 py-2.5 text-sm font-bold text-[#001221] transition hover:brightness-110"
                    >
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </div>
            </Unauthenticated>

            <Authenticated>
              <RequestsList />
            </Authenticated>
          </div>
        </div>
      </section>
    </main>
  )
}
