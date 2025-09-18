function criaObjeto(data: string) {
    const partes = data.split("/");
    return {      
        dia: partes[0],
        mes: partes[1],
        ano: partes[2] 
    };
}
module.exports = criaObjeto;