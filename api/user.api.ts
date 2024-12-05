import * as db from '../entity/user.db'
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/users', async (req: Request, res: Response) => {
    return res.send(await db.exibirUsuarios());
});

router.post('/register', async (req: Request, res: Response) => {

    console.log(req.body)

    const user = await db.usuario(req.body.email);

    if (user) {
        return res.send("Usuário já existe").status(400);
    }

    db.criarUsuario(req.body);

    return res.send().status(200);
});

router.get('/login', async (req: Request, res: Response) => {
    const user = await db.usuarioLogin(req.params.email, req.params.cpf);

    if (user) {
        return res.send().status(200);
    }

    return res.send("Usuário não encontrado").status(404);
});

export default router;