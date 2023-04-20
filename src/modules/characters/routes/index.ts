import { Router } from "express";
import { characterDiplomat } from "../diplomat";

export const characterRouter = Router();

characterRouter.get('/', characterDiplomat.getAll)
characterRouter.get('/:id', characterDiplomat.getOne)
characterRouter.post('/', characterDiplomat.create)