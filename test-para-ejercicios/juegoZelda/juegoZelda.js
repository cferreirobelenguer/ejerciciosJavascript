/* ¡Han anunciado un nuevo "The Legend of Zelda"! 
    Se llamará "Tears of the Kingdom" y se lanzará el 12 de mayo de 2023.
    Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos
    "The Legend of Zelda" de la historia?
    Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda
    que tú selecciones.
    - Debes buscar cada uno de los títulos y su día de lanzamiento 
    (si no encuentras el día exacto puedes usar el mes, o incluso inventártelo)
    */

    const calcularFecha=(fecha1,fecha2)=>{
        //Creamos dos fechas con los datos del nuevo zelda y del zelda de gamecube
        let fechaActual=new Date(fecha1)
        let fechaAntigua=new Date(fecha2)
        //Pasamos las fechas a milisegundos
        let fechaActual_milisegundos=fechaActual.getTime()
        let fechaAntigua_milisegundos=fechaAntigua.getTime()
        //Calculamos la diferencia en milisegundos
        diferencia_milisegundos=fechaActual_milisegundos-fechaAntigua_milisegundos
        //Pasamos los milisegundos a días
        let dias=diferencia_milisegundos/(1000*60*60*24)
        //Pasamos los días a años
        let anios=dias/365.25
        return "Años: "+anios+"\nDías: "+dias
    }
    module.exports=calcularFecha