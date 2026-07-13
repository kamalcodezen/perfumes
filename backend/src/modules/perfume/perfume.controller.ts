import { Request, Response } from "express";
import { database } from "../../db.js";
import { IPerfume } from "./perfume.interface.js";

const perfumeCollection = database.collection<IPerfume>("perfumes");

// Add Perfume
export const addPerfumes = async (req: Request, res: Response) => {
  try {
    const perfumeData = req.body;

    const addPerfumesData = {
      ...perfumeData,
      createdAt: new Date(),
    };

    const result = await perfumeCollection.insertOne(addPerfumesData);

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to add perfume",
    });
  }
};
