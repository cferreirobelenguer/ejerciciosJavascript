/*Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
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
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false
Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes. */
interface almacenType{
    'estanteria1':{
        'cajon1':{
            'producto1':string,
            'producto2':string,
            'producto3':string
        }
    },
    'estanteria2':{
        'cajon1':string,
        'cajon2':{
            'producto1':string,
            'producto2':string
        }
    }
}
const almacen:almacenType = {
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
  }

interface otroAlmacenType{
    'baul':{
        'fondo':{
            'objeto':string,
            'otro_objeto':string,
            'otra_cosa':string
        }
    }
}

const otroAlmacen:otroAlmacenType = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro_objeto': 'disquette',
        'otra_cosa': 'mando'
      }
    }
  }

const buscarProducto=(producto:string)=>{
    let esta:boolean=false
    //Devuelve booleano en función de si se encuentra o no
    //Analizamos almacen
    let estanteria1=Object.values(almacen.estanteria1)
    let estanteria2=Object.values(almacen.estanteria2)
    console.log(estanteria1)
    console.log(estanteria2)
    estanteria1.map(i=>{
        if((producto===i.producto1)||(producto===i.producto2)||(producto===i.producto3)){
            esta=true
        }
    })
    estanteria2.map(i=>{
        if((i.producto1===producto)||(i.producto2===producto)||(i===producto)){
            esta=true
        }
    })
    //Analizamos otro almacen
    //Lo convertimos en array con Object.values
    let resultOtro=Object.values(otroAlmacen)
    resultOtro.map(i=>{
        
        if((producto===i.fondo.objeto)||(producto===i.fondo.otro_objeto)||(producto===i.fondo.otra_cosa)){
            esta=true
        }
    })
    console.log(esta)
}
buscarProducto("disquette")