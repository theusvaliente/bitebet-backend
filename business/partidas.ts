import * as dbTimes from '../entity/team.db'

export interface Partida {
    idPartida: string,
    dataPartida: string,
    timeCasa: string,
    timeFora: string,
    idTimeCasa: string,
    idTimeFora: string,
    imagemTimeCasa: string,
    imagemTimeFora: string
}

const listarPartidas = async () => {
    const times = await dbTimes.exibirTimes();
    
    const apiURL = "https://api.sportradar.com/soccer/trial/v4/br/seasons/sr%3Aseason%3A113943/schedules?api_key=U84u9njPwk2JwwIjCNIo99tdtw3gA0vV3w1RBqzQ";

    const response = await fetch(apiURL, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'accept': 'application/json'
        }
    });

    const partidas: Partida[] = [];
    const resposa = await response.json();

    resposa.schedules.forEach((partida: any) => {
        const data = new Date(partida.sport_event.start_time);
    
        if (data >= new Date()) {
            const idPartida = partida.sport_event.id;
            const dataPartida = new Date(partida.sport_event.start_time).toLocaleDateString();
            const timeCasa = partida.sport_event.competitors[0].name;
            const timeFora = partida.sport_event.competitors[1].name;

            const idTimeCasa = partida.sport_event.competitors[0].id;
            const idTimeFora = partida.sport_event.competitors[1].id;

            const imagemTimeCasa = times.filter(time => time.idTime === idTimeCasa)[0].imagemTime;
            const imagemTimeFora = times.filter(time => time.idTime === idTimeFora)[0].imagemTime;

            partidas.push({
                idPartida,
                dataPartida,
                timeCasa,
                timeFora,
                idTimeCasa,
                idTimeFora,
                imagemTimeCasa,
                imagemTimeFora
            })
        }
    });

    return partidas;
};

export { listarPartidas }