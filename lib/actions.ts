"use server";

import { startupApplications } from "@/db/schema";
import { db } from "./db";

//import { revalidatePath } from "next/cache";
import { z } from "zod";

// Define validation schema using Zod
const startupApplicationFormSchema = z.object({
  /*  email: z.string().email().min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required").max(20),
  website: z.string().url().optional().or(z.literal("")),
  startupName: z.string().min(1, "Startup name is required").max(255),
  teamSize: z.string().min(1, "Team size is required").max(10),
  sector: z.string().min(1, "Sector is required").max(50),
  description: z
    .string()
    .min(80, "Description must be at least 80 characters")
    .max(5000),
  problem: z.string().min(1, "Problem statement is required").max(5000),
  differentiation: z.string().min(1, "Differentiation is required").max(5000),
  potentialCustomers: z
    .string()
    .min(1, "Potential customers are required")
    .max(5000),
  validated: z.boolean().default(false),
  activeCustomers: z.number(),
  milestones: z.string().min(1, "Milestones are required").max(5000),
  supportNeeded: z
    .array(z.enum(["Funding", "Resources", "Mentorship", "Marketing"]))
    .min(1, "At least one support need is required"),
  fundingSecured: z.boolean().default(false),
  investmentAmount: z.string().max(50).optional().or(z.literal("")),
  investmentType: z.string().max(50).optional().or(z.literal("")),
  valuation: z.string().max(50).optional().or(z.literal("")),
  progress: z.number().default(1),
  pitchDeck: z.instanceof(File, { message: "Please upload a file" }), */

  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(1, "Email is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .max(20, "Phone number is too long"),
  website: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  startupName: z
    .string()
    .min(1, "Startup name is required")
    .max(255, "Startup name is too long"),
  teamSize: z.enum(["1", "2", "3", "4", "5", "6", ">6"], {
    errorMap: () => ({ message: "Please select a team size" }),
  }),
  sector: z.enum(
    [
      "E-commerce",
      "Fintech",
      "Agriculture",
      "Technology",
      "Health",
      "Education",
      "Logistics",
      "Other",
    ],
    {
      errorMap: () => ({ message: "Please select a sector" }),
    }
  ),
  description: z
    .string()
    .min(80, "Description must be at least 80 characters")
    .max(5000, "Description is too long"),
  problem: z
    .string()
    .min(1, "Problem statement is required")
    .max(5000, "Problem statement is too long"),
  differentiation: z
    .string()
    .min(1, "Differentiation is required")
    .max(5000, "Differentiation is too long"),
  potentialCustomers: z
    .string()
    .min(1, "Potential customers are required")
    .max(5000, "Potential customers description is too long"),
  validated: z.boolean().default(false),
  activeCustomers: z.number({
    message: "Active customers must be a non-negative integer",
  }),
  milestones: z
    .string()
    .min(1, "Milestones are required")
    .max(5000, "Milestones description is too long"),
  supportNeeded: z
    .array(z.enum(["Funding", "Resources", "Mentorship", "Marketing"]))
    .min(1, "At least one support need is required"),
  fundingSecured: z.boolean().default(false),
  investmentAmount: z
    .string()
    .max(50, "Investment amount is too long")
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => val === "" || !isNaN(Number(val?.replace(/[^0-9.]/g, ""))),
      { message: "Investment amount must be a valid number or empty" }
    ),
  investmentType: z
    .enum(["Free seed funding", "Equity seed funding", ""])
    .optional()
    .default(""),
  valuation: z
    .string()
    .max(50, "Valuation is too long")
    .optional()
    .or(z.literal("")),
  progress: z.number().default(1),
  pitchDeck: z
    .instanceof(File, { message: "Please upload a file" })
    .refine(
      (file) => file.size <= 10 * 1024 * 1024,
      "File size must not exceed 10MB"
    )
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/vnd.ms-powerpoint",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        ].includes(file.type),
      "File must be a PDF or PowerPoint"
    ),
});

export async function addStartupApplications(formData: FormData) {
  try {
    // Extract and validate form data
    const pitchDeck = formData.get("pitchDeck") as File;
    const supportNeeded = formData
      .getAll("supportNeeded")
      .join()
      .split(",") as string[]; 

    const parsedData = startupApplicationFormSchema.parse({
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      startupName: formData.get("startupName"),
      teamSize: formData.get("teamSize"),
      sector: formData.get("sector"),
      description: formData.get("description"),
      problem: formData.get("problem"),
      differentiation: formData.get("differentiation"),
      potentialCustomers: formData.get("potentialCustomers"),
      validated: Boolean(formData.get("validated")),
      activeCustomers: Number(formData.get("activeCustomers")),
      milestones: formData.get("milestones"),
      supportNeeded,
      fundingSecured: Boolean(formData.get("fundingSecured")),
      investmentAmount: formData.get("investmentAmount"),
      investmentType: formData.get("investmentType"),
      valuation: formData.get("valuation"),
      progress: Number(formData.get("progress")),
      pitchDeck,
    });

    const pitchDeckBuffer = Buffer.from(await pitchDeck.arrayBuffer());

    console.log(parsedData);

    // Insert into database
    await db.insert(startupApplications).values({
      email: parsedData.email,
      phone: parsedData.phone,
      website: parsedData.website,
      startupName: parsedData.startupName,
      teamSize: parsedData.teamSize,
      sector: parsedData.sector,
      description: parsedData.description,
      problem: parsedData.problem,
      differentiation: parsedData.differentiation,
      potentialCustomers: parsedData.potentialCustomers,
      validated: parsedData.validated,
      active_customers: parsedData.activeCustomers,
      milestones: parsedData.milestones,
      supportNeeded: parsedData.supportNeeded,
      fundingSecured: parsedData.fundingSecured,
      investmentType: parsedData.investmentType,
      valuation: parsedData.valuation,
      progress: parsedData.progress,
      pitchDeck: pitchDeckBuffer,
      pitchDeckMime: pitchDeck.type,
      pitchDeckName: pitchDeck.name,
      pitchDeckSize: pitchDeck.size,
    });



    return { success: true, message: "Application submitted successfully" };
  } catch (error) {
    console.error("Error inserting application:", error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Invalid form data",
        errors: error.errors,
      };
    }
    return { success: false, message: "Failed to submit application" };
  }
}


