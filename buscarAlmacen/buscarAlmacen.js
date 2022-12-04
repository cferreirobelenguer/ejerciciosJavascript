var almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
};
var otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro_objeto': 'disquette',
            'otra_cosa': 'mando'
        }
    }
};
var buscarProducto = function (producto) {
    var esta = false;
    //Devuelve booleano en función de si se encuentra o no
    //Analizamos almacen
    var estanteria1 = Object.values(almacen.estanteria1);
    var estanteria2 = Object.values(almacen.estanteria2);
    console.log(estanteria1);
    console.log(estanteria2);
    estanteria1.map(function (i) {
        if ((producto === i.producto1) || (producto === i.producto2) || (producto === i.producto3)) {
            esta = true;
        }
    });
    estanteria2.map(function (i) {
        if ((i.producto1 === producto) || (i.producto2 === producto) || (i === producto)) {
            esta = true;
        }
    });
    
    
    //Analizamos otro almacen
    //Lo convertimos en array con Object.values
    var resultOtro = Object.values(otroAlmacen);
    resultOtro.map(function (i) {
        if ((producto === i.fondo.objeto) || (producto === i.fondo.otro_objeto) || (producto === i.fondo.otra_cosa)) {
            esta = true;
        }
    });
    console.log(esta);
};
buscarProducto("coca-cola");
