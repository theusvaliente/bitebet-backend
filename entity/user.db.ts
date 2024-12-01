import { db } from '../database/useDatabase';
import { user } from '../database/schema';
import { eq } from 'drizzle-orm';
import { randomUUID } from 'crypto';

interface Usuario {
    nomeCompleto?: string;
    cpf?: string;
    dataNascimeto?: number;
    time?: string;
    cep?: string;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    celular?: string;
    email?: string;
}

const criarUsuario = async(dados: Usuario) => {
    const idUsuario = randomUUID().toString();

    await db
        .insert(user)
        .values({
            idUser: idUsuario,
            nomeCompleto: dados.nomeCompleto,
            cpf: dados.cpf,
            dataNascimeto: new Date().getTime(),
            time: dados.time,
            cep: dados.cep,
            logradouro: dados.logradouro,
            numero: dados.numero,
            complemento: dados.complemento,
            celular: dados.celular,
            email: dados.email
        });
}

const exibirUsuarios = async () => {
    const users = await db
        .select()
        .from(user);

    return users;
}

const usuario = async(email: string) => {
    const users = await db
        .select()
        .from(user)
        .where(eq(user.email, email));

    return users[0];
}

export {
    criarUsuario,
    exibirUsuarios,
    usuario
}