
const devuelveObjeto=require('./testObject')

describe("Se prueba si función retorna object",()=>{
    test("Verificar que retorna object",()=>{
    const test={
        name:"Peter",
        surname:"Parker"
    }
    const devuelveObjeto2=devuelveObjeto()
    expect(devuelveObjeto2).toEqual(test)
    })
});