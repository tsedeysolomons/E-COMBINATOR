import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  serial,
  numeric,
  pgEnum,
} from "drizzle-orm/pg-core";
import { bytea } from "./bytea";
import { smallint } from "drizzle-orm/gel-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

export const supportTypeEnum = pgEnum("support_type", [
  "Funding",
  "Resources",
  "Mentorship",
  "Marketing",
]);

export const applicationStatusTypeEnum = pgEnum("status_type", [
  "pending",
  "rejected",
  "approved",
]);

export const startupApplications = pgTable("startup_applications", {
  id: serial("id").primaryKey(),

  // Contact
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  website: text("website"),

  // Basics
  startupName: text("startup_name").notNull(),
  teamSize: text("team_size").notNull(),
  sector: text("sector").notNull(),

  // Narrative
  description: text("description").notNull(),
  problem: text("problem").notNull(),
  differentiation: text("differentiation").notNull(),
  validated: boolean("validated").notNull(),
  potentialCustomers: text("potential_customers").notNull(),

  // Progress & Funding
  active_customers: integer("active_customers").notNull(),
  milestones: text("milestones").notNull(),
  fundingSecured: boolean("funding_secured").notNull(),
  supportNeeded: supportTypeEnum("support_needs").array().notNull(),
  investmentAmount: numeric("investment_amount", { precision: 12, scale: 2 }),
  investmentType: text("investment_type"),
  valuation: text("valuation"), //numeric("valuation", { precision: 12, scale: 2 }),
  progress: integer("progress").notNull(),

  // Pitch deck
  pitchDeck: bytea("pitch_deck").notNull(),
  pitchDeckMime: text("pitch_deck_mime").notNull(),
  pitchDeckName: text("pitch_deck_name").notNull(),
  pitchDeckSize: integer("pitch_deck_size").notNull(),

  //satus
  applicationStatus:
    applicationStatusTypeEnum("application_status").default("pending"),
  adminNote: text("admin_note").default(""),

  // Metadata
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
