import { useDatabase } from '../database/useDatabase';
import { user } from '../database/schema';

const exibirUsuarios = async () => {
    const db = useDatabase();

    const users = await db
        .select()
        .from(user);

    return users
}

export { exibirUsuarios };