/* Diccionario
El usuario introduce una palabra en inglés en el formulario y el programa
dice su significado, antónimos y sinónimos (estos últimos en caso de que los tenga)
Se usa la API https://dictionaryapi.dev/

*/
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
function dictionary() {
    return __awaiter(this, void 0, void 0, function () {
        var dataWord, definitions, synonyms, antonyms, synomymsWords, antonymsWords, objectLetter, word, _i, dataWord_1, i, _a, antonyms_1, i, _b, synonyms_1, i, seccionInfo;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    definitions = "";
                    synonyms = [];
                    antonyms = [];
                    synomymsWords = "";
                    antonymsWords = "";
                    objectLetter = document.querySelector("#word");
                    word = objectLetter.value.toString();
                    //fetch
                    return [4 /*yield*/, fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
                            .then(function (res) { return res.json(); })
                            .then(function (data) {
                            //definitions:data[0].meanings[0].definitions
                            //antonyms:data[0].meanings[0].antonyms
                            //synomyms:data[0].meanings[0].synonyms
                            dataWord = data[0].meanings;
                        })
                        //all the data
                    ];
                case 1:
                    //fetch
                    _c.sent();
                    //all the data
                    for (_i = 0, dataWord_1 = dataWord; _i < dataWord_1.length; _i++) {
                        i = dataWord_1[_i];
                        //definitions data
                        definitions += i.definitions[0].definition + "\n";
                        synonyms = i.synonyms;
                        antonyms = i.antonyms;
                    }
                    //list of antonyms if length is > 0
                    if (antonyms.length > 0) {
                        for (_a = 0, antonyms_1 = antonyms; _a < antonyms_1.length; _a++) {
                            i = antonyms_1[_a];
                            antonymsWords += i + "\n";
                        }
                    }
                    //list of synonyms if length is > 0
                    if (synonyms.length > 0) {
                        for (_b = 0, synonyms_1 = synonyms; _b < synonyms_1.length; _b++) {
                            i = synonyms_1[_b];
                            synomymsWords += i + "\n";
                        }
                    }
                    seccionInfo = document.querySelector("#seccionInfo");
                    seccionInfo.innerHTML = "ANTÓNIMOS: " + antonymsWords + "<br>SINÓNIMOS: " + synomymsWords + "<br>DEFINICIONES: " + definitions;
                    return [2 /*return*/];
            }
        });
    });
}
