
const jugarZelda=require("./juegoZelda")

test("Verificar que la función existe",()=>{
    expect(jugarZelda("07/20/2020","05/11/2004")).toBeDefined()
})
test("Verificar que devuelve el resultado correcto",()=>{

    expect(jugarZelda("07/20/2020","05/11/2004")).toBe("Años: 16.191649555099247\nDías: 5914")

})