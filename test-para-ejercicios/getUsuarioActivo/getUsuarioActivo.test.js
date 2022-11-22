
const getUsuarioActivo=require('./getUsuarioActivo')

describe("Se prueba si función retorna object y si username retorna el nombre pasado por parámetro",()=>{
    test("verificar que retorna object",()=>{
        const nombre="Pepe"
        const test={
            uid:"ABC567",
            username:nombre
        }
        const getUsuarioActivo2=getUsuarioActivo(nombre)
    
    expect(getUsuarioActivo2).toEqual(test)
    })
});