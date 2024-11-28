import { useDatabase } from '../database/useDatabase';
import { team } from '../database/schema';
import { eq } from 'drizzle-orm';

export default class TeamSql {
    private db = useDatabase();

    async list() {
        const teams = await this.db
            .select()
            .from(team);

        return teams
    }

    async create(teamData) {
        await this.db.insert(team)
            .values(teamData)
    }

    async update(id, teamData) {
        await this.db.update(team)
            .set(teamData)
            .where(eq(team.idTime, id))
    }

    async delete(id) {
        await this.db.delete(team)
            .where(eq(team.idTime, id))
    }
}