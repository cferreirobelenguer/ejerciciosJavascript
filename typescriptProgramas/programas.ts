/* 
EJERCÍCIO DE DOM Y TYPESCRIPT
Se introducen datos en un input y se meten automáticamente dentro de un listado que se lee
dentro del html en formato lista <li></li>
Utilizar DOM y typescript
*/

var listados:string[]=[]

function calcular():void{
    let datos:string

    datos=(<HTMLInputElement>document.getElementById("programa")).value.toString()
    listados.push(datos)
    console.log(listados)
    let seccionDatos=<HTMLElement>document.querySelector("#listado_datos")
    let lista:string=""
    listados.map(i=>{
        lista+="<li>"+i+"</li>" 
    })

    seccionDatos.innerHTML=lista
    }
