"use client"

import { SignInButton } from "@clerk/nextjs"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Authenticated, Unauthenticated, useQuery } from "convex/react"
import { makeFunctionReference } from "convex/server"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type ProjectInquiry = {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  createdAt: number
}

const listProjectInquiriesReference = makeFunctionReference<
  "query",
  Record<string, never>,
  ProjectInquiry[]
>("projectInquiries:listProjectInquiries")

const formatDate = (timestamp: number) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(timestamp))

const toTitleCase = (value: string) =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ")

const columnHelper = createColumnHelper<ProjectInquiry>()

const columns = [
  columnHelper.accessor("createdAt", {
    header: "Submitted",
    cell: (info) => (
      <span className="whitespace-nowrap text-[#bde2f4]">
        {formatDate(info.getValue())}
      </span>
    ),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => (
      <span className="font-semibold text-[#eaf8ff]">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => <span className="text-[#d4ebf7]">{info.getValue()}</span>,
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
    cell: (info) => (
      <span className="text-[#d4ebf7]">{info.getValue() || "Not shared"}</span>
    ),
  }),
  columnHelper.accessor("service", {
    header: "Service",
    cell: (info) => (
      <span className="rounded-full border border-cyan-300/20 bg-[#0a2a47]/70 px-3 py-1 text-xs font-semibold tracking-wide whitespace-nowrap text-[#a8dcf1] uppercase">
        {toTitleCase(info.getValue())}
      </span>
    ),
  }),
  columnHelper.accessor("message", {
    header: "Message",
    cell: (info) => (
      <p className="max-w-md text-sm leading-relaxed text-[#d4ebf7]">
        {info.getValue()}
      </p>
    ),
  }),
]

function InquiryTable() {
  const inquiries = useQuery(listProjectInquiriesReference, {})

  // TanStack Table returns non-memoizable helpers; this hook is intended here.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: inquiries ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (inquiries === undefined) {
    return (
      <p className="rounded-2xl border border-cyan-300/20 bg-[#041324]/80 px-5 py-4 text-[#c5e2f3]">
        Loading enquiries...
      </p>
    )
  }

  if (inquiries.length === 0) {
    return (
      <p className="rounded-2xl border border-cyan-300/20 bg-[#041324]/80 px-5 py-4 text-[#c5e2f3]">
        No enquiries have been submitted yet.
      </p>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-[#9fd7ef]">
        {inquiries.length} enquir{inquiries.length === 1 ? "y" : "ies"} found
      </p>

      <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-[#041324]/80">
        <table className="w-full min-w-245 border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-cyan-300/20">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="bg-[#07223a]/85 px-4 py-3 text-left text-xs font-bold tracking-[0.12em] text-[#9fd7ef] uppercase"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-cyan-300/12 transition hover:bg-[#08233e]/65"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 align-top text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ProjectInquiriesPage() {
  return (
    <main className="min-h-screen bg-[#01050d] text-[#f0fbff]">
      <section className="relative isolate overflow-hidden border-b border-cyan-500/25 bg-[#030812]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(58,168,217,0.2),transparent_40%),radial-gradient(circle_at_76%_22%,rgba(245,154,52,0.12),transparent_38%),linear-gradient(180deg,#020913_0%,#040d19_56%,#030712_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-[#06223a]/70 px-4 py-2 text-sm font-semibold text-[#bdefff] transition hover:bg-[#0a2f4f]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tech Mitra
          </Link>

          <header className="mt-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#f6fbff] sm:text-5xl">
              Project Enquiries
            </h1>
            <p className="mt-3 text-lg text-[#cfe6f5]">
              All submissions from the homepage project enquiry form.
            </p>
          </header>

          <div className="mt-8">
            <Unauthenticated>
              <div className="rounded-2xl border border-cyan-300/20 bg-[#041324]/80 p-6">
                <p className="text-[#cfe6f5]">
                  Sign in to view the enquiry list.
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
              <InquiryTable />
            </Authenticated>
          </div>
        </div>
      </section>
    </main>
  )
}
