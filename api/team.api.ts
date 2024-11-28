import { Request, Response, Router } from 'express';
import TeamSql from '../entity/team.db'

const router = Router()
const database = new TeamSql()

router.get('/team', async (req: Request, res: Response) => {
    return await database.list()
})

router.post('/team', async (req: Request, res: Response) => {
    const { nomeTime, imagemTime, } = req.body

    await database.create({
        nomeTime,
        imagemTime,
    })

    return res.status(201).send()
})

router.put('/team/:id', async (req: Request, res: Response) => {
   const id = req.params.id
   const { nomeTime, imagemTime, } = req.body

   await database.update(id, {
    nomeTime,
    imagemTime,

   })

   return res.status(204).send()
})

router.delete('/team/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    await database.delete(id)
    return res.status(200).send()
})

export default router