var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ovejas = [
    {
        name: "Noa",
        color: "azul"
    },
    {
        name: "Betty",
        color: "azul"
    },
    {
        name: "Pepe",
        color: "rojo"
    },
    {
        name: "ada",
        color: "rojo"
    },
    {
        name: "Nala",
        color: "rojo"
    },
    {
        name: "naia",
        color: "rojo"
    },
    {
        name: "neus",
        color: "rojo"
    },
    {
        name: "arcas",
        color: "rojo"
    },
    {
        name: "neus",
        color: "amarillo"
    },
    {
        name: "Antonia",
        color: "rojo"
    }
];
var contadorOvejas = function (ovejas) {
    var ovejasNew = [];
    ovejas.map(function (_a) {
        var name = _a.name, color = _a.color;
        if (((name.includes("N") || name.includes('n')) && (name.includes('A') || name.includes('a'))) && (color === 'rojo')) {
            var oveja = {
                name: name,
                color: color
            };
            ovejasNew = __spreadArray(__spreadArray([], ovejasNew, true), [oveja], false);
        }
    });
    console.log(ovejasNew);
};
contadorOvejas(ovejas);
