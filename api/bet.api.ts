import * as db from '../entity/bet.db'
import { Request, Response, Router } from 'express';

const router = Router()

router.get('/bets', async (req: Request, res: Response) => {
    return res.send(await db.exibirBets())
})

export default router