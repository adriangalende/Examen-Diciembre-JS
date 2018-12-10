
Universo = {
    length:0
}

Universo.moverEntreUniveros = function (origen, destino, personaje){
    Universo[origen].delete(personaje);
    Universo[destino].push(personaje);
}