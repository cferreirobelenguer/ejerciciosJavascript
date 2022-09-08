/*Dados dos números, devolver cuantos números IMPARES hay entre ellos*/

const esImpar=(num1,num2)=>{
    let par=false
    let impar=false
    let contador=0
    for(let i=num1;i<=num2;i++){
        if(i%2==0){
            par=true
        }else{
            impar=true
            contador++
        }
    }
    if(impar==true){
        //Si hay algún impar en el recuento devuelve el número de impares contados
        return contador
    }else{
        //Si no hay impares devuelve false
        return false
    }

}

module.exports=esImpar