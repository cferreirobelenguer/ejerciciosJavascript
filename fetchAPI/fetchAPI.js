
/*
EJERCÍCIO DE FETCH API Y DOM
Consultar api en GIPHY y escribir los resultados a través del dom
    - Usar async await en la petición
    - Poner un título e imagen de gif a través del dom
*/



const consultarAPI=async()=>{
    try{
        const apiKey="ZciR4qtL1TWi0emeTYBkwuOtp7T3Tyb1"
        const res=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data}=await res.json()
        const {url}=data.images.original
    

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
    }catch(error){
        //manejo del error
    }
    

}
consultarAPI()