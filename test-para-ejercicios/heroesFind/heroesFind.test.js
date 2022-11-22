const getId=require('./heroesFind')
const getOwner=require('./heroesFind')

describe("Verificar que retorna el valor específico en función del id y el owner pasados por parámetro en las funciones ",()=>{
    test("Verificar que retorna el objeto pedido según el id",()=>{
        //Verificar que el resultado que da según el id que sea 3 es el correcto
        const heroesId=getId.getHeroesById(3)
        expect(heroesId).toEqual({
            id:3,
            name:"Superman",
            owner:"DC"
        })
        //Verificar que el resultado es de tipo object
        expect(typeof(heroesId)).toEqual("object")
    }),
    
    test("Verificar que retorna undefined si no existe el id",()=>{
        const heroesId=getId.getHeroesById(100)
        expect(heroesId).toBe(undefined)
        //verifica que es un valor nulo
        expect(heroesId).toBeFalsy()
    }),
    test("Verificar que retorna el array pedido según el owner como DC",()=>{
        const heroesOwner=getOwner.getHeroesByOwner("DC")
        const lista=[{id: 1, name: 'Batman', owner: 'DC'},{id: 3, name:'Superman', owner: 'DC'},{id: 4, name: 'Flash', owner: 'DC'}]
        expect(heroesOwner).toEqual(lista)
        //Verificar que el resultado es de tipo object
        expect(typeof(heroesOwner)).toEqual("object")
    }),
    test("Verificar que el array que retorna es de la misma longitud que lo que se espera con owner DC",()=>{
        const heroesOwner=getOwner.getHeroesByOwner("DC")
        const lista=[{id: 1, name: 'Batman', owner: 'DC'},{id: 3, name:'Superman', owner: 'DC'},{id: 4, name: 'Flash', owner: 'DC'}]
        const longitud=lista.length
        expect(heroesOwner.length).toEqual(longitud)
        
    }),
    test("Verificar el array que retorna es de la misma longitud que lo que se espera con owner Marvel",()=>{
        const heroesOwner=getOwner.getHeroesByOwner("Marvel")
        const lista= [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]
        const longitud=lista.length
        expect(heroesOwner.length).toEqual(longitud)
    
    }),
    test("Verficar que cuando el owner no se encuentra el resultado sea un array vacío",()=>{
        const heroesOwner=getOwner.getHeroesByOwner("jsdhs")
        expect(heroesOwner).toEqual([])
    })
    ,
    test("Verificar que el arreglo que se retorna con owner como parámetro es de tipo object",()=>{
        const heroesOwner=getOwner.getHeroesByOwner("Marvel")
        //Verificar que el resultado es de tipo object
        expect(typeof(heroesOwner)).toEqual("object")
    })

})