import { useDatabase } from '../database/useDatabase';
import { food } from '../database/schema';

const exibirComidas = async () => {
    const db = useDatabase();

    const foods = await db
        .select()
        .from(food);

    return foods
}

export { exibirComidas };