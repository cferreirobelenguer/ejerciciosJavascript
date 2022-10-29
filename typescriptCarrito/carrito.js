//Crear tres artículos
//Crear una función que cree un carrito con artículos repes y calcule su importe total a pagar
var article_tshirt = {
    id: 1,
    name: "t-shirt",
    price: 12.90
};
var article_coat = {
    id: 2,
    name: "coat",
    price: 29.90
};
var article_trousers = {
    id: 3,
    name: "trousers",
    price: 25.90
};
function miCart(article_tshirt, article_coat, article_trousers) {
    var myElection = {
        id: 6,
        articles: [article_coat, article_tshirt, article_tshirt, article_trousers],
        total: 0
    };
    var suma = 0;
    for (var _i = 0, _a = myElection.articles; _i < _a.length; _i++) {
        var i = _a[_i];
        suma += i.price;
    }
    myElection.total = suma;
    return myElection.total;
}
console.log(miCart(article_tshirt, article_coat, article_trousers));
