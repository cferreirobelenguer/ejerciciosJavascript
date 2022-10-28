
/*crear un objeto usando la api de paises en el que cojamos los siguientes atributos:
nombre
capital
moneda
region
independiente

Imprimir los resultados con console.log*/

//Creamos una interfaz llamada span con los siguientes atributos tipados
interface spain{
    name:string,
    capital:string,
    currencies:string,
    region:string,
    independency:boolean
}

async function sacarDatos(){
    //Sacamos la respuesta de la petición tipándola con any
    let datos:any;
    await fetch("https://restcountries.com/v3.1/name/spain")
    .then(res=>res.json())
    .then(data=>{
        //name:data[0].name.common
        //capital:data[0].capital[0]
        //currency:data[0].currencies.EUR.name
        //region:data[0].region
        //independency:data[0].independent
        
        datos=data[0]
        
    })
    //Creamos un objeto de tipo spain y le asignamos los valores de la petición
    let miCountry:spain={
        name:datos.name.common,
        capital:datos.capital[0],
        currencies:datos.currencies.EUR.name,
        region:datos.region,
        independency:datos.independent
    }
    console.log("PAIS: "+miCountry.name)
    console.log("CAPITAL: "+miCountry.capital)
    console.log("MONEDA: "+miCountry.currencies)
    console.log("REGIÓN: "+miCountry.region)
    console.log("PAÍS INDEPENDIENTE: "+miCountry.independency)
}
sacarDatos()