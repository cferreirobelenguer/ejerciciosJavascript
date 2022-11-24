/* Hacer una petición asíncrona en la api de github
    - Se pide buscar el id 109515496
    - Imprimir los resultados en la web por medio de dom*/

const verFollowers=async()=>{
    try{
        //petición asíncrona
        const url:string="https://api.github.com/users/cferreirobelenguer/followers"
        const res=await fetch(url)
        const data:[]=await res.json()
        console.log(data)

        interface datosFollower{
            login:string,
            node_id:string,
            avatar_url:string
        }
        let datosTotales:datosFollower={
            login:"",
            node_id:"",
            avatar_url:""
        };

        data.map((i:any)=>{
            //Si se encuentra el id se encuentra
            if(i.id===109515496){
                datosTotales={
                    login:i.login,
                    node_id:i.node_id,
                    avatar_url:i.avatar_url
                }
            } 
        })

        //Imprimimos los datos en dom
    const {login,node_id,avatar_url}=datosTotales
    let elemento1=document.getElementById("seccion1")
    let titulo=document.createElement('h1')
    titulo.textContent=login
    elemento1?.appendChild(titulo)
    let elemento2=document.getElementById("seccion2")
    let titulo2=document.createElement('h1')
    titulo2.textContent=node_id
    elemento2?.appendChild(titulo2)
    let elemento3=document.getElementById("seccion3")
    let imagen=document.createElement("img")
    imagen.src=avatar_url
    imagen.alt=""
    imagen.width=300
    imagen.height=300
    
    elemento3?.appendChild(imagen)
    }catch(err){
        console.log(`Error ${err}`)
    }



}
verFollowers()