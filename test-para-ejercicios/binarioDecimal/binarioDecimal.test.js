const convertir=require('./binarioDecimal')

test("Verificar que la función existe",()=>{
    expect(convertir(1001000)).toBeDefined()
})

test("Devuelve 0 si longitud es < o igual a 0 ",()=>{
    expect(convertir(0)).toEqual(0)
})
test("Devuelve resultado si longitud es > a 0 ",()=>{
    expect(convertir(100100111)).toEqual(295)
})