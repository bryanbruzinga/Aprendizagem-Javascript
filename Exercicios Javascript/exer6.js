function somar (limite){
    let valor = 0
    for (i=0; i<=limite; i++)
    if (i % 3 ===0 || i % 5 ===0) {
        valor +=i
    }
    console.log(valor)
}