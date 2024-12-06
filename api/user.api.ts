import * as db from '../entity/user.db'
import * as teamDb from '../entity/team.db'
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/users', async (req: Request, res: Response) => {
    return res.send(await db.exibirUsuarios());
});

router.post('/register', async (req: Request, res: Response) => {
    const user = await db.usuario(req.body.email);

    if (user) {
        return res.status(400).end();
    }

    await db.criarUsuario(req.body);

    return res.send().status(200);
});

router.post('/login', async (req: Request, res: Response) => {
    console.log(req.body)

    const user = await db.usuarioLogin(req.body.email, req.body.cpf);

    if (user) {
        const time = await teamDb.exibirTimePorId(user.time);

        return res.send({
            ...user,
            ...time
        }).status(200);
    }

    return res.status(400).end();
});

export default router;