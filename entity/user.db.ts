import { useDatabase } from '../database/useDatabase';
import { user } from '../database/schema';
import { eq } from 'drizzle-orm';

export default class UserSql {
    private db = useDatabase();

    async list() {
        const users = await this.db
            .select()
            .from(user);

        return users
    }

    async create(userData) {
        await this.db.insert(user)
            .values(userData)
    }

    async update(id, userData) {
        await this.db.update(user)
            .set(userData)
            .where(eq(user.id, id))
    }

    async delete(id) {
        await this.db.delete(user)
            .where(eq(user.id, id))
    }
}