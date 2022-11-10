/*
En una nueva línea después del código existente,
cambia el valor de la propiedad 'suTurno' para
player1 a true, usando la notación de puntos para
ver este mensaje en consola: "Bob esta jugando ahora!
"
*/
var player1 = {
    nombre: 'Bob',
    color: 'Amarillo',
    suTurno: false,
    play: function () {
        if (this.suTurno) {
            console.log("".concat(this.nombre, " esta jugando ahora!"));
        }
    }
};
var player2 = {
    nombre: 'Patricio',
    color: 'Rosa',
    suTurno: false,
    play: function () {
        if (this.suTurno) {
            console.log("".concat(this.nombre, " esta jugando ahora!"));
        }
    }
};
player1.suTurno = true;
player1.play();
player2.play();
