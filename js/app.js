const ARA = document.getElementById("ARA");
const bretagne = document.getElementById("bretagne");
const normandie = document.getElementById("normandie");

let departement = document.getElementById("departement");

let select = document.departement;
let newOption = document.createElement("option");

ARA.addEventListener("click", () => {
    select.prepend(newOption);
    console.log("hello");
});

bretagne.addEventListener("click", () => {
    
});

normandie.addEventListener("click", () => {
    
});