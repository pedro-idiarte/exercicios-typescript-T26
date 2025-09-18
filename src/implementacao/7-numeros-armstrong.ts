function numerosArmstrong(numero: number) {
    const numerosString = numero.toString();
    const numerosQuantidade = numerosString.length; 
    let soma = 0;
    
    for (let i = 0; i < numerosQuantidade; i++) {
        const digito = parseInt(numerosString[i]);
        soma += Math.pow(digito, numerosQuantidade);
    }

    if (soma === numero) {
        return "Este eh um numero de Armstrong!";
    } else {
        return "Este nao eh um numero de Armstrong!";
    }
}
module.exports = numerosArmstrong;