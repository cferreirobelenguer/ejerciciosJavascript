//Crear tres artículos
//Crear una función que cree un carrito con artículos repes y calcule su importe total a pagar

interface article{
    id:number,
    name:string,
    price:number
}
interface shoppingCart{
    id:number,
    articles:article[],
    total:number
}

let article_tshirt:article={
    id:1,
    name:"t-shirt",
    price:12.90
}
let article_coat:article={
    id:2,
    name:"coat",
    price:29.90
}
let article_trousers:article={
    id:3,
    name:"trousers",
    price:25.90
}


function miCart(article_tshirt:article,article_coat:article,article_trousers:article):number{
    let myElection:shoppingCart={
        id:6,
        articles:[article_coat,article_tshirt,article_tshirt,article_trousers],
        total:0
    }
    let suma:number=0
    for(let i of myElection.articles){
        suma+=i.price
    }
    myElection.total=suma
    return myElection.total

}

console.log(miCart(article_tshirt,article_coat,article_trousers))