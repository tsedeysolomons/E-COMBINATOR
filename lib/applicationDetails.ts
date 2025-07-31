"use server";

import { db } from "@/lib/db";
import { startupApplications, applicationStatusTypeEnum } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const applicationSchema = z.object({
  id: z.string(),
  startupName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  website: z.string().optional(),
  teamSize: z.string(),
  sector: z.string(),
  description: z.string(),
  problem: z.string(),
  differentiation: z.string(),
  validated: z.string(),
  customers: z.string(),
  potentialCustomers: z.string(),
  milestones: z.string(),
  benefits: z.array(z.string()),
  fundingSecured: z.string(),
  investmentAmount: z.string().optional(),
  investmentType: z.string().optional(),
  valuation: z.string().optional(),
  progress: z.string(),
  submissionDate: z.string(),
  status: z.enum(["pending", "approved", "rejected"]),
  adminNote: z.string().optional(),
  pitchDeck: z.instanceof(Object),
});

export async function getApplicationById(id: string) {
  try {
    const applications = await db
      .select({
        id: startupApplications.id,
        startupName: startupApplications.startupName,
        email: startupApplications.email,
        phone: startupApplications.phone,
        website: startupApplications.website,
        teamSize: startupApplications.teamSize,
        sector: startupApplications.sector,
        description: startupApplications.description,
        problem: startupApplications.problem,
        differentiation: startupApplications.differentiation,
        validated: startupApplications.validated,
        customers: startupApplications.active_customers,
        potentialCustomers: startupApplications.potentialCustomers,
        milestones: startupApplications.milestones,
        benefits: startupApplications.supportNeeded,
        fundingSecured: startupApplications.fundingSecured,
        investmentAmount: startupApplications.investmentAmount,
        investmentType: startupApplications.investmentType,
        valuation: startupApplications.valuation,
        progress: startupApplications.progress,
        submissionDate: startupApplications.createdAt,
        status: startupApplications.applicationStatus,
        notes: startupApplications.adminNote,
        pitchDeck: startupApplications.pitchDeck,
      })
      .from(startupApplications)
      .where(eq(startupApplications.id, parseInt(id)));

    if (applications.length === 0) {
      return { success: false, message: "Application not found" };
    }

    const app = applications[0];

    // Transform data to match client schema
    const parsedApplication = applicationSchema.parse({
      ...app,
      id: app.id.toString(), // Convert serial (integer) to string
      submissionDate: app.submissionDate?.toISOString().slice(0, 10),
      validated: app.validated ? "Yes" : "No",
      fundingSecured: app.fundingSecured ? "Yes" : "No",
      customers: app.customers.toString(),
      progress: app.progress.toString(),
      benefits: Array.isArray(app.benefits) ? app.benefits : [],
      investmentAmount: app.investmentAmount
        ? app.investmentAmount.toString()
        : undefined,
      adminNote: app.notes,
    });

    return { success: true, data: parsedApplication };
  } catch (error) {
    console.error("Error fetching application:", error);
    return { success: false, message: "Failed to fetch application" };
  }
}

// Server Action to update application status and notes
export async function updateApplicationDetails(
  id: string,
  updates: { status?: "pending" | "approved" | "rejected"; notes?: string }
) {
  "use server";

  try {
    await db
      .update(startupApplications)
      .set({
        applicationStatus: updates.status,
        adminNote: updates.notes,
      })
      .where(eq(startupApplications.id, parseInt(id)));

    return { success: true, message: "Application updated successfully" };
  } catch (error) {
    console.error("Error updating application:", error);
    return { success: false, message: "Failed to update application" };
  }
}
