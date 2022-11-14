
/*
EJERCÍCIO DE FETCH API Y DOM
Consultar api en GIPHY y escribir los resultados a través del dom
    - Usar async await en la petición
    - Poner un título e imagen de gif a través del dom
*/

const apiKey="ZciR4qtL1TWi0emeTYBkwuOtp7T3Tyb1"

async function consultarAPI(apiKey){
    var url=""
    await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(res=>res.json())
    .then(({data})=>{
        console.log(data.images.original.url)
        url=data.images.original.url
    })
    .catch(console.warn)

    const seccion=document.querySelector('section')
    const title=document.createElement('h1')
    title.textContent=("Prueba de fetch api")
    title.setAttribute('style','text-align:center')
    seccion.appendChild(title)
    const imagen=document.createElement('img')
    imagen.setAttribute('src',url)
    imagen.setAttribute('alt',"")
    imagen.setAttribute('width',"900")
    imagen.setAttribute('heigth',"900")
    seccion.appendChild(imagen)

}
consultarAPI(apiKey)