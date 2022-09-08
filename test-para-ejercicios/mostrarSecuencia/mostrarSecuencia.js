/*Dado un número mostrar todos los números desde ese al 0 de 8 en 8
en una lista con guiones donde cada número debe empezar por nª*/

const definirSecuencia=(num)=>{
    let lista=[]
    numeroCero=false
    //Comprobamos que número no es número 0 o nulo
    if((num===0)||(num===null)){
        numeroCero=true
    }else{
    //Si número es mayor a 0 se itera a la inversa de 8 en 8 y se añade a lista
        for (let i=num;i>=0;i-=8){
            lista.push("-nº"+i+"\n")
        }
    }
    
    if(lista.length>0){
        //Si la lista es mayor que 0 se devuelve la lista
        return lista
    }else if(numeroCero===true){
        //En caso de que la lista no exista porque se de un número 0 o null la función devuelve false
        return false
    }
    
}

module.exports=definirSecuencia