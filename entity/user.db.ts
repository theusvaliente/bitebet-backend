import { db } from '../database/useDatabase';
import { user } from '../database/schema';
import { and, eq } from 'drizzle-orm';
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
    await db
        .insert(user)
        .values({
            idUser: randomUUID().toString(),
            nomeCompleto: dados.nomeCompleto,
            cpf: dados.cpf,
            dataNascimeto: new Date(Number(dados.dataNascimeto)),
            time: dados.time,
            cep: dados.cep,
            logradouro: dados.logradouro,
            numero: dados.numero,
            complemento: dados.complemento,
            celular: dados.celular,
            email: dados.email,
            createdAt: new Date()
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

const usuarioLogin = async(email: string, cpf: string) => {
    const users = await db
        .select()
        .from(user)
        .where(and(
            eq(user.email, email),
            eq(user.cpf, cpf)
        ));

    return users[0];
}

export {
    criarUsuario,
    exibirUsuarios,
    usuario,
    usuarioLogin
}