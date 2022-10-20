/* EJERCICIO TAMAGOTCHI

- El tamagotchi tiene tres atributos: hambre (`hunger`), energía (`energy`) y humor (`mood`).
- **La puntuación inicial de cada uno de los atributos es `4` .**
- Cuando el tamagotchi realiza una acción (comer, jugar o dormir), responde mostrando su estado:
    - `:-)` (contento) **cuando el humor está por encima de 8**
    - `(-_-)` (cansado) **cuando la energía esté por debajo de 3**
    - `(-_-) zZZ` (dormido) **cuando la energía llega a 0 o cuando se le ordena dormir.**
    - `ఠ_ఠ` (enfadado) **cuando el humor esté por debajo de 2**
    - `:-|` (normal) **resto de casos**
- Cuando el tamagotchi juega, el hambre y el humor aumentan en un punto, la energía disminuye en un punto.
- Cuando el tamagotchi come, el hambre disminuye 2 puntos, la energía disminuye en 1 punto.
- Cuando el tamagotchi duerme, la energía aumenta dos puntos.


*/
var hambre=0;
var energia=0;
var humor=0;


//Constructor
function Tamagotchi (hambre, energia,humor){
    this.hambre=hambre;
    this.energia=energia;
    this.humor=humor;


/*Cuando el tamagotchi juega, el hambre y el humor aumentan en un punto, la energía disminuye en un punto*/
this.jugar=function(){
    if(this.energia===0){
        console.log("El tamagotchi ya no tiene más energía para seguir jugando")
    }else{
    this.hambre+=1;
    this.humor+=1;
    if(this.energia>0){
        this.energia-=1;
    }else{
        this.energia=0;
    }
    console.log("JUGAR")
    console.log("hambre: "+this.hambre)
    console.log("humor: "+this.humor)
    console.log("energia: "+this.energia)
    
    }
    if(this.energia===0){
        console.log("El tamagotchi está dormido: (-_-) zZZ")
    }else if(this.humor>8){
        console.log("El tamagotchi está contento: :-)")
    }else if(this.energia<3){
        console.log("El tamagotchi está cansado: (-_-)")
    }else if(this.humor<2){
        console.log("El tamagotchi está enfadado: ఠ_ఠ")
    }else{
        console.log("El tamagotchi está en modo normal: :-|")
    }
}
/*Cuando el tamagotchi come, el hambre disminuye 2 puntos, la energía disminuye en 1 punto*/
this.comer=function(){
    if(this.hambre>0){
        this.hambre-=2;
    }else{
        this.hambre=0;
    }

    if(this.energia>0){
        this.energia-=1;
    }else{
        this.energia=0;
    }
    console.log("COMER")
    console.log("hambre: "+this.hambre)
    console.log("humor: "+this.humor)
    console.log("energia: "+this.energia)

    if(this.energia===0){
        console.log("El tamagotchi está dormido: (-_-) zZZ")
    }else if(this.humor>8){
        console.log("El tamagotchi está contento: :-)")
    }else if(this.energia<3){
        console.log("El tamagotchi está cansado: (-_-)")
    }else if(this.humor<2){
        console.log("El tamagotchi está enfadado: ఠ_ఠ")
    }else{
        console.log("El tamagotchi está en modo normal: :-|")
    }
    
}
/*Cuando el tamagotchi duerme, la energía aumenta dos puntos*/
this.dormir=function(){
    this.energia+=2;
    
    console.log("DORMIR")
    console.log("hambre: "+this.hambre)
    console.log("humor: "+this.humor)
    console.log("energia: "+this.energia)
    
    console.log("El tamagotchi está dormido: (-_-) zZZ")
}
}



//Testeamos los resultados creando un objeto y dando valores
//Se inicializan los atributos con valor 4 al iniciar el programa

function testeo (){
    var juguete=new Tamagotchi(4,4,4);
    juguete.jugar()
    juguete.dormir()
    juguete.comer()
    juguete.comer()
    juguete.comer()
    juguete.jugar()
    juguete.jugar()
    juguete.jugar()
    juguete.jugar()
    juguete.jugar()
}

testeo()