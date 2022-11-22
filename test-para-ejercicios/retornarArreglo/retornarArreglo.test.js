const retornarArreglo=require("./retornarArreglo")

describe("Verificar que retorna un arreglo con un string y un number",()=>{
    test("Verificar que retorna un arreglo con string y number",()=>{
        const [letra,numero]=retornarArreglo()
        expect(letra).toBe("ABC")
        expect(numero).toBe(123)
        expect(typeof(letra)).toBe("string")
        expect(typeof(numero)).toBe("number")
        expect(letra).toStrictEqual(expect.any(String))
    })
})