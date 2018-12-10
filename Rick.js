/**
 * Rick
 * @constructor
 */


function Rick() {
    this.id;
    this.ondas;
}

Rick.prototype.dispara = function(objeto, destino){
    return destino;
}

Rick.prototype.habla = function(){
    return "Es Rick-dículo!";
}


function singletonRick() {

    const prototipo = new Rick();

    return {
        get: function () {
            return prototipo;
        }
    };
}

exports.singleRick = function () {
    return singletonRick();
};