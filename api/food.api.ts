import * as db from '../entity/food.db'
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/foods', async (req: Request, res: Response) => {
    return res.send(await db.exibirComidas());
});

export default router;