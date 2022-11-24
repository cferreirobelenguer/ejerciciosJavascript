/* Hacer una petición asíncrona en la api de github
    - Se pide buscar el id 109515496
    - Imprimir los resultados en la web por medio de dom*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var verFollowers = function () { return __awaiter(_this, void 0, void 0, function () {
    var url, res, data, datosTotales, login, node_id, avatar_url, elemento1, titulo, elemento2, titulo2, elemento3, imagen;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://api.github.com/users/cferreirobelenguer/followers";
                return [4 /*yield*/, fetch(url)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                datosTotales = {
                    login: "",
                    node_id: "",
                    avatar_url: ""
                };
                data.map(function (i) {
                    //Si se encuentra el id se encuentra
                    if (i.id === 109515496) {
                        datosTotales = {
                            login: i.login,
                            node_id: i.node_id,
                            avatar_url: i.avatar_url
                        };
                    }
                });
                login = datosTotales.login, node_id = datosTotales.node_id, avatar_url = datosTotales.avatar_url;
                elemento1 = document.getElementById("seccion1");
                titulo = document.createElement('h1');
                titulo.textContent = login;
                elemento1 === null || elemento1 === void 0 ? void 0 : elemento1.appendChild(titulo);
                elemento2 = document.getElementById("seccion2");
                titulo2 = document.createElement('h1');
                titulo2.textContent = node_id;
                elemento2 === null || elemento2 === void 0 ? void 0 : elemento2.appendChild(titulo2);
                elemento3 = document.getElementById("seccion3");
                imagen = document.createElement("img");
                imagen.src = avatar_url;
                imagen.alt = "";
                imagen.width = 300;
                imagen.height = 300;
                elemento3 === null || elemento3 === void 0 ? void 0 : elemento3.appendChild(imagen);
                return [2 /*return*/];
        }
    });
}); };
verFollowers();
