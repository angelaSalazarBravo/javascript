// <button type="button" class="btn btn-primary">Primary</button>


const MSG_1 = "Click Event";
const button_1 = document.getElementsByClassName('btn btn-primary')[0];

button_1.addEventListener('click', function() {
  alert(MSG_1);
});

//  <button type="button" class="btn btn-secondary">Secondary</button>

const MSG_2 = "Mouse enter event";
const button_2 = document.getElementsByClassName('btn btn-secondary')[0];

button_2.addEventListener('mouseenter', function() {
  alert(MSG_2);
});

// <button type="button" class="btn btn-success">Success</button>


const MSG_3 = "Mouse up event";
const button_3 = document.getElementsByClassName('btn btn-success')[0];

button_3.addEventListener('mouseup', function() {
  alert(MSG_3);
});

// <button type="button" class="btn btn-danger">Danger</button>

const MSG_4 = "Mouse leave event";
const button_4 = document.getElementsByClassName('btn btn-danger')[0];

button_4.addEventListener('mouseleave', function() {
  alert(MSG_4);
});

/*Añade los eventos que necesites al quinto botón para que cuando se pase el ratón 
sobre el muestre el estilo danger de boostrap y cuando salgas del muestre el estilo warning: */
// <button type="button" class="btn btn-warning">Warning</button>

const button_5 = document.getElementsByClassName('btn btn-warning')[0];

button_5.addEventListener('mouseenter', function() {
  button_5.classList.remove('btn-warning'); 
  button_5.classList.add('btn-danger');
});

button_5.addEventListener('mouseleave', function() {
  button_5.classList.remove('btn-danger');
  button_5.classList.add('btn-warning'); 
});

// Añade un evento al sexto botón que al hacer click sobre el cambie el color del fondo a rojo.
//  <button type="button" class="btn btn-info">Info</button>

const button_6 = document.getElementsByClassName('btn btn-info')[0];


button_6.addEventListener('click', function() {
    document.body.style.backgroundColor = "red";
  });

// <button type="button" class="btn btn-light">Light</button>
const button_7 = document.getElementsByClassName('btn btn-light')[0];


button_7.addEventListener('click', function() {
    document.body.style.backgroundColor = "white";
  });

  // <button type="button" class="btn btn-dark">Dark</button>
        

const button_8 = document.getElementsByClassName('btn btn-dark')[0];
const buttons = document.getElementsByTagName('button');


    button_8.addEventListener('click', function() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "black";
            button_5.style.color = "white";
            button_6.style.color = "white";
            button_7.style.color = "white";

        }
      
    });
