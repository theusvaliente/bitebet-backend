import { useDatabase } from '../database/useDatabase';
import { bet } from '../database/schema';
import { eq } from 'drizzle-orm';

export default class BetSql {
    private db = useDatabase();

    async list() {
        const bets = await this.db
            .select()
            .from(bet);

        return bets
    }

    async create(betData) {
        await this.db.insert(bet)
            .values(betData)
    }

    async update(id, betData) {
        await this.db.update(bet)
            .set(betData)
            .where(eq(bet.idBet, id))
    }

    async delete(id) {
        await this.db.delete(bet)
            .where(eq(bet.idBet, id))
    }
}
