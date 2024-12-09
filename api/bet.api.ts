import * as business from '../business/apostas';
import * as db from "../entity/bet.db";
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/bets', async (req: Request, res: Response) => {
    const idUsuario = String(req.headers["usuario"]);
    return res.send(await business.listarApostas(idUsuario));
});

router.get('/allBets', async (req: Request, res: Response) => {
    return res.send(await business.listarTodasApostas());
});

router.post('/createBet', async (req: Request, res: Response) => {
    const aposta = await db.criarAposta(req.body);

    if (aposta) {
        return res.send(aposta).status(200);
    }

    return res.status(400).end();
});

router.post('/deleteBet', async (req: Request, res: Response) => {
    return res.send(await db.deleteBets());
});

export default router;