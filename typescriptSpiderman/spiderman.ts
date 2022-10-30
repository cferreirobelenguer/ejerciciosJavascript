/*Crear una interface en TypeScript a partir de este código JavaScript:

var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]

Crear función que imprima todos los datos sin return
};*/

interface spider{
    nombre:string,
    poderes:Array<string>
}
let spiderman={
    nombre:"Peter parket",
    poderes:["trepar","fuerza","agilidad","telas de araña"]
}

function imprimirSpider(spiderman:spider):void{
    console.log("NOMBRE: "+spiderman.nombre)
    console.log("PODERES:")
    for(let i of spiderman.poderes){
        console.log(i)
    }
}

imprimirSpider(spiderman)