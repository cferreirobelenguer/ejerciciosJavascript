/* Función que devuelve un objeto al que se le pasan por parámetro clave, nombre, edad
y rango que tiene por defecto el valor Capitán.
Se pide hacer test que verifique que retorne objeto con los valores pasados por parámetro */

const returnObject=(clave,nombre,edad,rango="Capitán")=>{
    return{
        nombreClave:clave,
        anios:edad,
        latling:{
            lat:14.1232,
            lng:-12.3232
        }
    }
}
module.exports=returnObject
