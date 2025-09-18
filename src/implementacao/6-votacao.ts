function apuraVotacao(votos: Array<number>) {
    let voto1 = 0;
    let voto2 = 0;
    let voto3 = 0;

    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === 1) {
            voto1++;
        } else if (votos[i] === 2) {
            voto2++;
        } else if (votos[i] === 3) {
            voto3++;
        }
    }
    if (voto1 > voto2 && voto1 > voto3) {
        return "Vencedor: 1";
    } else if (voto2 > voto1 && voto2 > voto3) {
        return "Vencedor: 2";
    } else if (voto3 > voto1 && voto3 > voto2) {
        return "Vencedor: 3";
    } else {
        return "Empate";
    }
}
module.exports = apuraVotacao;