"use server";

import { db } from "@/lib/db";
import { startupApplications, applicationStatusTypeEnum } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

// Define the application schema for the client
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
});

// Server Action to fetch applications
export async function getApplications() {
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
      })
      .from(startupApplications);

    // Transform data to match client schema
    const parsedApplications = applications.map((app) =>
      applicationSchema.parse({
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
      })
    );

    return { success: true, data: parsedApplications };
  } catch (error) {
    console.error("Error fetching applications:", error);
    return { success: false, message: "Failed to fetch applications" };
  }
}

// Server Action to update application status
export async function updateApplicationStatus(
  id: string,
  status: "pending" | "approved" | "rejected"
) {
  "use server";

  try {
    await db
      .update(startupApplications)
      .set({ applicationStatus: status })
      .where(eq(startupApplications.id, parseInt(id)));

    return {
      success: true,
      message: `Application status updated to ${status}`,
    };
  } catch (error) {
    console.error("Error updating application status:", error);
    return { success: false, message: "Failed to update application status" };
  }
}
