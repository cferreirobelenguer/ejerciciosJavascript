const gestionarRepes=require("./gestionarDuplicados")

test("La función existe",()=>{
    expect(gestionarRepes(["photo","postcard","photo","photo","movil","video","video"])).toBeDefined()
})

test("En caso de que la función esté vacía que devuelva false",()=>{
    expect(gestionarRepes([])).toBe(false)
})

test("Si la lista está llena que devuelva el resultado correcto",()=>{
    expect(gestionarRepes(["photo","postcard","photo","photo","movil","video","video"])).toEqual(["photo","postcard","photo(1)","photo(2)","movil","video","video(1)"])
})

