const div =  document.createElement("div");

const frases = ["A simple default list group item",
                "A simple primary list group item",
                "A simple secondary list group item",
                "A simple succes list group item",
                "A simple danger list group item",
                "A simple warning list group item",
                "A simple infolist group item",
                "A simple light list group item",
                "A simple dark list group item"];


const LGitem = [
    ".",
    "list-group-item-primary",
    "list-group-item-secondary",
    "list-group-item-success",
    "list-group-item-danger",
    "list-group-item-warning",
    "list-group-item-info",
    "list-group-item-light",
    "list-group-item-dark"
];
document.body.setAttribute("class","p-3 m-0 border-0 bd-example");
div.classList.add("list-group");


const a = document.createElement("a");
frases.forEach((frase, i) => {

    let a2 = a.cloneNode();

    a2.textContent = frases[i];
    a2.href = "#";
    a2.classList.add("list-group-item", "list-group-item-action");

    a2.classList.add(LGitem[i]);
        

    div.appendChild(a2);
});
  
document.body.appendChild(div);

