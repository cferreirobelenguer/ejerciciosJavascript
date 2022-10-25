/* Este es un reto especial por Halloween
Deberemos realizar un programa al que le indiquemos si queremos "Truco o Trato"
y una lista de personas con las siguientes propiedades:
- Nombre de la niña o niño
- Edad
- Altura en centímetros

Si las personas han pedido truco, el programa retornará sustos (aleatorios)
siguiendo estos criterios:

- Un susto por cada 2 letras del nombre por persona
- Dos sustos por cada edad que sea un número par
- Tres sustos por cada 100 cm de altura entre todas las personas
- Sustos 🦇🕷👻☠💀🎃

Si las personas han pedido trato, el programa retornará dulces aleatorios
siguiendo los siguientes criterios:
- Un dulce por cada letra de nombre
- Un dulce por cada 3 años cumplidos hasta un mínimo de 10 años por persona
- Dos dulces por cada 50 cm de altura hasta un mínimo de 150 cm por persona
- Dulces: 🥐🧀🥞🍩🍨🍧🍦🍪🎂*/

const halloween=(tipo,persona)=>{
    var sustos=["🦇","🕷","👻","☠","💀","🎃"]
    var dulces=["🥐","🧀","🥞","🍩","🍨","🍧","🍦","🍪","🎂"]
    
    
    switch(tipo){
        case "truco":
            var alturaTotal=0;
            //Un susto por cada dos letras del nombre de la persona
            let valores=Object.values(persona)
            let nombreTotal=""
            for(let i of valores){
                console.log(i.nombre)
                console.log(i.edad)
                console.log(i.altura)
                nombreTotal=i.nombre
                var contador=1;
                for(let i of nombreTotal){
                    
                    if(contador===2){
                        let sustoAleatorio=Math.round(Math.random()*(0,sustos.length-1))
                        console.log("sustos por nombre: "+sustos[sustoAleatorio])
                        contador=1
                        
                    }else{
                        contador++
                        
                    }
                    
                }

                //Si la edad es par un susto
                if(i.edad%2===0){
                    
                    let sustoAleatorio=Math.round(Math.random()*(0,sustos.length-1))
                    console.log("sustos por edad: "+sustos[sustoAleatorio])
                }
                //Por cada 100 cm de altura 3 sustos
                
                
                var altura=i.altura
                var alturaTotal=1;
                
                for(let j=0;j<=altura;j++){
                    
                    if(alturaTotal===100){
                        let sustoAleatorio=Math.round(Math.random()*(0,sustos.length-1))
                        let sustoAleatorio2=Math.round(Math.random()*(0,sustos.length-1))
                        let sustoAleatorio3=Math.round(Math.random()*(0,sustos.length-1))
                        console.log("Susto por altura: "+sustos[sustoAleatorio]+" "+sustos[sustoAleatorio2]+" "+sustos[sustoAleatorio3])
                        alturaTotal=1
                    }else{
                        alturaTotal++
                        
                    }
                }
                    
                
            }
        break;
        case "trato":
            //1 dulce por cada letra del nombre
            let valores2=Object.values(persona)
            for(let i of valores2){
                console.log(i.nombre)
                console.log(i.edad)
                console.log(i.altura)
                for(let j of i.nombre){
                    let dulceAleatorio=Math.round(Math.random()*(0,dulces.length-1))
                    console.log("Dulce por nombre: "+dulces[dulceAleatorio])
                }
                
                //un dulce por cada 3 años cumplidos, siendo 10 el mínimo por persona
                if(i.edad>=10){
                    
                    var edad=i.edad
                    let contador=1
                    for(let i=0;i<=edad-1;i++){
                        
                        if(contador===3){
                            let dulceAleatorio=Math.round(Math.random()*(0,dulces.length-1))
                            console.log("Dulce por edad: "+dulces[dulceAleatorio])
                            contador=1
                        }else{
                            contador++
                            
                        }   
                    }
                }
                //un dulce por cada 50 cm por persona, siendo 150 cm el mínimo
                
                if(i.altura>=150){
                    
                    var altura=i.altura
                    var alturaTotal=1;
                    
                    for(let j=0;j<=altura;j++){
                        
                        if(alturaTotal===50){
                            let dulceAleatorio=Math.round(Math.random()*(0,dulces.length-1))
                            console.log("Dulce por altura: "+dulces[dulceAleatorio])
                            alturaTotal=1
                        }else{
                            alturaTotal++
                            
                        }
                    }
                }
            }
            

        break;
        default:
            console.log("Debe elegir entre truco o trato")
        }

}

halloween("truco",[{nombre:"Fernanda",edad:6,altura:200},{nombre:"Jorge",edad:12,altura:150},{nombre:"Noa",edad:4,altura:110}])