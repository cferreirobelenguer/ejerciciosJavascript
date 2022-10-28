/*
Quick Sort
Implementa uno de los algoritmos de ordenación más famosos: 
    el "Quick Sort", creado por C.A.R. Hoare.
    - Entender el funcionamiento de los algoritmos más utilizados de la historia
    nos ayuda a mejorar nuestro conocimiento sobre ingeniería de software.
    Dedícale tiempo a entenderlo, no únicamente a copiar su implementación.

*/

const crearOrdenacion=(lista)=>{
    let primerElemento=lista[0]
    let ultimoElemento=lista[lista.length-1]
    //Elegimos el pivote calculando la media entre el primer y el último elemento de la lista
    let media=(primerElemento+ultimoElemento)/2
    console.log(media)
    //l2 va a contener la media que es el pivote
    let l2=[]
    l2.push(media)
    //l1 va a contener los elementos menores a v excepto v
    let l1=[]
    //l3 va a contener los elementos mayores a v excepto v
    let l3=[]
    lista.map(function(i){
        if(i<media){
            l1.push(i)
        }else if(i>media){
            l3.push(i)
        }
    })
    console.log(l1)
    console.log(l3)


}

crearOrdenacion([8,4,9,3,5,7,1,6,2])