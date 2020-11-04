function verVeloc (velocidade) {

	if (velocidade <= 70) {
		console.log('ok')
	}else{
	let ponto = Math.floor(((velocidade - 70) /5))
		if (ponto >= 12) {
		console.log('Carteira suspensa')
	}
	else 
		console.log('pontos', ponto)
	}
}