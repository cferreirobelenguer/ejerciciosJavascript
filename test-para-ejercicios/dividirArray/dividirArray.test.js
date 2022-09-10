
const dividirArray=require('./dividirArray')

//Verifica que la función existe
test("La función existe",()=>{
    let lista=[7,8,9]
    let num=2
    expect(dividirArray(lista,num)).toBeDefined()
})

//Verifica que la lista del argumento existe
test("La lista existe",()=>{
    let lista=[7,8,9]
    let num=2
    expect(dividirArray(lista,num)).not.toBe(false)
})

//Verifica que devuelve false cuando la lista es 0
test("Retorna false cuando la lista es 0",()=>{
    let lista=[]
    let num=2
    expect(dividirArray(lista,num)).toBe(false)
})

//Verifica que retorna resultados correctos
test("Retorna resultados correctos",()=>{
    let lista=[7,8,9,10,5,6]
    let num=3
    expect(dividirArray(lista,num)).toEqual([[7,8,9],[10,5,6]])

})
