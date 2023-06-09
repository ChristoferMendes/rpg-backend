import { Request, Response } from "express";
import { prisma } from '../../../shared/client';

class UserDiplomat {
  async create(req: Request, res: Response) {
    const { email, password, name } = req.body;

    if (!email || !password || !name) return res.status(400).send('Missing required fields');

    const user = await prisma.users.create({ data: { email, password, name } });

    return res.json(user)
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send('Missing required fields');
    if (typeof email !== 'string' || typeof password !== 'string') return res.status(400).send('Invalid fields');

    const user = await prisma.users.findUnique({ where: { email } })

    if (!user) return res.status(404).send('Email not found');

    return user?.password === password ? res.status(200).json(user) : res.status(401).send('Invalid credentials');
  }

  async getAllCharactersByUserId(req: Request, res: Response) {
    const { id: user_id } = req.params;

    const characters = await prisma.users.findUnique({ where: { id: Number(user_id) }, select: { characters: true } })

    if (!characters) return res.status(404).send('User not found');

    return res.status(200).json(characters)
  }
}

export const userDiplomat = new UserDiplomat();