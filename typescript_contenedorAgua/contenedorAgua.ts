
/*Enunciado: Dado un array de números enteros positivos, donde cada uno representa unidades
de bloques apilados, debemos calcular cuantas unidades de agua quedarán atrapadas entre ellos.

- Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
         ⏹
         ⏹
   ⏹💧💧⏹
   ⏹💧⏹⏹💧⏹
   ⏹💧⏹⏹💧⏹
   ⏹💧⏹⏹⏹⏹
  Representando bloque con ⏹︎ y agua con 💧
    
  */

function contenedorAgua(lista:number[]):number{
    let agua:number=0
    let limite:number=6
    let limiteBloques:number=0
    let pasaLimite:boolean=false

    for(let i:number=0;i<lista.length;i++){
        if(pasaLimite===false){
            //pasaLimite=false
            if(lista[i]<limite){
                //en caso de que el valor del bloque sea superior al limite que es 6  limiteBLoques coge el valor del bloque
                if(lista[i]>limiteBloques){
                    limiteBloques=lista[i]
                }
                let resto:number=limiteBloques-lista[i]
                agua+=resto
                console.log(resto)
                
            }
            else if(lista[i]>=limite){
                //en caso de que el valor del bloque sea superior o igual al limite que es 6
                if(lista[i]===limite){
                    //en caso de que el bloque sea igual al límite el límite de bloques es 6 también no hay resto
                    //y no se contabiliza agua porque está llegando al límite
                    //y se pasa a true el booleano pasaLimite
                    let limiteBloquesTemporal:number=limite
                    let resto:number=limiteBloquesTemporal-lista[i]
                    agua+=resto
                    console.log(resto)
                    pasaLimite=true
                } 
                
            }
        }else{
            //pasaLimite=true
            //cuando pasa el límite limiteBloques pasa a 0 y coge el límite del valor de la siguiente iteración
            limiteBloques=0
            if(lista[i+1]>0){
                let limiteBloquesTemporal:number=lista[i+1]
                let resto:number=limiteBloquesTemporal-lista[i]
                    agua+=resto
                    console.log(resto)
            }
            pasaLimite=false
            //se vuelve a pasaLimite false para que continúe el flujo
        }
    }
    return agua
    

}

console.log(contenedorAgua([3, 2, 2, 4, 1, 6]))