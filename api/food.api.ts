import { Request, Response, Router } from 'express';
import FoodSql from '../entity/food.db'

const router = Router()
const database = new FoodSql()

router.get('/food', async (req: Request, res: Response) => {
    return await database.list()
})

router.post('/food', async (req: Request, res: Response) => {
    const { nomeComida, imagemComida, } = req.body

    await database.create({
        nomeComida,
        imagemComida,
    })

    return res.status(201).send()
})

router.put('/food/:id', async (req: Request, res: Response) => {
   const id = req.params.id
   const { nomeComida, imagemComida, } = req.body

   await database.update(id, {
        nomeComida,
        imagemComida,
   })

   return res.status(204).send()
})

router.delete('/food/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    await database.delete(id)
    return res.status(200).send()
})
export default router