let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 9999999}
]

function criaFaixaPreco(tooltip,minimo,maximo){//cria um construtor usando a funcao
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criaFaixaPreco('a',1,1000),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,1000000)
]

console.log(faixas)
console.log(faixa2)