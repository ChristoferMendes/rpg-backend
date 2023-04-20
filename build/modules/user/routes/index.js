"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const diplomat_1 = require("../diplomat");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/', diplomat_1.userDiplomat.create);
exports.userRouter.post('/login', diplomat_1.userDiplomat.login);
