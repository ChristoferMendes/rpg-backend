import { Router } from "express";
import { userRouter } from "../modules/user/routes";
import { characterRouter } from "../modules/characters/routes";

export const routes = Router();

routes.use('/', (_, res) => res.send('Hello World!'))
routes.use('/users', userRouter)
routes.use('/characters', characterRouter)