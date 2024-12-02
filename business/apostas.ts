import { exibirBetsPorUsuario } from "../entity/bet.db";

interface Dados {
    usuario1: string;
    usuario2: string;
    partida: string;
    comida: string;
};

const listarApostas = (idUsuario: string) => {
    return exibirBetsPorUsuario(idUsuario);
};

const criarAposta = (dados: Dados) => {

};

export {
    listarApostas,
    criarAposta
}