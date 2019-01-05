/**
 * Clase morty
 * @constructor
 */

const morty = {
    id: "earthMorty",
    ondas: "bajas",
    habla:"Oohh man!"
}

morty.asignarPartner=function(partner){
    this.partner = partner;
}

function singletonMorty() {
    return {
        get: function () {
            return morty;
        }
    };
}

exports.singleMorty = function () {
    return singletonMorty();
};