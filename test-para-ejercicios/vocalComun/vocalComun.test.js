
//Test unitarios de vocalComun
const vocalComun=require('./vocalComun')

describe("Test de vocalComun",()=>{
    test("Comprobar que el texto que entra por parámetro es string",()=>{
        const texto="hola mundo"
        const resultado=vocalComun(texto)
        expect (typeof(texto)).toBe("string")
    }),
    test("Comprobar que el resultado es que da es de tipo number",()=>{
        const texto="hola mundo"
        const resultado=vocalComun(texto)
        expect (typeof(resultado)).toBe("number")
    }),
    test("Comprobar que el resultado es el correcto cuando hay máximo",()=>{
        const texto="hola mundooo"
        const resultado=vocalComun(texto)
        expect (resultado).toEqual(4)
    }),
    test("Comprobar que el resultado es 0 cuando no hay vocales",()=>{
        const texto="hl mnd"
        const resultado=vocalComun(texto)
        expect (resultado).toEqual(0)
    })
})