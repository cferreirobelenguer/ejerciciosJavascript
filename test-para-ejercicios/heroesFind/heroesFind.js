/* 
Hacer los siguientes test de estas dos funciones que la primera
realiza una búsqueda por id del objeto literal heroes, y la segunda 
filtra los datos de heroes que tenga el owner pasado por parámetro.
Se pide:
    - Hacer test que verifique que el objeto que se devuelve pasando como id 3 en la primera función 
    es el correcto
    - Hacer test que verifique que el objeto que se devuelve pasando como id 3 en la primera función 
    es de tipo Object
    - Hacer test que verifique que el array que se devuelve pasando como parámetro owner DC en la 
    segunda función es de tipo Object
    - Hacer test que verifique que el array que se devuelve pasando como parámetro owner DC en la 
    segunda función tiene una longitud de 3
    - Hacer test que verifique que el array que se devuelve pasando como parámetro owner Marvel en la 
    segunda función es el correcto
    - Hacer test que verifique que el array que se devuelve pasando como parámetro owner Marvel en la 
    segunda función tiene una longitud de 2 */

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
const getHeroesById=(id)=>{
    return heroes.find((heroe)=>heroe.id===id)
}
    
const getHeroesByOwner=(owner)=>{
    return heroes.filter((heroe)=>heroe.owner===owner)
}
    

//console.log(getHeroesById(3))
//console.log(getHeroesByOwner("DC"))
module.exports.getHeroesById=getHeroesById
module.exports.getHeroesByOwner=getHeroesByOwner
