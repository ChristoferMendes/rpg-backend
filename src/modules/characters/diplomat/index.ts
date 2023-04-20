import { Request, Response } from "express";
import { prisma } from "../../../shared/client";

class CharacterDiplomat {
  async create(req: Request, res: Response) {
    const { name, race, avatar_url, user_id } = req.body;

    if (!name || !race || !avatar_url || !user_id) return res.status(400).json({ error: "Missing data" });


    const character = await prisma.characters.create({
      data: {
        name,
        race,
        avatar_url,
        user_id,
      }
    })

    return res.json(character);
  }

  async getAll(req: Request, res: Response) {
    const { user_id } = req.query;
    const userIdSerialized = Number(user_id);

    const characters = await prisma.characters.findMany({ where: { user_id: userIdSerialized } });

    return res.json(characters);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const idSerialized = Number(id);

    const character = await prisma.characters.findUnique({ where: { id: idSerialized } });

    return res.json(character);
  }
}

export const characterDiplomat = new CharacterDiplomat();
