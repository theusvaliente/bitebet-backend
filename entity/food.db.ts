import { db } from '../database/useDatabase';
import { food } from '../database/schema';

const exibirComidas = async () => {
    const foods = await db
        .select()
        .from(food);

    return foods
}

export { exibirComidas };