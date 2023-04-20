import { Router } from "express";
import { userDiplomat } from "../diplomat";

export const userRouter = Router();

userRouter.post('/', userDiplomat.create)
userRouter.post('/login', userDiplomat.login)
