import { db } from '../database/useDatabase';
import { team } from '../database/schema';

const exibirTimes = async () => {
    const teams = await db
        .select()
        .from(team);

    return teams
}

export { exibirTimes };