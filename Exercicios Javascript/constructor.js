function carro(cor, placa, flex, completo) {
    return {
        cor,
        placa,
        flex,
        completo
    }    
}
const carro1 = carro('preto', 'AZM-5510', 'sim', 'sim')
    console.log(carro1)

    const clone = {...carro1} //How to clone objects
    console.log (clone)