import { bet } from '../database/schema';
import { useDatabase } from '../database/useDatabase';

interface BetData {
    idBet?: string;
    usuario1?: string;
    usuario2?: string;
    partida?: string;
    idComida?: string;
    createdAt?: Date;
}

const exibirBets = async () => {
    const db = useDatabase();

    const bets = await db
        .select()
        .from(bet);

    return bets
}

export { exibirBets };

/*export default class BetSql {
    private db: LibSQLDatabase;

    constructor(useDatabase: LibSQLDatabase) {
        this.db = useDatabase;
    }

    async list() {
        const bets = await this.db
            .select()
            .from(bet);

        return bets
    }

    async create(betData: BetData) {
        // await this.db.insert(bet)
        //     .values({
        //         idComida: betData.idComida,
        //         partida: betData.partida,
        //         usuario1: betData.usuario1,
        //         usuario2: betData.usuario2,
        //     })
    }

    async update(id: string, betData: BetData) {
        await this.db.update(bet)
            .set(betData)
            .where(eq(bet.idBet, id))
    }

    async delete(id: string) {
        await this.db.delete(bet)
            .where(eq(bet.idBet, id))
    }
}*/
