/*
Crear función que sea capaz de detectar y retornar todos los handles
de un texto usando solamente expresiones regulares:
    - handle usuario: los que comienzan por @
    - handle hashtag: los que comienzan por #
    - handle web: los que comienzan por wwww. ,http://, https://
*/
var enviarPost = function (post) {
    //Pasamos el dato del input a array usando como separador el espacio entre palabras
    var datos = post.split(" ");
    datos.map(function (i) {
        if (i.startsWith('@')) {
            console.log("Se menciona usuario");
        }
        else if (i.startsWith('#')) {
            console.log("Se menciona hashtag ");
        }
        else if ((i.startsWith('www')) || (i.startsWith('http://')) || (i.startsWith('https://'))) {
            console.log("Se menciona web ");
        }
        else {
            console.log("");
        }
    });
};
enviarPost("#usuario: Recomiendo la web https://programacion.com para aprender lenguajes");
