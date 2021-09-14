const containerButtons = document.getElementById('containerButtons')
const input = document.getElementById('resultado')


let buttonsArray = [...containerButtons.children]

buttonsArray[3].addEventListener('click', () => {
	resultado.value = '';
})



buttonsArray.forEach(b => {
	b.addEventListener('click', () => {
		let signo = b.innerHTML;
		if (b != buttonsArray[3] & b != buttonsArray[18]) {
			resultado.value = resultado.value + signo;
		}
	})
})

buttonsArray[18].addEventListener('click', () => {
	const esIgual = parseFloat(resultado.value);
	resultado.value = esIgual;
	console.log(esIgual);
})

// hacer un array con todos los numeros que se van sumando
// y despues buscar un metodo para que este array se resuelva