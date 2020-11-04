function exibirNumerosPrimos(limite){
    for(let i=2; i<=limite; i++){
        let primo = true
        
        for (let divisor = 2; divisor < i; divisor++) {
            if (i % divisor === 0) {
                primo = false
                break
            }
        }
        if (primo) console.log(i)
    }
}