/**
 * Rick
 * @constructor
 */


const rick = {
    id:"C-137",
    ondas: "altas",
    habla: "Es Rick-dículo!"
}


function singletonRick(id, ondas) {
    return {
        get: function () {
            return rick;
        }
    };
}

exports.singleRick = function () {
    return singletonRick();
};