import { Router } from "express";
import { userRouter } from "../modules/user/routes";
import { characterRouter } from "../modules/characters/routes";

export const routes = Router();

routes.use('/users', userRouter)
routes.use('/characters', characterRouter)