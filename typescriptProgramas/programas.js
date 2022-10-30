/*
EJERCÍCIO DE DOM Y TYPESCRIPT
Se introducen datos en un input y se meten automáticamente dentro de un listado que se lee
dentro del html en formato lista <li></li>
Utilizar DOM y typescript
*/
var listados = [];
function calcular() {
    var datos;
    datos = document.getElementById("programa").value.toString();
    listados.push(datos);
    console.log(listados);
    var seccionDatos = document.querySelector("#listado_datos");
    var lista = "";
    listados.map(function (i) {
        lista += "<li>" + i + "</li>";
    });
    seccionDatos.innerHTML = lista;
}
