import { Request, Response } from "express";
import { database } from "../../db.js";
import { IPerfume } from "./perfume.interface.js";
import { ObjectId } from "mongodb";

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

// all perfumes get
export const getPerfumes = async (req: Request, res: Response) => {
  try {
    const result = await perfumeCollection.find().toArray();
    res.json(result);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to get perfumes",
    });
  }
};

// get perfume by id
export const getPerfumeById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const perfume = await perfumeCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!perfume) {
      return res.status(404).json({
        success: false,
        message: "Perfume not found",
      });
    }

    return res.json(perfume);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to get perfume",
    });
  }
};

export const deletePerfume = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const result = await perfumeCollection.deleteOne({
      _id: new ObjectId(id),
    });

    res.json(result);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete perfume",
    });
  }
};
