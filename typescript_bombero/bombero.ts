/*
TRABAJANDO CON GETTER Y SETTER:
Define una clase Bombero considerando los siguientes atributos de clase: nombre (String), apellidos (String), 
edad (int), casado (boolean), especialista (boolean). Define un constructor que reciba los parámetros necesarios 
para la inicialización y los métodos para poder establecer y obtener los valores de los atributos. 
Compila el código para comprobar que no presenta errores, crea un objeto y comprueba que se inicializa correctamente 
consultando el valor de sus atributos después de haber creado el objeto. 

*/
//Hay que cambiar el target en tscongi a es5 y ejecutar tsc -t es5 bombero.ts -w
//ya que getter y setter está en ECMASCRIPT ES5

class Bombero{
    
    private _nombre:string="Paul";
    private _edad:number=34;
    private _casado:boolean=false;
    private _especialista:boolean=true;

    contructor(){
        
    }
    //getter
    get mostrarNombre(){
        return this._nombre
    }
    get mostrarEdad(){
        return this._edad
    }
    get mostrarCasado(){
        return this._casado
    }
    get mostrarEspecialista(){
        return this._especialista
    }
    //setter
    set cambiarNombre(nombre_:string){
        this._nombre=nombre_
    }
    set cambiarEdad(edad_:number){
        this._edad=edad_
    }
    set cambiarCasado(casado_:boolean){
        this._casado=casado_
    }
    set cambiarEspecialidad(especialista_:boolean){
        this._especialista=especialista_
    }

}

function main():void{
    let bombero1=new Bombero()
    console.log(bombero1.mostrarNombre)
    console.log(bombero1.mostrarEdad)
    console.log(bombero1.mostrarCasado)
    console.log(bombero1.mostrarEspecialista)
    bombero1.cambiarNombre="Charles"
    bombero1.cambiarEdad=45
    bombero1.cambiarCasado=true
    bombero1.cambiarEspecialidad=false
    console.log(bombero1.mostrarNombre)
    console.log(bombero1.mostrarEdad)
    console.log(bombero1.mostrarCasado)
    console.log(bombero1.mostrarEspecialista)
}

main()