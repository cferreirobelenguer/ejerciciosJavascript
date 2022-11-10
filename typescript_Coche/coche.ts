/*
Crear una interfaz Vehiculo de la cual heredan VehiculoTerrestre y VehiculoMaritimo
Vehiculo tiene un atributo fabricante y tres métodos:
    . arrancarMotor
    . repostar
    . detenerMotor
VehiculoTerrestre tiene un método específico que es conducir
VehiculoMaritulo tiene tres métodods:
    . sonarSirena
    . encenderChimenea
    . detenerChimenea

Crear un método procesarTerrestre que llame a los métodos de la clase VehiculoTerrestre
Crear un método procesarMaritimo que llame a los métodos de la clase VehículoMarítimo
*/


type Vehiculo={
    fabricante:string,
    arrancarMotor():void,
    repostar():void,
    detenerMotor():void
}

type VehiculoTerrestre= Vehiculo & {
    conducir():void
}
interface VehiculoMaritimo extends Vehiculo{
    sonarSirena():void,
    encenderChimenea():void,
    detenerChimenea():void
}

class OpelCorsa implements VehiculoTerrestre{
    fabricante:string="Opel"
    conducir():void{
        console.log("Se está conduciendo el auto")
    }
    arrancarMotor(): void {
        console.log("El motor se ha arrancado")
    }
    repostar(): void {
        console.log("Echando 20 € de gasolina")
    }
    detenerMotor(): void {
        console.log("Se ha deternido el motor")
    }
}

class Titanic implements VehiculoMaritimo{
    fabricante:string="Barcos S.L"
    sonarSirena():void{
        console.log("La sirena suena")
    }
    encenderChimenea(): void {
        console.log("Se ha encendido la chimenea")
    }
    detenerChimenea(): void {
        console.log("Se ha detenido la chimenea")
    }
    arrancarMotor(): void {
        console.log("El motor se ha arrancado")
    }
    repostar(): void {
        console.log("Echando 100 € de gasolina")
    }
    detenerMotor(): void {
        console.log("Se ha deternido el motor")
    }
}

function procesarTerrestre(v:VehiculoTerrestre):void{
    console.log("FABRICANTE: "+v.fabricante)
    v.arrancarMotor()
    v.repostar()
    v.conducir()
    v.detenerMotor()
}
function procesarMaritimo(b:VehiculoMaritimo):void{
    console.log("FABRICANTE: "+b.fabricante)
    b.arrancarMotor()
    b.encenderChimenea()
    b.detenerChimenea
    b.repostar()
}
const cocheOpel=new OpelCorsa()
const barcoTitanic=new Titanic()
procesarTerrestre(cocheOpel)
procesarMaritimo(barcoTitanic)