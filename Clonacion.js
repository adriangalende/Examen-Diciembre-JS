function Clonar(){
}

Clonar.prototype.clona = function(){
    if (p == null) throw TypeError();
    if (Object.create)
        return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();

    function F() {};
    F.prototype = p;
    return new F();
}

Clonar.prototype.asignarId = function(id){
    return id+5;
}

exports.clonacion = function () {
    return Clonar();
};