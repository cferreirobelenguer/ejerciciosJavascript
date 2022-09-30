
/*
ApiGatos

Consulta la api de gatos catfact https://catfact.ninja/ de la siguiente manera:

Primero consulta la api de manera que genere de manera random información de gatos, mediante setTimeOut que se imprima cada 5 segundos
Segundo el usuario introduce mediante prompt una raza y se muestra la información de esta mediante console.log, que haga esta búsqueda
hasta que el usuario escriba salir. Javascript es sensible a mayúsculas con lo cual el programa debe ser válido tanto para salir como para SALIR.
Hacer el ejercicio con funciones asíncronas.

*/

//Genera una información de gatos cada 5 segundos y la muestra por console.log
const generarRandom=()=>{
    setInterval(()=>{
        fetch("https://catfact.ninja/fact")
        .then(res=>res.json())
        .then(data=>console.log(data.fact))
    },5000)
}

//Usuario introduce raza y si se encuentra la raza se muestra, en caso contrario se muestra mensaje de dato no introducido
async function buscarRaza(){
    
    let resultado=""
        while(resultado!="salir"){
            resultado=prompt("Por favor introduce una raza")
            if((resultado==="SALIR")){
                resultado=resultado.toLowerCase()
            }else{
                encontrado=false
                await fetch("https://catfact.ninja/breeds")
                    .then(res=>res.json())
                    .then(datos=>datos.data.map((item) => {
                        if(resultado===item.breed){
                            encontrado=true
                            console.log("Datos sobre la raza solicitada...")
                            console.log("Bread: "+item.breed)
                            console.log("Country: "+item.country)
                            console.log("Origen: "+item.origin)
                            console.log("Coat: "+item.coat)
                            console.log("Pattern: "+item.pattern)
                        }
                    }))
                if(encontrado===false){
                    console.log("El dato no ha sido encontrado")
                }
            }
            
        } 
    }
    
generarRandom()
buscarRaza()