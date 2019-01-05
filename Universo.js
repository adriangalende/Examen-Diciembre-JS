
const universo = {
    length:0,
    crearDimension: function(nombreDimension, dimension){
        if(dimension == null){
            dimension = [];
        }
        universo[nombreDimension] = dimension;
        this.length++;
    }
}

universo.moverEntreUniversos = function (origen, destino, noPasa){
    var universoAux = [];
    for(personajeIdx in universo[origen]){
        let personaje = universo[origen][personajeIdx];
        if(personaje !== noPasa){
            universo[destino].push(personaje);
            universoAux.push(personaje);
        }
    }

    for(personaje in universoAux){
        universo[origen].splice(universo[origen].indexOf(personaje), 1);
    }

}

module.exports = {
    universo:universo
};