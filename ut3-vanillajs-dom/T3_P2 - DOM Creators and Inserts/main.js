/* dentro de body
dentro  pongo el recurso de imagen src con alt="LA
luego un h1
parrafo
parrafo
*/

const imagen = document.createElement("img");
imagen.alt = "LA";
imagen.src = "img_la.jpg";

const h1 = document.createElement("h1");
h1.textContent = "this is a Heading";

const p1 = document.createElement("p");
p1.textContent = "this is a paragraph.";

const p2 = document.createElement("p");
p2.textContent = "this is another paragraph.";

document.body.appendChild(imagen);
document.body.appendChild(h1);
document.body.appendChild(p1);
document.body.appendChild(p2);