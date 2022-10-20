
/*Pasar de celsius a fahrenheit o a la inversa
en función de la entrada que reciba el programa.
El programa siempre debe recibir C° o F°; en caso contrario da error*/

const cambiarTemperatura=()=>{
    var temperatura=prompt("Introduce temperatura para calcular")
    var celsius=false;
    var fahrenheit=false;
    var indiceCelsius=0;
    var tieneGrado=false;
    var indiceFahrenheit=0;
    var numero=0;
    var total=0;
    
    //Con esto sabemos si tenemos que iniciar el cambio de celsius a fahrenheit o a la inversa,
    //y el índice donce está C,° y F
    for(let i in temperatura){
        if(temperatura[i]==="C"){
            celsius=true;
            indiceCelsius=i;
        }else if(temperatura[i]==="F"){
            fahrenheit=true;
            indiceFahrenheit=i;
        }else if(temperatura[i]==="°"){
            tieneGrado=true;
        }
    }
    //Se produce error si no contiene C° o F°
    if((celsius===false)&&(fahrenheit===false)&&(tieneGrado===false)){
        return "Error"
    }else if((celsius===true)&&(fahrenheit===false)&&(tieneGrado===false)){
        return "Error"
    }else if((celsius===false)&&(fahrenheit===true)&&(tieneGrado===false)){
        return "Error"
    }else{
        //cambia la temperatura en función si es celsius o fahrenheit y contenga C° o F°
        if(indiceCelsius){
            numero=parseInt(temperatura.substring(0,indiceCelsius))
            total=(numero*9/5)+32
            return total+"F°"
        }else if(indiceFahrenheit){
            numero=parseInt(temperatura.substring(0,indiceFahrenheit))
            total=(numero-32)*5/9
            return total+"C°"
        }
    }
    
    
} 

console.log(cambiarTemperatura())

