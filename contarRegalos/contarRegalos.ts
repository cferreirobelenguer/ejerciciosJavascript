/*Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

const carta = 'bici coche balón _playstation bici coche peluche'
Al ejecutar el método debería devolver lo siguiente:

const regalos = listGifts(carta)

console.log(regalos)

{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}

Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!*/


const list:string[]=['bici _coche _playstation bici muñeca movil movil']


const listCount=(list:string[])=>{
    let gifts:Map<string,number>=new Map();
    let modifyList:string[]=[]
    list.map(i=>{
        //pasamos la cadena a array usando como separador el espacio
        modifyList=i.split(" ")
    })
    
    for(let i in modifyList){
        let key:string=modifyList[i]
        //Si los juquetes comienzan con _ no se incluyen en el nuevo objeto
        if(key.substring(0,1)!=="_"){
            let key:string=modifyList[i]
            if(!(gifts.has(key))){
            //Si el juguete no está se contabiliza como 1
            gifts.set(modifyList[i],1);
        }else{
            let toy:number|undefined=gifts.get(modifyList[i])
            //Si el juguete está se aumenta el contador
            gifts.set(modifyList[i],toy+1);
            }
        }
        
    }
    return gifts
}

console.log(listCount(list))