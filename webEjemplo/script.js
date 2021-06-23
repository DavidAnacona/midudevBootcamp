const  firstName = 'David'

//Como string es un tipo primitivo no podemos cambiarle su valor 
//por lo que creamos una variable y le asignamos el nuevo string
//que obtenemos despues de hacer el UpperCase

const firstNameWithUpperCase = firstName.toUpperCase()

console.log(firstNameWithUpperCase)

const list = []

//list.push(157) utilizamos para mutar el array que teniamos

//utilizamos concat para agregar algo al array que teniamos sin mutarlo ademas podemos pasar un array
const anotherList = list.concat([17,54])

console.log(anotherList[0])

//Objetos
//creamos un objeto persona 
const persona = {
    name: 'David',
    twitter: '@meloCaramelo',
    age: 18,
    isDeveloper: true,
    links: ['muy bonito', 'Demasiado melo']
}
//Accedemos a distintas propiedades del objeto persona
console.log(persona.name)
console.log(persona.links[1])

const field = 'twitter'

console.log(persona[field])

//Funciones
//asi seria una forma de declarar una funcion
const sumar = (operando1, operando2) =>{
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}
//veremos otra forma de declarar otra funcion
function restar(a, b){
    return a - b
}
console.log(sumar(2,2))
console.log(restar(8,3))