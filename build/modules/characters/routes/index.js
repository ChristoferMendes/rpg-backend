"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterRouter = void 0;
const express_1 = require("express");
const diplomat_1 = require("../diplomat");
exports.characterRouter = (0, express_1.Router)();
exports.characterRouter.get('/', diplomat_1.characterDiplomat.getAll);
exports.characterRouter.get('/:id', diplomat_1.characterDiplomat.getOne);
exports.characterRouter.post('/', diplomat_1.characterDiplomat.create);
