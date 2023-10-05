
/*
<body>
    <div>
        <h1></h1>
        <br />
        <p></p>
        <br />

        <form>
            <label></label>
            <imput />
            <br /><br />

             <label></label>
            <imput />
            <br /><br />

             <label></label>
            <imput />
            <br /><br />

            <imput />
            </form>
    </div>
</body>
*/

const div = document.createElement("div");
const h1 = document.createElement("h1");
const br1 = document.createElement("br");
const p = document.createElement("p");
const br2 = document.createElement("br");
const form = document.createElement("form");
const label1 = document.createElement("label");
const input1 = document.createElement("input");
const br3 = document.createElement("br");
const label2 = document.createElement("label");
const input2 = document.createElement("input");
const br4 = document.createElement("br");
const label3 = document.createElement("label");
const input3 = document.createElement("input");
const br5 = document.createElement("br");
const inputSubmit = document.createElement("input");


div.appendChild(h1);
div.appendChild(br1);
div.appendChild(p);
div.appendChild(br2);
div.appendChild(form);
form.appendChild(label1);
form.appendChild(input1);
form.appendChild(br3);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(br4);
form.appendChild(label3);
form.appendChild(input3);
form.appendChild(br5);
form.appendChild(inputSubmit);

form.action = "/action_page.php";

label1.textContent = "Enter a date before 1980-01-01:";
label1.setAttribute("for", "datemax");

input1.type = "date";
input1.id = "datemax";
input1.name = "datemax";
input1.max = "1979-12-31";

label2.textContent = "Enter a date after 2000-01-01:";
label2.setAttribute("for", "datemin");

input2.type = "date";
input2.id = "datemin";
input2.name = "datemin";
input2.min = "2000-01-02";

label3.textContent = "Quantity (between 1 and 5):";
label3.setAttribute("for", "quantity");

input3.type = "number";
input3.id = "quantity";
input3.name = "quantity";
input3.min = "1";
input3.max = "5";

inputSubmit.type = "submit";
inputSubmit.value = "Submit";


document.body.appendChild(div);
