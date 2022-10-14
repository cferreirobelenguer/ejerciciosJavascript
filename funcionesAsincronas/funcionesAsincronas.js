
/* Hacer función asíncrona con fetch sin .then*/

async function exercise(url){
    let response=await fetch(url);
    if(response.status==200){
        let json=await response.json();
        return json.results[0].name;
    }
    
    throw new Error (response.status)
    
}

console.log(exercise("https://randomuser.me/api/"));