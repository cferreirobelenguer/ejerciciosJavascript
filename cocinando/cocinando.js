
/**
 * 1.
 * Se pasa por parámetro el temporizador, si es undefined o menor a 0 muestra Olvidó configurar el temporizador
 * si es igual a 0 muestra Lasagna is done... y en caso contrario muestra No hecho, espere
 */
cookingStatus=(time)=> {
    if (time != undefined && time >= 0) {
        return time === 0 ? 'Lasagna is done...' : 'No hecho, espere'
    } else {
        return 'Olvidó configurar el temporizador'
    }
}
/**
 * 2.
 * Se pasa por parámetro una matriz con los pasos a seguir de elaboración de la Lasagna y los minutos por cada paso,
 * la función retorna el tiempo total de minutos de todos los pasos de la matriz; en caso de que no se especifique minutos
 * se pondrán 2 minutos por defecto
 */
const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];

preparationTime=(layers, minutes) => {
    if (minutes) {
        return layers.length * minutes
    } else {
        return layers.length * 2
    }   
}

/**
 * 3.
 * Se pasa por parámetro las capas de sauce y noodles y otros ingredientes para preparar la lasagna
 * Por cada noodles se incrementan los noodles 50gramos y por cada sauce 0.2gramos. Se muestran los resultados
 * en un objeto con las keys de noodles y sauce
 */
setQuantities=(lasagna) => {
    let ingredients = { noodles: 0, sauce: 0 };

    lasagna.forEach((item) => {
        if (item === 'sauce') {
            ingredients.sauce += 0.2;
        } else if (item === 'noodles') {
            ingredients.noodles += 50;
        }
    });

    return ingredients
}
setQuantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'])

/**
 * 4.
 * Función que pasa por argumenta la lista de ingredientes de tu amigo y la tuya, hay que agregar
 * el último ingrediente de tu amigo en tu lista sin modificar tu lista. La función no retorna nada
 */
const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

addSecretIngredient = (friendsList, myList) => {
    myList.push(friendsList.splice(friendsList.length-1)[0])
}
addSecretIngredient(friendsList,myList)

/**
 * 5. Función a la que se le pasa las porciones de ingredientes para dos personas
 * y se retorna la escala del número de personas que se pasa por parámetro
 * 
 */
const persons = 4;
const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};
scaleRecipe = (data, persons) => {
    Object.keys(data).forEach((ingredient) => {
        //(porcionesActuales / personasActuales) * personasDeseadas
        let porcionEscalada = (data[ingredient]/2) * persons
        data[ingredient] = porcionEscalada;
    });
}
scaleRecipe(recipe,persons)