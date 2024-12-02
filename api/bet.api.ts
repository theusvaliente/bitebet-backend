import { Request, Response, Router } from 'express';
import * as db from '../business/apostas';

const router = Router();

router.get('/bets', async (req: Request, res: Response) => {
    const idUsuario = String(req.headers["usuario"]);
    return res.send(db.listarApostas(idUsuario));
});

router.post('/createBet', async (req: Request, res: Response) => {
    return res.send(db.criarAposta(req.body));
});

export default router;