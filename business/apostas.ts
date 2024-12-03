import * as db from "../entity/bet.db";

const listarApostas = async (idUsuario: string) => {
    return await db.exibirApostasPorUsuario(idUsuario);
};

const criarAposta = async (dados: db.Dados) => {
    return await db.criarAposta(dados);
};

export {
    listarApostas,
    criarAposta
}