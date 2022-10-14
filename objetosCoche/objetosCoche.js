/* Crear un componente Coche. El coche 
tendrá como atributos, el color, marca,
velocidad, matrícula, número de km, un 
estado para ver si está apagado o encendido.
Como acciones tendrá arrancar, acelerar, frenar
y apagar*/


var color="";
var marca="";
var velocidad=0;
var matricula="";
var km=0;
var estado=false;
function Coche(color, marca, matricula,estado){
    this.color=color;
    this.velocidad=velocidad;
    this.marca=marca;
    this.matricula=matricula;
    this.km=km;
    this.estado=estado;

this.arrancar=function(){
    this.estado=true;
    return "Motor encendido"

}
this.acelerar=function(velocidad){
    if(this.estado===true){
        this.velocidad+=velocidad
        return "Acelera, velocidad "+this.velocidad
    }else{
        return "No se puede acelerar, motor apagado"
    }
}
this.frenar=function(velocidad){
    if((this.estado===true)&&(this.velocidad>0)){
        this.velocidad-=velocidad
        return "Frena, velocidad "+this.velocidad
    }else{
        return "No se puede frenar"
    }
}
this.apagar=function(){
    this.estado=false;
    this.velocidad=0;
    return "Motor apagado"

}
}

function testeo (){
    var coche=new Coche("rojo","audi","8373HDF",200,true);
    var valor="";
    console.log("Menú coche")
    console.log("Pulse 1 para arrancar")
    console.log("Pulse 2 para acelerar")
    console.log("Pulse 3 para frenar")
    console.log("Pulse 4 para apagar")

    while(valor!="salir"){
        valor=prompt("Introduce una opción")
        if(valor==="salir"){
            break;
        }else{
        
        
        switch(valor){
            case "1":
                console.log(coche.arrancar())
            break;
            case "2":
                console.log(coche.acelerar(20))
            break;
            case "3":
                console.log(coche.frenar(10))
            break;
            case "4":
                console.log(coche.apagar())
            break;
            default:
                console.log("El dato introducido no es correcto")

                }
            }
        }
    }
testeo()

