//variables
//let var y const
//const genera una constante
//var let generan una variable
//$scope -> fragmento de código

function suma(){
    const numero = 2; 
    let numero2 = 4;
    var numero3 = 4;
    //$scope primero
    function sumaSegunda(){
        const numero = 3;
        let numero2 = 4;
        var numero3 = 4;
        //$scope segundo
    }
}

//arrow function

function suma(numero1, numero2){
    return numero1 * numero2;
}

const suma = function(numero1, numero2){
    return numero1 * numero2;
}

const suma = (numero1, numero2) => numero1 * numero2;

//template string
let name = eduardo;
let surname = palafox;

const fullname = `${name} ${surname}`;

const person = {
       name: '',
       surname: '',
       lastname: null
}

(() =>{
    const name = person.name.toString();
    const name2 = `${person.name} ${person.lastname} ? ${person.lastname} : ''}`
})()


//array
const roles = [1, 2, 3, {name: null, surname: ''}]
//arrayList
const roles2 = [
    {
        key: 'admin',
        name: 'súper admin' 
    },
    {
        key: 'user',
        name: 'usuario'
    }
]
//list
const roles3 = {}

//push, splice, idexOf, find, filter, map, foreach, 



roles.forEach((element, index) => {
    console.log(element.name);
});

for (let i = 0; i <= roles.length; i++){
    console.log(roles[i].name);
}

while(){

}

do{

}while()

//desestructuración de objetos
const person2 = {
    name: 'eduardo',
    age: 19,
    address: {
        street: 'shibuya',
        number: 5
    }
}

console.log(person2.name)
console.log(person2.address.street);

(()=>{
    const {name, address:{street}} = person2
})

