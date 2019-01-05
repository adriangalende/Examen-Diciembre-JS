var clonar = {
    clona : function (p) {
        if (p == null) throw TypeError();
        if (Object.create)
        return Object.create(p);;
    },
        asignarId : function (id) {
            return "C-"+Math.floor(Math.random() * (1000 - 137) + 137);;
        }
}

exports.clonacion = function () {
    return clonar;
};