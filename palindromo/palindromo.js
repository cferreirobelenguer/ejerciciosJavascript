/*Los palindromos son palabras que se leen igual aun
estando a la inversa. Decir si una palabra es palíndromo o no*/

const esPalindromo=(palabra)=>{
    let palabraInversa=""
    //Se palabra la cadena a arreglo y se le da la vuelta
    let separarCadena=palabra.split("")
    let inversa=separarCadena.reverse()
    //Se recorre y se concatena a string
    for(i of inversa){
        palabraInversa+=i
    }
    //Se compara con palabra
    //Devuelve true si es palindromo y false si no lo es
    if(palabra==palabraInversa){
        return true
    }else{
        return false
    }

}
console.log(esPalindrono("ana"))
console.log(esPalindrono("victor"))