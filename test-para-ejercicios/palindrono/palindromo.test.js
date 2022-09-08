
const esPalindromo=require("./palindromo")

test("Comprobar si la función esPalindromo está definida",()=>{
    expect(esPalindromo).toBeDefined()
    }
)
test("Es un palindromo",()=>{
    expect(esPalindromo("otto")).toEqual(true)
})

test("No es un palindromo",()=>{
    expect(esPalindromo("victor")).toEqual(false)
})