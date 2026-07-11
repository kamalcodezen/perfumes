import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.MONGODB_URI!);

export const database = client.db(process.env.AUTH_DB_NAME);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed", error);
    process.exit(1);
  }
};
