import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  previousWorkAccessLeads: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    mobileNumber: v.string(),
    companyEmail: v.string(),
    companyName: v.string(),
    industry: v.string(),
    location: v.string(),
    useCase: v.string(),
    createdAt: v.number(),
  })
    .index("by_company_email", ["companyEmail"])
    .index("by_created_at", ["createdAt"]),
  projectInquiries: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    service: v.string(),
    message: v.string(),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_created_at", ["createdAt"]),
})
