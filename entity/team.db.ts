import { useDatabase } from '../database/useDatabase';
import { team } from '../database/schema';

const exibirTimes = async () => {
    const db = useDatabase();

    const teams = await db
        .select()
        .from(team);

    return teams
}

export { exibirTimes };