
function Jerry(){
    this.id;
    this.monedas = [];
}

Jerry.prototype.speak = function(){
    var habla = function(){
        return "Tengo una colección de monedas antiguas raras!";
    }
    return habla();
}


function singletonJerry() {

    const prototipo = new Jerry();

    return {
        get: function () {
            return prototipo;
        }
    };
}

exports.singleJerry = function () {
    return singletonJerry();
};