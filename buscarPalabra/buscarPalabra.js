/*Dada una palabra, buscarla en una frase y devolver cuántas veces aparece la frase,
la frase y la palabra deben ser parámetros de una función.
Ejemplos:
coincidencias("hola soy una palabra en una frase, PALABRA", "palabra") Devuelve 2
coincidencias("Soy la frase","victor") //Devuelve 0 */

const coincidencias=(frase,palabra)=>{
    let lista=[]
    
    //
    lista=frase.split(" ")
    if(lista.includes(palabra)){
        //Creamos un mapa para ir contando las veces que se repite la palabra
        let listaNueva={}
        for(let i of lista){
            if(listaNueva[i]){
                //Si la palabra se repite aumenta el contador
                listaNueva[i]++
            }else{
                //Si la palabra no se repite se pone 1 en el mapa
                listaNueva[i]=1
            }
            
        }
        return listaNueva[palabra]
    }else{
        //Retorna false si la lista no tiene la palabra que se busca
        return false
    }
    
        
    }


console.log(coincidencias("hola mundo hola estoy hola programando hola","hola"))