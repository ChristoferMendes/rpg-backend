"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDiplomat = void 0;
const client_1 = require("../../../shared/client");
class UserDiplomat {
    async create(req, res) {
        const { email, password, name } = req.body;
        if (!email || !password || !name)
            return res.status(400).send('Missing required fields');
        const user = await client_1.prisma.users.create({ data: { email, password, name } });
        return res.json(user);
    }
    async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).send('Missing required fields');
        if (typeof email !== 'string' || typeof password !== 'string')
            return res.status(400).send('Invalid fields');
        const user = await client_1.prisma.users.findUnique({ where: { email } });
        if (!user)
            return res.status(404).send('Email not found');
        return user?.password === password ? res.status(200).json(user) : res.status(401).send('Invalid credentials');
    }
}
exports.userDiplomat = new UserDiplomat();
