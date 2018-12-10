/**
 * Rick
 * @constructor
 */

function Rick() {
    this.id;
    this.ondas;
    this.habla = "Es Rick-dículo!";
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