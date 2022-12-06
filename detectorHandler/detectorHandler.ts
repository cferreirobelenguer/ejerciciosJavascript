/* 
Crear función que sea capaz de detectar y retornar todos los handles 
de un texto usando solamente expresiones regulares:
    - handle usuario: los que comienzan por @
    - handle hashtag: los que comienzan por #
    - handle web: los que comienzan por wwww. ,http://, https://
*/

const enviarPost=(post:string):void=>{
    
    //Pasamos el dato del input a array usando como separador el espacio entre palabras
    let datos:string[]=post.split(" ")
    datos.map(i=>{
        if(i.startsWith('@')){
            return `Se menciona usuario`
        }else if(i.startsWith('#')){
            return `Se menciona hashtag `
        }else if((i.startsWith('www'))||(i.startsWith('http://'))||(i.startsWith('https://'))){
            return `Se menciona web `
        }else{
            return ""
        }
        
    })
}
console.log(enviarPost("#usuario: Recomiendo la web https://programacion.com para aprender lenguajes"))