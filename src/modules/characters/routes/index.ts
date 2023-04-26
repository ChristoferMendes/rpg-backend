import { Router } from "express";
import { characterDiplomat } from "../diplomat";

export const characterRouter = Router();

characterRouter.get('/', characterDiplomat.getAllByUserId)
characterRouter.post('/', characterDiplomat.create)