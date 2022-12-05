/* Tipar mediante interface la siguiente constante:
const SuperHeroe:SuperHeroeType={
    nombre:"Spiderman",
    edad:30,
    direccion:{
        calle:"Main St",
        pais:"USA",
        ciudad:"NY"
    },
    mostrarDireccion(){
        return this.nombre+", "+this.direccion.ciudad+", "+this.direccion.pais
    }
}

Y llamar al método dentro del objeto tipado
*/

interface SuperHeroeType{
    nombre:string,
    edad:number,
    direccion:Direccion,
    mostrarDireccion:()=>string,
}
interface Direccion{
    calle:string,
    pais:string,
    ciudad:string
}
const SuperHeroe:SuperHeroeType={
    nombre:"Spiderman",
    edad:30,
    direccion:{
        calle:"Main St",
        pais:"USA",
        ciudad:"NY"
    },
    mostrarDireccion(){
        return this.nombre+", "+this.direccion.ciudad+", "+this.direccion.pais
    }
}

const mostrar=(SuperHeroe:SuperHeroeType):string=>{

    return SuperHeroe.mostrarDireccion()
}

console.log(mostrar(SuperHeroe))