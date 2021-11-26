const containerButtons = document.getElementById('containerButtons')
const input = document.getElementById('resultado')


let buttonsArray = [...containerButtons.children]
// lectura del boton AC

buttonsArray[3].addEventListener('click', () => {
	resultado.value = '';
	esIgual = '';
	num1 = '';
	num2 = '';
	numb = 0;
	objNumero1 = "";
	objNumero2 = "";
})

let operacion;
let num1 = "";
let objNumero1 = "";
let num2 = "";
let objNumero2 = "";
let numscreen;
let esIgual;
let numb = 0;
let numb2 = 0;

// lectura de numeros y signos menos "=" y "AC"
buttonsArray.forEach(b => {
	b.addEventListener('click', () => {
		const signo = b.innerHTML;
		//condicional "global"
		if (b != buttonsArray[3] & b != buttonsArray[18]) {
			resultado.value = resultado.value + signo;
			//condicion para separar el primer termino
			if ((b != buttonsArray[3] & b != buttonsArray[18]) & numb == 0) {

				if ((b == buttonsArray[4] | b == buttonsArray[5] | b == buttonsArray[6] | b == buttonsArray[8] | b == buttonsArray[9] | b == buttonsArray[10] | b == buttonsArray[12] | b == buttonsArray[13] | b == buttonsArray[14] | b == buttonsArray[16] | b == buttonsArray[17]) & numb == 0) {
					num1 = num1 + signo;
					objNumero1  = new Number(num1);
					numb2 = 0;
				}
				//condicion para detectar operacion
				if ((b == buttonsArray[7] | b == buttonsArray[11] | b == buttonsArray[15] | b == buttonsArray[19]) & numb2 == 0) {
					switch (b.innerHTML) {
						case "/":
						operacion = "/";
						break;
						case "*":
						operacion = "*";
						break;
						case "+":
						operacion = "+";
						break;
						case "-":
						operacion = "-";
						break;
					}
					numb = 1;
				}
			}
			if ((b != buttonsArray[3] & b != buttonsArray[18]) & numb == 1) {
				//condicion para detectar segundo termino
				if ((b == buttonsArray[4] | b == buttonsArray[5] | b == buttonsArray[6] | b == buttonsArray[8] | b == buttonsArray[9] | b == buttonsArray[10] | b == buttonsArray[12] | b == buttonsArray[13] | b == buttonsArray[14] | b == buttonsArray[16] | b == buttonsArray[17]) & numb == 1) {
					num2 = num2 + signo;
					objNumero2 = new Number(num2);
					numb2 = 1;
				}
				//condicion para detectar otro termino
				if ((b == buttonsArray[7] | b == buttonsArray[11] | b == buttonsArray[15] | b == buttonsArray[19] | b == buttonsArray[18]) & numb2 == 1) {
					switch (b) {
						case buttonsArray[7]:
							operacion = "/";
							break;
						case buttonsArray[11]:
							operacion = "*";
							break;
						case buttonsArray[15]:
							operacion = "+";
							break;
						case buttonsArray[19]:
							operacion = "-";
							break;
						}
					numb = 0;
					numb2 = 0;
				}
			}
		}
		// condicion para dar el resultado
		if (b == buttonsArray[18]) {
			res(objNumero1, objNumero2, operacion);
		}
	})
})


function res(n1, n2, o) {
		switch (o) {
			case "/":
				if (n2 == 0) {
					esIgual = "error";
				} else esIgual = parseFloat(n1) / parseFloat(n2);
				break;
			case "*":
				esIgual = parseFloat(n1) * parseFloat(n2);
				break;
			case "+":
				esIgual = parseFloat(n1) + parseFloat(n2);
				break;
			case "-":
				esIgual = parseFloat(n1) - parseFloat(n2);
				break;
		}
		resultado.value = esIgual;
		console.log(esIgual);
}

//cosas faltantes: poder operar mas de dos terminos
//y poder operar con solo tocar el boton de borrar y no tener que actualizar
//detectar numeros enteros