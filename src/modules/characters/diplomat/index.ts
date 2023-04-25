import { Request, Response } from "express";
import { prisma } from "../../../shared/client";
import { raceBonus } from "../utils/raceBonus";
import { AbilityTypeEnum } from "@prisma/client";

interface Ability {
  name: AbilityTypeEnum;
  total: number;
}

class CharacterDiplomat {
  async create(req: Request, res: Response) {
    const { name, race, avatar_url, user_id, abilities } = req.body;

    if (!name || !race || !avatar_url || !user_id || !abilities) return res.status(400).json({ error: "Missing data" });

    const characterAlreadyExist = await prisma.characters.findFirst({ where: { name, AND: { user_id } } });

    if (characterAlreadyExist) return res.status(409).json({ error: "Character already exist" });

    const { bonus } = raceBonus.find(raceBonus => raceBonus.race === race) ?? {}

    const abilitiesBasedOnRaceBonus = abilities.map((ability: Ability) => {
      const increaseBonus = bonus?.find((bonus) => bonus.ability === ability.name)

      return { ...ability, bonus: increaseBonus?.value ?? 0 }
    })

    const character = await prisma.characters.create({
      data: {
        name,
        race,
        avatar_url,
        user_id,
        abilities: {
          createMany: {
            data: abilitiesBasedOnRaceBonus
          }
        }
      },
      include: {
        abilities: true
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

  async getAllByUserId(req: Request, res: Response) {
    const { user_id: user_id_param } = req.query;

    const user_id = Number(user_id_param);


    const characters = await prisma.characters.findMany({
      where: { user_id },
      include: {
        abilities: true,
      }
    });

    return res.json(characters);
  }


}

export const characterDiplomat = new CharacterDiplomat();
