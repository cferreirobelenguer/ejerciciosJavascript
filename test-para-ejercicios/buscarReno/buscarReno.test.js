const missingReindeer=require("./buscarReno")

test("La función existe",()=>{
    expect(missingReindeer([0,1,2,3])).toBeDefined()
})

test("lista no retorna valor y función devuelve false",()=>{
    expect(missingReindeer([])).toEqual(false)
})

test("lista retorna valor y no falta último reno",()=>{
    expect(missingReindeer([0,1,2,3,5,6])).toBe("El reno que falta es: 4")
})

test("lista retorna valor y falta último reno",()=>{
    expect(missingReindeer([0,1,2,3])).toBe("El reno que falta es el último: 4")
})

