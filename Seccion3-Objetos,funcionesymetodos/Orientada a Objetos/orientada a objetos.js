class Persona{
    constructor(nombre,apellido,edad){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.datos =`Me llamo ${nombre} ${apellido} y tengo ${edad}años`
    }

    saludar(){
        return`Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}años`
    }
}

const Juan = new Persona("juan","perez",26)

console.log(Juan);