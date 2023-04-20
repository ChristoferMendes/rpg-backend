"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterDiplomat = void 0;
const client_1 = require("../../../shared/client");
class CharacterDiplomat {
    async create(req, res) {
        const { name, race, avatar_url, user_id } = req.body;
        if (!name || !race || !avatar_url || !user_id)
            return res.status(400).json({ error: "Missing data" });
        const character = await client_1.prisma.characters.create({
            data: {
                name,
                race,
                avatar_url,
                user_id,
            }
        });
        return res.json(character);
    }
    async getAll(req, res) {
        const { user_id } = req.query;
        const userIdSerialized = Number(user_id);
        const characters = await client_1.prisma.characters.findMany({ where: { user_id: userIdSerialized } });
        return res.json(characters);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const idSerialized = Number(id);
        const character = await client_1.prisma.characters.findUnique({ where: { id: idSerialized } });
        return res.json(character);
    }
}
exports.characterDiplomat = new CharacterDiplomat();
