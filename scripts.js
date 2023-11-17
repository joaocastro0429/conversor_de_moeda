let valor_real = 64
let valor_dolar = 5.32

let valor_euro = 5.26

let bitcon = 175727.91
let usuario = "joao castro"


let converter = valor_euro * valor_euro

let convertFormato = converter.toFixed(2)

alert("Olá " + usuario + " seu valor convertido é : R$ " + convertFormato)


// converter em ano luz 

const velocidadeDaLuzEmKmPorSegundo = 299792.458
const distanciaEntreEstrelasEmKm = 4.22e13;

const distanciaEmAnosLuz = distanciaEntreEstrelasEmKm / 9.461e12;

const tempoDeViagemEmSegundos = distanciaEntreEstrelasEmKm / velocidadeDaLuzEmKmPorSegundo;

const tempoDeViagemEmAnos = tempoDeViagemEmSegundos / (60 * 60 * 24 * 365.25); // Considerando ano bissexto


console.log(`A distância entre as estrelas é de aproximadamente ${distanciaEmAnosLuz.toFixed(2)} anos-luz.`);
console.log(`O tempo de viagem necessário é de aproximadamente ${tempoDeViagemEmAnos.toFixed(2)} anos.`);


// transforma temperatura   em fahrenheit 
let fahrenheit = fahrenheit = 10
let celsius = (fahrenheit - 32) * 5 / 9


alert(celsius)


// transforma temperatura em fahrenheit  

let celsius1 = 37

let fahrenheit1 = (celsius1 + 9 / 5) + 32

alert("minha temperatura em celsus é " + fahrenheit1)











