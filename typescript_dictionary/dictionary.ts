/* Diccionario
El usuario introduce una palabra en inglés en el formulario y el programa
dice su significado, antónimos y sinónimos (estos últimos en caso de que los tenga)
Se usa la API https://dictionaryapi.dev/

*/

async function dictionary(){
    let dataWord:any;
    let definitions:string=""
    let synonyms:string[]=[]
    let antonyms:string[]=[]
    let synomymsWords:string=""
    let antonymsWords:string=""

    let objectLetter:HTMLElement|null=document.querySelector("#word")
    let word:string=(<HTMLInputElement>objectLetter).value.toString()
    
    //fetch
    await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word)
    .then(res=>res.json())
    .then(data=>{
        //definitions:data[0].meanings[0].definitions
        //antonyms:data[0].meanings[0].antonyms
        //synomyms:data[0].meanings[0].synonyms
        
        dataWord=data[0].meanings
    })
    
    //all the data
    for(let i of dataWord){
        //definitions data
        definitions+=i.definitions[0].definition+"\n"
        synonyms=i.synonyms
        antonyms=i.antonyms
    }
    //list of antonyms if length is > 0
    if(antonyms.length>0){
        for(let i of antonyms){
            antonymsWords+=i+"\n"
        }
    }
    //list of synonyms if length is > 0
    if(synonyms.length>0){

        for(let i of synonyms){
            synomymsWords+=i+"\n"
        }
    }
    //print the results in a section of HTML
    let seccionInfo=<HTMLElement>document.querySelector("#seccionInfo")
    seccionInfo.innerHTML="ANTÓNIMOS: "+antonymsWords+"<br>SINÓNIMOS: "+synomymsWords+"<br>DEFINICIONES: "+definitions


}