//Función que retorna objeto, se pide hacer test que verifique que retorna objeto
// y que el surname que retorna es el nombre que le pasa por parámetro en la función

const getUsuarioActivo=(nombre)=>{
    return({
        uid:"ABC567",
        username:nombre
    })
}
module.exports=getUsuarioActivo