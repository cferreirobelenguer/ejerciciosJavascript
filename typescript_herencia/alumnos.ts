/* 
Enunciado:

Crea 4 clases,
Usuario (clase abstracta),
Estudiante (hereda de Usuario),
Invitado (hereda de Usuario)
Administrador (hereda de Usuario y tiene nivel),
Cada uno con sus atributos (no hacen falta métodos).
Debes crear un objeto literal con una lista de nombres y passwords.

Para cada elemento:
Si es de tipo Invitado, debes mostrarle el mensaje "No estás autorizado a entrar en esta lección".
Si es de tipo Estudiante, debes comprobar que su $nombre y $password existe y mostrar el mensaje "Bienvenid@ a OpenVitae, $nombre".
Si es de tipo Administrador y su nivel es 1, debes mostrar el mensaje "Tu nivel es insuficiente".
Si es de tipo Administrador y su nivel es 2, debes mostrar el mensaje "Tu nivel es el correcto".

*/



interface list{
    nombres:string[];
    passwords:string[]
}
const UserList:list={
    nombres:["Paula","Claudia","Pepe","Carlos"],
    passwords:["paula5","claudia34","pepe878","carlos3423"]
}

//Usuarios es una clase abstracta con constructor vacío
class Usuarios{
    constructor(){
    }
}
//Estudiante hereda de Usuarios
//Estudiante tiene como atributos nombre y password
class Estudiante extends Usuarios{
    nombre:string;
    password:string
    verify:Function
    constructor(nombre:string,password:string){
        super();
        this.nombre=nombre;
        this.password=password;
        this.verify=function(){
            let verifyName:boolean=false
            let verifyPassword:boolean=false
            for(let i of UserList.nombres){
                if(i===this.nombre){
                    verifyName=true
                    break;
                }
            }
            for(let j of UserList.passwords){
                if(j===this.password){
                    verifyPassword=true
                    break;
                }
            }
            if(verifyName===true && verifyPassword===true){
                console.log("Bienvenid@ a OpenVitae, "+this.nombre)
            }else{
                console.log("Necesita registrarse para acceder al curso")
            }  
        }
    }
}
//Invitado hereda de Usuarios
//Invitado tiene como atributo action que indica que administrador no está autorizado para entrar en esa lección
class Invitado extends Usuarios{
    action:Function

    constructor(){
        super();
        this.action=function(){
            console.log("No estás autorizado a entrar en esta lección")
        }
    }
}
//Administrador hereda de Usuarios
//Si es administrador tiene nivel 1 o nivel 2 como atributos que son booleanos
class Administrador extends Usuarios{
    nivel1:boolean;
    nivel2:boolean;
    saberNivel:Function

    constructor(nivel1:boolean,nivel2:boolean){
        super();
        this.nivel1=nivel1;
        this.nivel2=nivel2;
        this.saberNivel=function(){
            //Método que indica que si nivel1 es true el nivel es insuficiente y si nivel 2 es true el nivel es correcto
            if(this.nivel1){
                console.log("Tu nivel es insuficiente")
            }else if(this.nivel2){
                console.log("Tu nivel es correcto")
            }else{
                console.log("Debe de especificar un nivel")
            }
        }
    }
}

//método main que crea los objetos y llama a los métodos
function main():void{


    //creando objeto alumna1 de la clase Estudiante
    const alumna1=new Estudiante("Claudia","claudia34")
    alumna1.verify()

    //creando objeto administrador2 de la clase Administrador
    const administrador2=new Administrador(false,true)
    administrador2.saberNivel()

    //creando objeto invitado3 de la clase Invitado
    const invitado3=new Invitado()
    invitado3.action()
}

main()
