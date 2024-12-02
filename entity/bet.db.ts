import { eq } from 'drizzle-orm';
import { bet } from '../database/schema';
import { db } from '../database/useDatabase';

interface BetData {
    idBet?: string;
    usuario1?: string;
    usuario2?: string;
    partida?: string;
    idComida?: string;
    createdAt?: Date;
}

const exibirBetsPorUsuario = async (idUsuario: string) => {
    const bets = await db
        .select()
        .from(bet)
        .where(eq(bet.usuario1, idUsuario));

    return bets;
}

export { exibirBetsPorUsuario };