
/*Título de la página -> get via getElementByid*/
console.log(document.getElementById("titulo").textContent);
console.log(document.getElementsByClassName("parrafo")[0].textContent);
console.log(document.getElementsByClassName("parrafo")[1].textContent);
console.log(document.getElementsByName("nombre")[0].placeholder);
console.log(document.getElementsByName("apellido")[0].placeholder);
console.log(document.getElementsByTagName("li")[0].textContent);
console.log(document.getElementsByTagName("li")[1].textContent);
console.log(document.getElementsByTagName("li")[2].textContent);
console.log(document.querySelector("h1").textContent);
console.log(document.querySelectorAll("p")[0].textContent);
console.log(document.querySelectorAll("p")[1].textContent);