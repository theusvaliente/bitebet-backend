import * as business from '../business/apostas';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/bets', async (req: Request, res: Response) => {
    const idUsuario = String(req.headers["usuario"]);
    return res.send(await business.listarApostas(idUsuario));
});

router.post('/createBet', async (req: Request, res: Response) => {
    return res.send(await business.criarAposta(req.body));
});

export default router;