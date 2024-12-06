import { db } from '../database/useDatabase';
import { team } from '../database/schema';
import { eq } from 'drizzle-orm';

const exibirTimes = async () => {
    const teams = await db
        .select()
        .from(team);

    return teams
}

const exibirTimePorId = async (idTime: string) => {
    const teams = await db
        .select()
        .from(team)
        .where(eq(team.idTime, idTime))

    return teams[0];
}

export { exibirTimes, exibirTimePorId };