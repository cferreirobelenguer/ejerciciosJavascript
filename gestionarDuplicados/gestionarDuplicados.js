/* Crear una función que al pasarnos un array
de nombres de archivo devolvamos un array con el
mismo número de elementos pero donde los nombres
que se repetían se anexe al final (k) donde k sería
el número de veces que se encontró repetido

Ejemplo:

const files=["photo","postcard","photo","photo","video"]
fixFiles(files)

Devuelve:
["photo","postcard","photo(1)","photo(2)",video]
*/


const gestionarRepes=(lista)=>{
    let listaTotal={};
    if(lista.length>0){
        let resultado = lista.map((f) => {
            if(!(listaTotal.hasOwnProperty(f)==true)){
                listaTotal[f]=1
                return f
            }else{
                let nombre=f+"("+listaTotal[f]+")"
                listaTotal[f]+=1
                return nombre
    
            }
        })
        return resultado
    }else{
        return false
    }
    
    
}
console.log(gestionarRepes(["photo","postcard","photo","photo","video","video"]))