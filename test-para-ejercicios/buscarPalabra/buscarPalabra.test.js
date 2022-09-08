
const coincidencias=require('./buscarPalabra')

test("La función existe",()=>{
    //Se verifica que la función está definida
    expect(coincidencias("hola mundo hola","hola")).toBeDefined()
})

test("Palabra no está en la frase",()=>{
    //Se verifica que cuando la palabra no está en la frase devuelva false
    expect(coincidencias("hola mundo hola","pepe")).toBe(false)
})

test("Palabra está en la frase y se devuelve el conteo",()=>{
    //Se verifica que cuando la palabra está en la frase no devuelva false
    expect(coincidencias("hola mundo hola","hola")).not.toBe(false)
})