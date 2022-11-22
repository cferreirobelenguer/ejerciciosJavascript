const returnObject=require("./returnObject")

describe("Verificar que retorna object",()=>{
    test("Verificar que retorna object con valores de parámetros",()=>{
        const clave="JSDHSJD"
        const nombre="Pegasus"
        const edad=50
        const returnObject2=returnObject(clave,nombre,edad,rango="Capitán")
        const test={
            nombreClave:clave,
            anios:edad,
            latling:{
                lat:14.1232,
                lng:-12.3232
            }
        }
        expect(returnObject2).toStrictEqual(test)
    })
})