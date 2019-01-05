
const universo = {
    length:0,
    crearDimension: function(nombreDimension, dimension){
        universo[nombreDimension] = dimension;
        this.length++;
    }
}

universo.moverEntreUniveros = function (origen, destino, personaje){
    Universo[origen].delete(personaje);
    Universo[destino].push(personaje);
}

module.exports = {
    universo:universo
};