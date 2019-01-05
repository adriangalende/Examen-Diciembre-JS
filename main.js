
/** 
 * Importa los módulos de tus clases 
 */
var Rick = require('./Rick');
var Morty = require('./Morty');
var Jerry = require('./Jerry');
var clonador = require('./Clonacion');
var moduloUniverso = require('./Universo');
var moduloGun = require('./Gun');


/**
 * Crea el objeto Rick
 */

var protoRick = Rick.singleRick("c-137","altas").get();

console.assert(protoRick);
console.assert(protoRick.id == "C-137");
console.assert(protoRick.ondas == "altas");
console.assert(protoRick.habla == "Es Rick-dículo!");

/**
 * Crea el objeto Morty
 */
var protoMorty = Morty.singleMorty().get();
protoMorty.asignarPartner(protoRick);

console.assert(protoMorty);
console.assert(protoMorty.id == "earthMorty");
console.assert(protoMorty.ondas == "bajas");
console.assert(protoMorty.partner == protoRick);
console.assert(protoMorty.habla == "Oohh man!");


/**
 * Crea el objeto Jerry
 */

var jerry = Jerry.singleJerry().get();
jerry.id = "Jerry";


console.assert(jerry);
console.assert(jerry.id = "Jerry");
console.assert(jerry.monedas.length == 4);
console.assert(jerry.monedas[0] == "R2-D2");
console.assert(jerry.speak() == "Tengo una colección de monedas antiguas raras!");

/**
 * Crea 2 Rick-clones y 1 clon de Morty
 * y asocia como partner de ese Morty a uno de los Rick-clones.
 */

var clonRick = clonador.clonacion().clona(protoRick);
clonRick.id = clonador.clonacion().asignarId(clonRick.id);
console.log("La id del clonRick es:" + clonRick.id);

console.assert(clonRick);
console.assert(protoRick != clonRick);
console.assert(Object.getPrototypeOf(clonRick) == protoRick);
console.assert(clonRick.id != "C-137");
console.assert(clonRick.ondas == "altas");
console.assert(clonRick.habla == "Es Rick-dículo!");


var otroRick =  clonador.clonacion().clona(protoRick);
otroRick.id = clonador.clonacion().asignarId(otroRick.id);
console.log("La id del otroRick es:" + otroRick.id);

console.assert(otroRick);
console.assert(protoRick != otroRick);
console.assert(Object.getPrototypeOf(otroRick) == protoRick);
console.assert(otroRick.id != "C-137");
console.assert(otroRick.ondas == "altas");
console.assert(otroRick.habla == "Es Rick-dículo!");


var clonMorty = clonador.clonacion().clona(protoMorty);
clonMorty.id = clonador.clonacion().asignarId(clonMorty.id);
clonMorty.asignarPartner(clonRick);
console.log("La id de clonMorty es: "+clonMorty.id);

console.assert(clonMorty);
console.assert(clonMorty != protoMorty);
console.assert(Object.getPrototypeOf(clonMorty) == protoMorty);
console.assert(clonMorty.ondas == "bajas");
console.assert(clonMorty.partner == clonRick);

/**
 * Crea el objeto universo
 */

var universo = moduloUniverso.universo;
console.assert(universo);
console.assert(Object.getPrototypeOf(universo) != Array.prototype);
console.assert(universo.length == 0);

/**
 * Crea la primera dimensión, el `Array` mundo `Tierra`,
 * mete en él a los 6 objetos que has creado (Rick, Morty y Jerry,
 * 2 rick-clones y 1 clon de Morty) y añádelo al objeto `universo`.
 */

var personajes = [protoRick, protoMorty, jerry, clonRick, clonMorty, otroRick];
let tierra = personajes;
universo.crearDimension("Tierra", tierra);

console.assert(tierra);
console.assert(Object.getPrototypeOf(tierra) == Array.prototype);
console.assert(tierra.length == 6);
console.assert("Tierra" in universo);
console.assert(universo.length == 1);

/**
 * Crea el objeto portal gun / pistola de portales.
 *
 * Dale la pistola al protoRick para que la dispare.
 * Pon a la tierra en el principio del historial de dimensiones de la pistola.
 *
 * Rick dispara la pistola y se añade al universo la dimensión "Fart"
 *  */

var gun = moduloGun.gun;
gun.disparar("Fart");

console.assert(gun);
console.assert(gun.historial.length == 1);

console.assert("Fart" in universo);
console.assert(universo.length == 2);


// /**
//  * Todos SALVO Jerry cruzan a la dimensión "Fart".
//  * Has de eliminarlos del mundo tierra y meterlos en la nueva dimensión "Fart".
//  *
//  * Es necesaria una función cruzarDimension para ser reutilizada posteriormente.
//  * Puedes situarla en aquel componente que estimes más adecuado.
//  *
//  * La pistola añade a su historial "Fart".
//  */
//
//
// Universo.moverEntreUniveros = function (origen, destino, personaje){
//     Universo[destino].push(personaje);
//     Universo[origen] = personajes.slice(personajes.indexOf(personaje),personajes.length);
// }
//
// gun.historial.push(nuevoDestino);
//
// universo.moverEntreUniveros("Tierra","Fart",protoRick);
// universo.moverEntreUniveros("Tierra","Fart",protoMorty);
// universo.moverEntreUniveros("Tierra","Fart",clonRick);
// universo.moverEntreUniveros("Tierra","Fart",clonMorty);
// universo.moverEntreUniveros("Tierra","Fart",otroRick);
//
//
// console.assert(universo["Fart"].length == 5);
// console.assert(universo["Tierra"].length == 1);
// console.assert(gun.historial.length == 2);
//
// /**
//  * Si haces un scan de la pistola, se muestra en consola
//  * la lista de dimensiones, desde la más reciente a la más
//  * antigua: Fart, Tierra.
//  */
//
// console.log(gun.scan());
// console.assert(gun.historial.length == 2);
//
//
// /**
//  * Rick dispara la pistola y se añade al universo la dimensión "Coaches".
//  */
//
// nuevoDestino = protoRick.dispara("pistola","Coach");
//
// universo[nuevoDestino] = new Array();
// universo.length++;
//
// console.assert("Coach" in universo);
// console.assert(universo.length == 3);
//
// /**
//  * Los cuatro cruzan a la dimensión "Coach".
//  *
//  * Has de eliminarlos del mundo "Fart" y meterlos en la nueva dimensión "Coach".
//  *
//  * La pistola añade a su historial "Fart".
//  *
//  * Si haces un scan de la pistola, se muestra en consola
//  * Coaches, Fart, Tierra.
//  */
//
//
// universo.moverEntreUniveros("Fart","Coach",protoRick);
// universo.moverEntreUniveros("Fart","Coach",protoMorty);
// universo.moverEntreUniveros("Fart","Coach",clonRick);
// universo.moverEntreUniveros("Fart","Coach",clonMorty);
// universo.moverEntreUniveros("Fart","Coach",otroRick);

// gun.historial.push("Coach");
//
// console.assert(universo["Coaches"].length == 5);
// console.assert(universo["Fart"].length == 0);
// console.assert(universo["Tierra"].length == 1);
// console.log(gun.scan());
// console.assert(gun.historial.length == 3);



// /**
//  * Crea un Doofus Rick segun se indica en el README
//  */
//
// console.assert(doofous);
// console.assert(doofous.id == "J-19-Z7");
// console.assert(doofous.ondas == "altas");
// console.assert(doufus.monedas.length == 4);
// console.assert(doufous.speak() == "Tengo una colección de monedas antiguas raras!");
