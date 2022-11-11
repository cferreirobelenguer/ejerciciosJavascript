
/* 
Dado el siguiente código:

function getUsuarioActivo(nombre){
    return{
        uid:'ABC567',
        username:nombre
    }
};
const usuarioActivo=getUsuarioActivo('Fernando')
console.log(usuarioActivo)

Cambiar a función Felcha
Tiene que retornar un objeto implícito*/


const getUsuarioActivo=(nombre)=>
    (
    
        {
            uid:'ABC567',
            username:nombre
        }
    )

console.log(getUsuarioActivo('Fernando'))