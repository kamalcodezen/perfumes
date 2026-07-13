import { Router } from "express";
import {   addPerfumes } from "./perfume.controller.js";


const router = Router();

router.post("/", addPerfumes);

// router.get("/", getPerfumes);

export default router;