/* Hacer test a peticiones asíncronas, se pide:
    -Comprobar si el dato que se devuelve es de tipo object
    -Comprobar si la url que se pasa por parámetro es de tipo string*/
    
const info=async(url)=>{
    var dato=[]
    var errorData=""
    try{
        const res=await fetch(url)
        const data=await res.json()
        dato=data[0]
        console.log(dato)
    }catch(error){
        errorData="No se encontraron datos"
        console.log(errorData)
    }
    
}
info("https://thesimpsonsquoteapi.glitch.me/quotes")
module.exports=info
