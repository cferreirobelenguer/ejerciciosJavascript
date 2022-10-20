/* Hacer el algoritmo de cifrado Cesar y/o ROT13.

En la antigüedad no existía la encriptación ni el cifrado
de mensajes como los conocemos en la actualidad. 
Una de las primeras ideas que tuvieron para ocultar mensajes 
fue reemplazar las letras de cada palabra por otras letras, 
entonces sólo el receptor del mensaje sabía qué letra iba en 
lugar de cada otra y de esa manera entendía el mensaje que le 
fue enviado. Hagamos esto mismo pero con código.
*/

const generarCifrado=(palabra)=>{
    var nuevaPalabra=[]
    palabra=palabra.toString().toLowerCase()
    var abecedario={a:"n",b:"o",c:"p",d:"q",e:"r",f:"s",g:"t",h:"u",i:"v",j:"w",k:"x",l:"y",m:"z",n:"a",o:"b",p:"c",q:"d",r:"e",s:"f",t:"g",u:"h",v:"i",w:"j",x:"k",y:"l",z:"m"}
    let claves = Object.keys(abecedario);
    for(let i of palabra){
        for(let j of claves){
            if(i===j){
                nuevaPalabra.push(abecedario[j])
            }
        }
    }
    console.log(nuevaPalabra)
}
generarCifrado("Clara")
