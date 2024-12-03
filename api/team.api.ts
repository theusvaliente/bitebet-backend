import * as db from '../entity/team.db';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/teams', async (req: Request, res: Response) => {
    return res.send(await db.exibirTimes());
});

export default router;