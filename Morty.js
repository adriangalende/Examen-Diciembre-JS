/**
 * Clase morty
 * @constructor
 */

function Morty(){
    this.id;
    this.ondas;
    this.partner = null;
}

Morty.prototype.asignarPartner = function(partner){
    if(!this.partner){
        this.partner = partner;
    }
}


Morty.prototype.habla = function(){
    return "Oohh man!";
}

function singletonMorty() {

    const prototipo = new Morty();

    return {
        get: function () {
            return prototipo;
        }
    };
}

exports.singleMorty = function () {
    return singletonMorty();
};