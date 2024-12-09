import * as db from "../entity/bet.db";
import * as userDb from "../entity/user.db";
import * as comidaDb from "../entity/food.db";
import * as teamDb from "../entity/team.db";

import { listarPartidas } from "./partidas";

interface Aposta {
    idBet: string,
    nomeUsuario1: string,
    nomeUsuario2: string,
    time1: string,
    time2: string,
    imgTime1: string,
    imgTime2: string,
    golsTime1: number,
    golsTime2: number
    vencedor: string,
    comida: string,
    imgComida: string
};

const listarApostas = async (idUsuario: string) => {
    const apostas: Aposta[] = [];

    const times = await teamDb.exibirTimes();
    const partidas = await listarPartidas();
    const usuarios = await userDb.exibirUsuarios();
    const bets = await db.exibirApostasPorUsuario(idUsuario);
    const comidas = await comidaDb.exibirComidas();

    bets.forEach(async (bet) => {
        const usuario1 = usuarios.filter(u => u.idUser === bet.usuario1)[0];
        const usuario2 = usuarios.filter(u => u.idUser === bet.usuario2)[0];

        const nomeUsuario1 = usuario1.nomeCompleto;
        const nomeTimeUsuario1 = times.filter(t => t.idTime === usuario1.time)[0].nomeTime;

        const nomeUsuario2 = usuario2.nomeCompleto;
        const nomeTimeUsuario2 = times.filter(t => t.idTime === usuario2.time)[0].nomeTime;

        const partida = partidas.filter(p => p.idPartida == bet.partida)[0];
        const comida = comidas.filter(c => c.idComida === bet.idComida)[0];

        if (partida) {
            const time1 = partida.timeCasa;
            const time2 = partida.timeFora;
            const imgTime1 = partida.imagemTimeCasa;
            const imgTime2 = partida.imagemTimeFora;
            const golsTime1 = partida.golsTime1;
            const golsTime2 = partida.golsTime2;

            const timeGanhou = golsTime1 > golsTime2 ? time1 : time2;
            const vencedor =
                timeGanhou.includes(nomeTimeUsuario1)
                    ? nomeUsuario1
                    : timeGanhou.includes(nomeTimeUsuario2)
                        ? nomeUsuario2
                        : nomeUsuario1;

            const aposta = {
                idBet: bet.idBet,
                nomeUsuario1,
                nomeUsuario2,
                time1,
                time2,
                imgTime1,
                imgTime2,
                golsTime1,
                golsTime2,
                vencedor,
                comida: comida.nomeComida,
                imgComida: comida.imagemComida
            }

            apostas.push(aposta);
        }
    });

    return apostas;
};

const listarTodasApostas = async () => {
    return await db.exibirTodasApostas();
}

export {
    listarApostas,
    listarTodasApostas
}