var moduloUniverso = require('./Universo');

const gun = {
    historial: [],
    disparar: function(dimension){
        this.historial.unshift(dimension);
        moduloUniverso.universo.crearDimension("Fart",null);
    },
    scan:function () {
        for(evento in gun.historial()){
            console.log(gun.historial[evento]);
        }
    }
}


module.exports  = {
    gun: gun
};