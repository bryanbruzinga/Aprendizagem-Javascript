const filme = {
    titulo: 'vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

function exibirPropriedades(obj){
    for (prop in obj)
        if (typeof obj[prop] === 'string') 
            console.log(prop,obj[prop])
}