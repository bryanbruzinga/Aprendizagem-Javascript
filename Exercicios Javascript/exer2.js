function fizzbuzz (entrada) {
	let a = entrada
	if ((entrada %3 === 0) && (entrada %5 === 0)) {
		return "fizzbuzz"
	}
	if (entrada %3 === 0) {
		return "fizz"
	} if (entrada % 5 === 0) {
		return "buzz"
	} if (typeof entrada !== 'number') {
		return "Não é um número"
	}
	else return entrada
}