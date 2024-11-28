import { Request, Response, Router } from 'express';
import BetSql from '../entity/bet.db'

const router = Router()
const database = new BetSql()

router.get('/bet', async (req: Request, res: Response) => {
    return res.send(await database.list())
})

router.post('/bet', async (req, res) => {
    const { usuario1, usuario2 , partida, idComida, } = req.body

    return res.status(201).send(
        await database.create(
            {
            usuario1,
            usuario2,
            partida,
            idComida,
        }
    ))
})

router.put('/bet/:id', async (req, res) => {
   const id = req.params.id
   const { usuario1, usuario2 , partida, idComida, } = req.body

   return res.status(204).send(
        await database.update(id, {
            usuario1,
            usuario2,
            partida,
            idComida,
        })
   )
})

router.delete('/bet/:id', async (req, res) => {
    const id = req.params.id
    return res.status(200).send(
        await database.delete(id)
    )
})

export default router