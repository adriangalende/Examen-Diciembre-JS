

const jerry = {
    id:"Jerry",
    monedas: ["R2-D2","","",""],
    speak: function(){
        return("Tengo una colección de monedas antiguas raras!");
    }
}


function singletonJerry() {
    return {
        get: function () {
            return jerry;
        }
    };
}

exports.singleJerry = function () {
    return singletonJerry();
};