import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client, database } from "./db.js";

export const auth = betterAuth({
  database: mongodbAdapter(database, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  trustedOrigins: [process.env.CLIENT_URL!],
});
