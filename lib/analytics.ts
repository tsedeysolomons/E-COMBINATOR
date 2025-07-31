"use server";

import { db } from "@/lib/db";
import { startupApplications } from "@/db/schema";
import { desc, gte } from "drizzle-orm";
import { z } from "zod";
import { subDays, format } from "date-fns";
import { sql } from "drizzle-orm";

// Define the response schema
const analyticsSchema = z.object({
  totalApplications: z.number(),
  approved: z.object({
    count: z.number(),
    percentage: z.number(),
  }),
  pending: z.object({
    count: z.number(),
    percentage: z.number(),
  }),
  rejected: z.object({
    count: z.number(),
    percentage: z.number(),
  }),
  dailySubmissions: z.array(
    z.object({
      date: z.string(),
      count: z.number(),
    })
  ),
  averageTeamSize: z.number(),
  totalFundingRequested: z.number(),
  topSector: z.object({
    sector: z.string(),
    percentage: z.number(),
  }),
  recentApplications: z.array(
    z.object({
      id: z.number(),
      startupName: z.string(),
      sector: z.string(),
      date: z.string(),
      status: z.enum(["approved", "pending", "rejected"]),
    })
  ),
});

// Server Action to fetch analytics
export async function getApplicationAnalytics() {
  try {
    // Fetch all applications
    const applications = await db
      .select({
        id: startupApplications.id,
        startupName: startupApplications.startupName,
        sector: startupApplications.sector,
        createdAt: startupApplications.createdAt,
        status: startupApplications.applicationStatus,
        teamSize: startupApplications.teamSize,
        investmentAmount: startupApplications.investmentAmount,
      })
      .from(startupApplications);

    // Total applications
    const totalApplications = applications.length;

    // Status counts and percentages
    const approvedCount = applications.filter(
      (app) => app.status === "approved"
    ).length;
    const pendingCount = applications.filter(
      (app) => app.status === "pending"
    ).length;
    const rejectedCount = applications.filter(
      (app) => app.status === "rejected"
    ).length;

    const approvedPercentage =
      totalApplications > 0 ? (approvedCount / totalApplications) * 100 : 0;
    const pendingPercentage =
      totalApplications > 0 ? (pendingCount / totalApplications) * 100 : 0;
    const rejectedPercentage =
      totalApplications > 0 ? (rejectedCount / totalApplications) * 100 : 0;

    // Daily submissions (last 7 days)
    const sevenDaysAgo = subDays(new Date(), 7);
    const dailyCounts = await db
      .select({
        date: sql`DATE_TRUNC('day', ${startupApplications.createdAt})`.as(
          "date"
        ),
        count: sql`COUNT(${startupApplications.id})`.as("count"),
      })
      .from(startupApplications)
      .where(gte(startupApplications.createdAt, sevenDaysAgo))
      .groupBy(sql`DATE_TRUNC('day', ${startupApplications.createdAt})`)
      .orderBy(sql`DATE_TRUNC('day', ${startupApplications.createdAt})`);

    // Generate daily submissions for the last 7 days
    const dailySubmissions = [];
    for (let i = 0; i < 7; i++) {
      const date = subDays(new Date(), i);
      const formattedDate = format(date, "yyyy-MM-dd");
      const dailyCount = dailyCounts.find(
        (dc) => format(dc.date as any, "yyyy-MM-dd") === formattedDate
      );
      dailySubmissions.push({
        date: formattedDate,
        count: dailyCount ? Number(dailyCount.count) : 0,
      });
    }
    dailySubmissions.reverse(); // Sort ascending

    // Average team size
    const teamSizes = applications.map((app) => {
      if (app.teamSize === ">6") return 7; // Approximate for ">6"
      return parseInt(app.teamSize, 10);
    });
    const averageTeamSize =
      teamSizes.length > 0
        ? teamSizes.reduce((sum, size) => sum + size, 0) / teamSizes.length
        : 0;

    // Total funding requested
    const totalFundingRequested = applications.reduce((sum, app) => {
      if (!app.investmentAmount || app.investmentAmount === "") return sum;
      const amount = parseFloat(app.investmentAmount.replace(/[^0-9.]/g, ""));
      return sum + (isNaN(amount) ? 0 : amount);
    }, 0);

    // Top sector
    const sectorCounts = applications.reduce((acc, app) => {
      acc[app.sector] = (acc[app.sector] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const topSector = Object.entries(sectorCounts).reduce(
      (max, [sector, count]) => (count > max.count ? { sector, count } : max),
      { sector: "None", count: 0 }
    );
    const topSectorPercentage =
      totalApplications > 0 ? (topSector.count / totalApplications) * 100 : 0;

    // Recent applications (last 5)
    const recentApplications = applications
      .sort(
        (a, b) =>
          new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
      )
      .slice(0, 5)
      .map((app) => ({
        id: app.id,
        startupName: app.startupName,
        sector: app.sector,
        date: format(app.createdAt!, "yyyy-MM-dd"),
        status: app.status,
      }));

    // Validate response with Zod
    const analytics = analyticsSchema.parse({
      totalApplications,
      approved: {
        count: approvedCount,
        percentage: parseFloat(approvedPercentage.toFixed(2)),
      },
      pending: {
        count: pendingCount,
        percentage: parseFloat(pendingPercentage.toFixed(2)),
      },
      rejected: {
        count: rejectedCount,
        percentage: parseFloat(rejectedPercentage.toFixed(2)),
      },
      dailySubmissions,
      averageTeamSize: parseFloat(averageTeamSize.toFixed(1)),
      totalFundingRequested: parseFloat(totalFundingRequested.toFixed(2)),
      topSector: {
        sector: topSector.sector,
        percentage: parseFloat(topSectorPercentage.toFixed(2)),
      },
      recentApplications,
    });

    return { success: true, data: analytics };
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return { success: false, message: "Failed to fetch analytics data" };
  }
}

/* "use server";

import { db } from "@/lib/db";
import { startupApplications } from "@/db/schema";
import { desc, eq, and, gte } from "drizzle-orm";
import { z } from "zod";
import { subDays, format } from "date-fns";

// Define the response schema
const analyticsSchema = z.object({
  totalApplications: z.number(),
  approved: z.object({
    count: z.number(),
    percentage: z.number(),
  }),
  pending: z.object({
    count: z.number(),
    percentage: z.number(),
  }),
  rejected: z.object({
    count: z.number(),
    percentage: z.number(),
  }),
  dailySubmissions: z.array(
    z.object({
      date: z.string(),
      count: z.number(),
    })
  ),
  averageTeamSize: z.number(),
  totalFundingRequested: z.number(),
  topSector: z.object({
    sector: z.string(),
    percentage: z.number(),
  }),
  recentApplications: z.array(
    z.object({
      startupName: z.string(),
      sector: z.string(),
      date: z.string(),
      status: z.enum(["approved", "pending", "rejected"]),
    })
  ),
});

// Server Action to fetch analytics
export async function getApplicationAnalytics() {
  try {
    // Fetch all applications
    const applications = await db
      .select({
        id: startupApplications.id,
        startupName: startupApplications.startupName,
        sector: startupApplications.sector,
        createdAt: startupApplications.createdAt,
        status: startupApplications.applicationStatus,
        teamSize: startupApplications.teamSize,
        investmentAmount: startupApplications.investmentAmount,
      })
      .from(startupApplications);

    // Total applications
    const totalApplications = applications.length;

    // Status counts and percentages
    const approvedCount = applications.filter(
      (app) => app.status === "approved"
    ).length;
    const pendingCount = applications.filter(
      (app) => app.status === "pending"
    ).length;
    const rejectedCount = applications.filter(
      (app) => app.status === "rejected"
    ).length;

    const approvedPercentage =
      totalApplications > 0 ? (approvedCount / totalApplications) * 100 : 0;
    const pendingPercentage =
      totalApplications > 0 ? (pendingCount / totalApplications) * 100 : 0;
    const rejectedPercentage =
      totalApplications > 0 ? (rejectedCount / totalApplications) * 100 : 0;

    // Daily submissions (last 7 days)
    const sevenDaysAgo = subDays(new Date(), 7);
    const dailyCounts = await db
      .select({
        date: startupApplications.createdAt,
        count: startupApplications.id,
      })
      .from(startupApplications)
      .where(gte(startupApplications.createdAt, sevenDaysAgo))
      .groupBy(startupApplications.createdAt)
      .orderBy(startupApplications.createdAt);

    // Generate daily submissions for the last 7 days
    const dailySubmissions = [];
    for (let i = 0; i < 7; i++) {
      const date = subDays(new Date(), i);
      const formattedDate = format(date, "yyyy-MM-dd");
      const count = dailyCounts.filter(
        (dc) => format(dc.date!, "yyyy-MM-dd") === formattedDate
      ).length;
      dailySubmissions.push({ date: formattedDate, count });
    }
    dailySubmissions.reverse(); // Sort ascending

    // Average team size
    const teamSizes = applications.map((app) => {
      if (app.teamSize === ">6") return 7; // Approximate for ">6"
      return parseInt(app.teamSize, 10);
    });
    const averageTeamSize =
      teamSizes.length > 0
        ? teamSizes.reduce((sum, size) => sum + size, 0) / teamSizes.length
        : 0;

    // Total funding requested
    const totalFundingRequested = applications.reduce((sum, app) => {
      if (!app.investmentAmount || app.investmentAmount === "") return sum;
      const amount = parseFloat(app.investmentAmount.replace(/[^0-9.]/g, ""));
      return sum + (isNaN(amount) ? 0 : amount);
    }, 0);

    // Top sector
    const sectorCounts = applications.reduce((acc, app) => {
      acc[app.sector] = (acc[app.sector] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const topSector = Object.entries(sectorCounts).reduce(
      (max, [sector, count]) => (count > max.count ? { sector, count } : max),
      { sector: "None", count: 0 }
    );
    const topSectorPercentage =
      totalApplications > 0 ? (topSector.count / totalApplications) * 100 : 0;

    // Recent applications (last 5)
    const recentApplications = applications
      .sort(
        (a, b) =>
          new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
      )
      .slice(0, 5)
      .map((app) => ({
        startupName: app.startupName,
        sector: app.sector,
        date: format(app.createdAt!, "yyyy-MM-dd"),
        status: app.status,
      }));

    // Validate response with Zod
    const analytics = analyticsSchema.parse({
      totalApplications,
      approved: {
        count: approvedCount,
        percentage: parseFloat(approvedPercentage.toFixed(2)),
      },
      pending: {
        count: pendingCount,
        percentage: parseFloat(pendingPercentage.toFixed(2)),
      },
      rejected: {
        count: rejectedCount,
        percentage: parseFloat(rejectedPercentage.toFixed(2)),
      },
      dailySubmissions,
      averageTeamSize: parseFloat(averageTeamSize.toFixed(1)),
      totalFundingRequested: parseFloat(totalFundingRequested.toFixed(2)),
      topSector: {
        sector: topSector.sector,
        percentage: parseFloat(topSectorPercentage.toFixed(2)),
      },
      recentApplications,
    });

    return { success: true, data: analytics };
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return { success: false, message: "Failed to fetch analytics data" };
  }
}
 */
