const h1 = document.querySelector("h1")
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btnCalcular = document.querySelector("#btnCalcular")
const pResultado = document.querySelector("#resultado")

/* form.addEventListener("submit", sumarInputValues)

function sumarInputValues(event) {
    event.preventDefault();
    const sumaIputs = input1.value + input2.value;
    pResultado.innerText = "resultado: " + sumaIputs;
} */

form.addEventListener("submit", sumarInputValues)

function sumarInputValues(event) {
   /*  event.preventDefault(); */
    const sumaIputs = input1.value + input2.value;
    pResultado.innerText = "resultado: " + sumaIputs;
}

