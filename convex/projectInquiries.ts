import { mutation, query } from "./_generated/server"
import { ConvexError, v } from "convex/values"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\+?\d{7,15}$/

const normalizeRequired = (value: string, fieldName: string) => {
  const trimmed = value.trim()

  if (!trimmed) {
    throw new ConvexError(`${fieldName} is required`)
  }

  return trimmed
}

export const submitProjectInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    service: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const name = normalizeRequired(args.name, "Name")
    const email = normalizeRequired(args.email, "Email Address").toLowerCase()
    const service = normalizeRequired(args.service, "Service")
    const message = normalizeRequired(args.message, "Message")
    const normalizedPhone = args.phone.trim().replace(/[\s()-]/g, "")

    if (!emailRegex.test(email)) {
      throw new ConvexError("Enter a valid email address")
    }

    if (normalizedPhone && !phoneRegex.test(normalizedPhone)) {
      throw new ConvexError("Enter a valid phone number")
    }

    const createdAt = Date.now()
    const submissionId = await ctx.db.insert("projectInquiries", {
      name,
      email,
      phone: normalizedPhone,
      service,
      message,
      createdAt,
    })

    return {
      submissionId,
      createdAt,
    }
  },
})

export const listProjectInquiries = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) {
      throw new ConvexError("You must be signed in to view enquiries")
    }

    const enquiries = await ctx.db
      .query("projectInquiries")
      .withIndex("by_created_at")
      .order("desc")
      .collect()

    return enquiries.map((enquiry) => ({
      id: enquiry._id,
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      service: enquiry.service,
      message: enquiry.message,
      createdAt: enquiry.createdAt,
    }))
  },
})
