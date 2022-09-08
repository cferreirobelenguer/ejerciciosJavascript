const definirSecuencia=require('./mostrarSecuencia')

test("Verificar que la función existe",()=>{
    expect(definirSecuencia(100)).toBeDefined()
})

test("num no es 0 o null y se devuelve lista",()=>{
    //Si no es false está devolviendo una lista
    expect(definirSecuencia(120)).not.toBe(false)
})

test("num es 0 o null y se devuelve false",()=>{
    expect(definirSecuencia(null)).toBe(false)
})