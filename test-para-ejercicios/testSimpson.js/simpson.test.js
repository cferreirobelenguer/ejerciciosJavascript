const info=require('./simpson')

describe("Verificar petición asíncrona",()=>{
    test("Verificar que la url es string",()=>{
        const url="https://thesimpsonsquoteapi.glitch.me/quotes"
        const infoDato=info(url)
        expect(typeof(url)).toBe("string")
    }),
    test("Verificar que el dato que se devuelve es de tipo object si url es válido",()=>{
        const url="https://thesimpsonsquoteapi.glitch.me/quotes"
        const infoDato=info(url)
        expect(typeof(infoDato)).toEqual("object")
    })

})