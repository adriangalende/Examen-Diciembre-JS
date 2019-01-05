
const universo = {
    length:0
}

universo.moverEntreUniveros = function (origen, destino, personaje){
    Universo[origen].delete(personaje);
    Universo[destino].push(personaje);
}

module.exports = {
    universo:universo
};