import * as business from '../business/partidas';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/partidas', async (req: Request, res: Response) => {
    return res.send(await business.listarPartidas());
});

export default router;