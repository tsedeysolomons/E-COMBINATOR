ALTER TABLE "startup_applications" ALTER COLUMN "milestones" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "startup_applications" ADD COLUMN "valuation" text;