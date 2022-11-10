/* Construir una clase Factura que descienda de la clase Precio (Precio tiene los atributos precio e iva)
y que incluya dos atributos específicos llamados emisor y cliente y, al menos, un método llamado
imprimirFactura. */

interface Precio{
    precio:number,
    iva:number
}
interface Factura extends Precio{
    emisor:string,
    cliente:string,
    imprimirFactura:Function
}

const Factura1:Factura={
    precio:400,
    iva:0.27,
    emisor:"MUEBLES S.L",
    cliente:"SARA PÉREZ",
    imprimirFactura:function():string{
        let totalFactura:number=400+(400*0.27)
        return "FACTURA MUEBLES \nEMISOR: "+this.emisor+"\nCLIENTE: "+this.cliente+"\nPRECIO: "+this.precio+"€\nIVA: "+this.iva+"%\nTOTAL A PAGAR: "+totalFactura+"€"
    }
}

function main():string{
    return Factura1.imprimirFactura()
}

console.log(main())