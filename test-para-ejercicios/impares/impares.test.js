
const esImpar=require('./impares')

test("La función está definida",()=>{
    //Si devuelve true está definida
    expect(esImpar).toBeDefined()
})

test("Hay impares y devuelve el número",()=>{
    //Si no devuelve false es que hay impares
    expect(esImpar(4,45)).not.toBe(false)
})
test("No hay impares y devuelve false",()=>{
    //Si devuelve false es que no hay impares y son todo pares
    expect(esImpar(2,2)).toBe(false)
})