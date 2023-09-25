
const WELC_APP = "Welcometo the application!";
console.log("%c"+ WELC_APP, "color : blue; font-weight : bold;font-size : 18px" );
// Concatenar para que funcione la constante.

const INFO_MSG = "This is an infornational message";
console.log("%c"+ INFO_MSG, "color : green;font-size : 16px");

const WARNING = "This is a warning. Be cautious";
console.warn("%c" + WARNING, "font-size : 16px");

const ERR = "Error! Something went wrong";
console.error("%c" + ERR, "font-size : 16px");


let person1={
    name:'John',
    age:30,
    city:'New York'
}

let person2={
    name:'Jane',
    age: 25,
    city:'San Francisco'
}

let person3={
    name: 'Bob',
    age: 40,
    city:'Chicago'
}

const tabla= [person1, person2, person3]

console.table(tabla);

// hacer tres 
//g¡hacer array delos tres
//hacer un console modo tabla