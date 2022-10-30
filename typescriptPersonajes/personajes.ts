/*
EJERCÍCIO DE TIPADO DE VARIABLES EN TYPESCRIPT
Este código está hecho en JavaScript y hay que pasarlo a TypeScript empleando variables “let” y constantes.
Crear función que retorne el nombre y la edad a través del objeto. Afición es opcional en la función.

El código javaScript sería así:

var nombre;
var aficion="fútbol"
nombre = "Miguelo";
var edad;
edad = 30;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
    aficion:aficion
};*/



interface person{
    nombre:string;
    edad:number;
    aficion?:string
}

let PERSONAJE:person={
    nombre:"Miguelito",
    edad:30,
    aficion:"futbol"
}

function imprimirPersona(PERSONAJE:person,):string{
    if(PERSONAJE.aficion){
        return "NOMBRE: "+PERSONAJE.nombre+"\nEDAD: "+PERSONAJE.edad+"\nAFICION: "+PERSONAJE.aficion
    }else{
        return "NOMBRE: "+PERSONAJE.nombre+"\nEDAD: "+PERSONAJE.edad
    }
}

console.log(imprimirPersona(PERSONAJE))

