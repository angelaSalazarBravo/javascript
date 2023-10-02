const DEFAULT_DAY = "Número de día inválido";

/** Crear una función que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekSC  = (day) => {
    
switch(day){
    case 1:
        return "Lunes";
        break;
    case 2 : 
        return "Martes";
        break;
    case 3:
        return "Miércoles";
        break;
    case 4 : 
        return "Jueves";
        break;
    case 5 : 
        return "Viernes";
        break;
    case 6 : 
        return "Sábado";
        break;
    case 7 : 
        return "Domingo";
        break;
    default : 
        return DEFAULT_DAY;

}

};




/** Crear una objeto que devuelva los días de la semana en función de un número dado, haciendo uso de un objeto literal
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 */

let dayOfWeek = {
     1 : "Lunes",
     2 : "Martes",
     3 : "Miércoles",
     4 : "Jueves",
     5 : "Viernes",
     6 : "Sábado",
     7 : "Domingo"
};


/** Crear una función que haciendo uso del objeto literal definido arriba
 * devuelva los días de la semana en función de un número dado
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekObject  = (day) =>{
    return dayOfWeek[day] || DEFAULT_DAY ;
};


/************************************************ */

const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

/**
 * Crea un calculadora básica que sume, reste, multiplique y divide. Usando switch case
 * Operadores validos ("+", "-", "*", "/")
 * En cualquier otro caso debe devolver DEFAULT_OPERARTOR_ERROR
 */
export const simpleCalculatorSC = (operartor, num_1, num_2) => {


    switch(operartor){
        case '+':
            return num_1 + num_2;
        case '-' : 
            return num_1 - num_2;
        case '*' :
            return num_1 * num_2;
        case '/' : 
            return num_1 / num_2;
        default : 
            return DEFAULT_OPERARTOR_ERROR;
    
    };
    
    };
    


/**
 * Crea un objeto con los operadores básicos +, -, *, ,/
 * Cada propiedad del objeto debe realizar la operación correspodiente
 */
/*let calculatorObject = {
        '+' : function (num_1, num_2){
            return num_1 + num_2},
        '-' : function (num_1, num_2){
            return num_1 - num_2},
        '*' : function(num_1, num_2){
            return num_1 * num_2},
        '/' : function(num_1, num_2){
            return num_1 / num_2}
};*/
let calculatorObject = {
    '+': function(num_1, num_2) {
      return num_1 + num_2;
    },
    '-': function(num_1, num_2) {
      return num_1 - num_2;
    },
    '*': function(num_1, num_2) {
      return num_1 * num_2;
    },
    '/': function(num_1, num_2) {
      return num_1 / num_2;
    },
  };

/**
 * Crea una función que haga uso de objeto que has creado arriba y que además devuelva DEFAULT_OPERARTOR_ERROR
 * si se introduce cualquier cosa que sea diferente a "+", "-", "*", "/"
 */
export const simpleCalculatorObject = (operator, num_1, num_2) => {
    return calculatorObject[operator] ? calculatorObject[operator](num_1, num_2) :DEFAULT_OPERARTOR_ERROR;
};
