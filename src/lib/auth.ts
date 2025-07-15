import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { magicLink } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

import * as schema from "@/db/schema";

export const auth = betterAuth({
  /* user: {
    additionalFields: {
      companyId: { type: "string", required: false },
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false,
      },
    },
  }, */
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  //socialProviders: {},
  plugins: [
    nextCookies(),
    magicLink({
      sendMagicLink: async ({ email, token, url }) => {
        //TODO: Implement your email sending logic here
        console.log(`Sending magic link to ${email}`);
        console.log(`Token: ${token}`);
        console.log(`URL: ${url}`);
      },
    }),
  ],
});
