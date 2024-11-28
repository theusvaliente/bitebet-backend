import { useDatabase } from '../database/useDatabase';
import { food } from '../database/schema';
import { eq } from 'drizzle-orm';

export default class FoodSql {
    private db = useDatabase();

    async list() {
        const foods = await this.db
            .select()
            .from(food);

        return foods
    }

    async create(foodData) {
        await this.db.insert(food)
            .values(foodData)
    }

    async update(id, foodData) {
        await this.db.update(food)
            .set(foodData)
            .where(eq(food.idComida, id))
    }

    async delete(id) {
        await this.db.delete(food)
            .where(eq(food.idComida, id))
    }
}
