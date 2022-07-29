// Funciones
/* function sumar(a, b) {
	return a + b;
}

function dividir(a, b) {
	return a / b;
}

// Total dia del amigo
let total = parseFloat(prompt("Monto a pagar"));

while (total <= 0) {
	alert("Ingresar total a pagar");
	total = parseFloat(prompt("Monto a pagar"));
}

let propinaMozo = parseFloat(prompt("Cuanto le dejamos de propina"));

while (propinaMozo <= 0) {
	alert("Ingresar monto de propina");
	propinaMozo = parseFloat(prompt("Ingresar monto de propina"));
}

let nroAmigos = prompt("Cuantos amigos son?");

while (nroAmigos <= 0) {
	alert("Ingresa cuantos amigos son");
	nroAmigos = parseFloat(prompt("Ingresa la cantidad de amigos de la mesa"));
}

let totalMesa = sumar(total, propinaMozo);
let totalSinPropina = dividir(total, nroAmigos);
let totalConPropina = dividir(totalMesa, nroAmigos);

alert("El valor total sin propina es $" + totalSinPropina + " cada uno.");
alert("El valor total es $" + totalConPropina + " cada uno, propina includa.");
 */

/* class amigo {
  constructor (nombre, consumo){
    this.nombre = nombre;
    this.consumo = consumo;
  }
}

const amigo1 = new amigo ['Brian Schmid',1000];
const amigo2 = new amigo ['Pedro Saez',1200];
const amigo3 = new amigo ['Pablo Martinez',800];
const amigo4 = new amigo ['Valentin Gomez',1300]; */


//2DO DESAFIO - AGREGAR ARRAYS

function Amigo (nombre, consumoIndividual){
	this.nombre = nombre;
	this.consumoIndividual = consumoIndividual;

}

let pedro = new Amigo('Pedro',1000);
console.log(pedro)
let brian = new Amigo('Brian',1200);
console.log(brian)
let pablo = new Amigo('Pablo',1500);
console.log(pablo)
let valentin = new Amigo('Valentin',1100)
console.log(valentin)

//const grupoAmigos = ['Pedro', 1000,'Brian', 1200, 'Pablo', 1500, 'Valentin', 1100]

// PARA ESTE ARRAY UTILICE METODO PUSH y LENGTH

//grupoAmigos.push('Agustin', 1400);
//console.log(grupoAmigos.length);



const amigos = [
	{nombre: 'Pedro', consumoIndividual: 1000 },
	{nombre: 'Brian', consumoIndividual: 1200 },
	{nombre: 'Pablo', consumoIndividual: 1500 },
    {nombre: 'Valentin',consumoIndividual: 1100}
]

//UTILICE EL METODO REDUCE

let gastoTotal = amigos.reduce(
	(total, persona) => total + persona.consumoIndividual, 0)
console.log("El total a pagar es: $"+ gastoTotal)



//UTILICE EL METODO FIND
/* const resultado = amigos.find((el) => el.nombre === "Pedro")
const resultado2 = amigos.find ((el) => el.nombre === "Pablo")
console.log(resultado)
console.log(resultado2) */

/* const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
  */