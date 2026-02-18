import { mutation } from "./_generated/server"
import { ConvexError, v } from "convex/values"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const mobileRegex = /^\+?\d{7,15}$/

const normalizeRequired = (value: string, fieldName: string) => {
  const trimmed = value.trim()

  if (!trimmed) {
    throw new ConvexError(`${fieldName} is required`)
  }

  return trimmed
}

export const requestAccess = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    mobileNumber: v.string(),
    companyEmail: v.string(),
    companyName: v.string(),
    industry: v.string(),
    location: v.string(),
    useCase: v.string(),
  },
  handler: async (ctx, args) => {
    const firstName = normalizeRequired(args.firstName, "First Name")
    const lastName = normalizeRequired(args.lastName, "Last Name")
    const companyName = normalizeRequired(args.companyName, "Company Name")
    const industry = normalizeRequired(args.industry, "Industry")
    const location = normalizeRequired(args.location, "Location")
    const useCase = normalizeRequired(args.useCase, "Use Case")
    const companyEmail = normalizeRequired(
      args.companyEmail,
      "Company Email",
    ).toLowerCase()
    const mobileNumber = normalizeRequired(args.mobileNumber, "Mobile Number")
    const normalizedMobile = mobileNumber.replace(/[\s()-]/g, "")

    if (!emailRegex.test(companyEmail)) {
      throw new ConvexError("Enter a valid company email")
    }

    if (!mobileRegex.test(normalizedMobile)) {
      throw new ConvexError("Enter a valid mobile number")
    }

    const createdAt = Date.now()
    const leadId = await ctx.db.insert("previousWorkAccessLeads", {
      firstName,
      lastName,
      mobileNumber: normalizedMobile,
      companyEmail,
      companyName,
      industry,
      location,
      useCase,
      createdAt,
    })

    return {
      leadId,
      createdAt,
    }
  },
})
