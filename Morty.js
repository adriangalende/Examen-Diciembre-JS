/**
 * Clase morty
 * @constructor
 */

function Morty(){
    this.id;
    this.ondas;
    this.partner = null;
    this.habla = "Oohh man!";
}

Morty.prototype.asignarPartner = function(partner){
    if(!this.partner){
        this.partner = partner;
    }
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