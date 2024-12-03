import { eq } from 'drizzle-orm';
import { bet } from '../database/schema';
import { db } from '../database/useDatabase';
import { randomUUID } from 'crypto';

export interface Dados {
    usuario1: string;
    usuario2: string;
    partida: string;
    comida: string;
};

const exibirApostasPorUsuario = async (idUsuario: string) => {
    const bets = await db
        .select()
        .from(bet)
        .where(eq(bet.usuario1, idUsuario));

    return bets;
}

const criarAposta = async (dados: Dados) => {
    const novaBet = await db
        .insert(bet)
        .values({
            idBet: randomUUID().toString(),
            idComida: dados.comida,
            partida: dados.partida,
            usuario1: dados.usuario1,
            usuario2: dados.usuario2,
            createdAt: new Date()
        });

    return novaBet;
}

export { exibirApostasPorUsuario, criarAposta };