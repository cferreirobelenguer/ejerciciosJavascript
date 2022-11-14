
/*DESESTRUCTURACIÓN DE OBJETOS

Tenemos un objeto superheroe y se pide desestructurarlo para poder obtener en console cada uno de sus atributos*/


const imprimirDatos=(superheroe)=>{
    const {name,villain,comic}=superheroe
    console.log("Nombre: "+name)
    console.log("Villano: "+villain)
    console.log("Marca: "+comic)
}

imprimirDatos(superheroe={
    name:'Batman',
    villain:'joker',
    comic:'DC'
})


