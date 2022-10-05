// CS10 GRADE CALCULATOR

// Event Listener on the Button
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){

// Input
let S1 = +document.getElementById("CS1-in").value;
let SP1 = +document.getElementById("SP1-in").value;
let SP2 = +document.getElementById("SP2-in").value;
let CS2 = +document.getElementById("CS2-in").value;
let PA = +document.getElementById("PA-in").value;

// Process
let total = (S1 + SP1 + SP2 + CS2 + PA) / 5; 

// Output
document.getElementById("output")

}