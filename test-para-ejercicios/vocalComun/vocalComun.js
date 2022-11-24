
/* Crea una función que reciba un texto y retorne la vocal que
más veces se repita.
    - Ten cuidado con algunos casos especiales
    - Si no hay vocales podrá devolver vacío*/

    const vocalComun=texto=>{
        text=texto.toLowerCase()
        let vocales={
            a: [...text.matchAll(/a|á|ä/g)].length,
            e: [...text.matchAll(/e|é|ë/g)].length,
            i: [...text.matchAll(/i|í|ï/g)].length,
            o: [...text.matchAll(/o|ó|ö/g)].length,
            u: [...text.matchAll(/u|ú|ü/g)].length
        }
        const {a,e,i,o,u}=vocales
        let max=Math.max(a,e,i,o,u)
        if(max===0){
            return 0
        }else{
            return max
        }
    
    }
    module.exports=vocalComun