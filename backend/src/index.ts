import "dotenv/config";
import express from "express";
import cors from "cors";

import { auth } from "./auth.js";
import { connectDB } from "./db.js";
import { toNodeHandler } from "better-auth/node";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);


app.all("/api/auth/{*any}", toNodeHandler(auth));


app.use(express.json());

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(` Server running on ${PORT}`);
  });
};

startServer();
