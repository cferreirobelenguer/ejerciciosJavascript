/*
En una nueva línea después del código existente, 
cambia el valor de la propiedad 'suTurno' para 
player1 a true, usando la notación de puntos para 
ver este mensaje en consola: "Bob esta jugando ahora!
"
*/

interface play1{
    nombre:string,
    color:string,
    suTurno:boolean,
    play:Function
}

interface play2{
    nombre:string,
    color:string,
    suTurno:boolean,
    play:Function
}

const player1:play1 = {
    nombre: 'Bob',
    color: 'Amarillo',
    suTurno: false,
    play: function(){
        if (this.suTurno) {
            console.log(`${this.nombre} esta jugando ahora!`);
        }
    }
}


const player2:play2 = {
    nombre: 'Patricio',
    color: 'Rosa',
    suTurno: false,
    play: function(){
        if (this.suTurno) {
            console.log(`${this.nombre} esta jugando ahora!`);
        }
    }
}
player1.suTurno=true
player1.play()
player2.play()
