/*ç
DE BINARIO A DECIMAL
Enunciado: Crea un programa se encargue de transformar un número binario
 * a decimal sin utilizar funciones propias del lenguaje que 
 * lo hagan directamente.

*/

const convertir=(num)=>{
    //pasamos el número a cadena
    let numString=num.toString()
    if(numString.length>0){
        //invertimos cadena
        let cadenaNueva=numString.split("").reverse().join("");
        let suma=0
        //recorremos la cadena invertida al revés para que la posición 7 sea la que debería ser la posición 0
        for(let i=cadenaNueva.length-1;i>=0;i--){
        
            console.log("Posicion "+i+" letra "+cadenaNueva[i])
            //Si el valor es 0 se calcula la potencia con la posición y se incrementa la suma
            if(cadenaNueva[i]=='1'){
                let potencia=2**i
                suma+=potencia
            }
        }
        return suma
    }else{
        return 0
    }
    
    
}


module.exports=convertir