/*
Ejercício de objeto literal:
Objeto literal deportista ya definido, que tiene los siguientes atributos: 
nombre, energia, experiencia. Queremos poder pedirle al deportista que entrene. 
Para esto, nuestro trabajo va a ser completar la función entrenarHoras. 
La función entrenarHoras tiene las siguientes tres características: Recibe por 
parámetro la cantidad de horas. Resta a su energía (this.energia) la cantidad de 
horas x 5. Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía 
y experiencia del deportista por consola. */

const Deportista={
    nombre:"Manolo",
    energia:20,
    experiencia:100,
    entrenarHoras:function(horas){
        this.energia+=horas*5
        this.experiencia-=horas*2
    }
}

const main=()=>{
    console.log("NOMBRE: "+Deportista.nombre)
    console.log("ENERGIA: "+Deportista.energia)
    console.log("EXPERIENCIA: "+Deportista.experiencia)
    Deportista.entrenarHoras(5)
    console.log("NOMBRE: "+Deportista.nombre)
    console.log("ENERGIA: "+Deportista.energia)
    console.log("EXPERIENCIA: "+Deportista.experiencia)
    Deportista.entrenarHoras(10)
    console.log("NOMBRE: "+Deportista.nombre)
    console.log("ENERGIA: "+Deportista.energia)
    console.log("EXPERIENCIA: "+Deportista.experiencia)
}
main()