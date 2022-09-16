const repiteme=require("./repetirPalabra")

test("Verificar que la función existe",()=>{
    expect(repiteme("paula",6)).toBeDefined()
})

test("Devuelve false cuando num es menor que 0",()=>{
    expect(repiteme("paula",0)).toBe(false)
})

test("Devuelve el valor correcto cuando num es mayor que 0",()=>{
    expect(repiteme("paula",3)).toBe("paulapaulapaula")
})