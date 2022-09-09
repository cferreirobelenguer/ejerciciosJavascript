
const esPalindromo=require("./palindromo")

test("Comprobar si la función esPalindromo está definida",()=>{
    //Comprueba si la función existe
    expect(esPalindromo).toBeDefined()
    }
)

test("Que el argumento funcione cuando no es un palindromo",()=>{
    palabra="victor"
    expect(esPalindromo(palabra)).toEqual(false)
})

test("que el argumento funcione, cuando es palindromo",()=>{
    palabra="ana"
    expect(esPalindromo(palabra)).toBe(true)
})