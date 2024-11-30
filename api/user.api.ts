import * as db from '../entity/user.db'
import { Request, Response, Router } from 'express';

const router = Router()

router.get('/users', async (req: Request, res: Response) => {
    return await db.exibirUsuarios()
})

// router.post('/user', async (req: Request, res: Response) => {
//     const {
//         nomeCompleto, cpf , dataNascimeto, time, cep, logradouro, numero, complemento, celular, email
//     } = req.body

//     await database.create({
//         nomeCompleto,
//         cpf,
//         dataNascimeto,
//         time,
//         cep,
//         logradouro,
//         numero,
//         complemento,
//         celular,
//         email,
//     })

//     return res.status(201).send()
// })

// router.put('/user/:id', async (req, res) => {
//    const id = req.params.id
//    const { nomeCompleto, cpf , dataNascimeto, time, cep, logradouro, numero, complemento,
//     celular,email, } = req.body

//    await database.update(id, {
//     nomeCompleto,
//     cpf,
//     dataNascimeto,
//     time,
//     cep,
//     logradouro,
//     numero,
//     complemento,
//     celular,
//     email,
//    })

//    return res.status(204).send()
// })

// router.delete('/user/:id', async (req, res) => {
//     const id = req.params.id
//     await database.delete(id)
//     return res.status(200).send()
// })

export default router