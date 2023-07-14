/**
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs:
 * https://github.com/public-apis/public-apis
 * API DICCIONARIO
 */

searchWord =(word)=> {
    const resultsTitle = document.getElementById('results-title');
    const resultsContainer = document.getElementById('results-container');
    const meanings = [];
    resultsTitle.innerHTML = '';
    const titleElement = document.createElement('h2');
    resultsTitle.appendChild(titleElement)
    titleElement.textContent = word;
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        .then(response => response.json())
        .then(json => {
            //Se imprimen las definiciones encontradas en html
            meanings.push(json[0].meanings[0].definitions);
            resultsContainer.innerHTML = '';
            for (let i = 0; i < meanings.length; i++) {
                for (let j = 0; j < meanings[i].length; j++) {
                    const definitionElement = document.createElement('p');
                    definitionElement.textContent = meanings[i][j].definition;
                    resultsContainer.appendChild(definitionElement);
                }
            }
            
        })
        .catch(error => {
            //En caso de que no se encuentre la palabra imprime el error en html
            const definitionElement = document.createElement('p');
            definitionElement.textContent = 'An error occurred:', error;
            resultsContainer.appendChild(definitionElement);
        })
}

searchWord('illustration')