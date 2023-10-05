const ALERTA_1 = "This is an alert message,click me to move on!!!";
const CONF_1 = "Show me in an alert if you clicked on ok or false";
const PROMP_1 = "show me in analert the message typed";


alert(ALERTA_1);
let tof = confirm(CONF_1);
alert("you clicked on " + tof + " click me to move on!!!" );


let NEW_TEXT = prompt(PROMP_1, "type something");
alert("You typed " + NEW_TEXT + " click me to move on!!!");
