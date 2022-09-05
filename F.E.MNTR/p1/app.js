const nameInput = document.querySelector(".nameInput");
const numberInput = document.querySelector(".numberInput");
const dateInput = document.querySelector(".dateInput");
const monthInput = document.querySelector(".monthInput");
const cvcInput = document.querySelector(".cvcInput");
const button = document.querySelector(".btn");
 const cardNumber = document.querySelector(".front-text-1");
 const cardName = document.querySelector(".front-text-2");
const cardMonth = document.querySelector(".front-text-3");
const cvcNumber = document.querySelector(".back-card-number");

eventListeners();

function eventListeners(){

    button.addEventListener("click",addName);
}


 
function addName(e){
    const newName = nameInput.value;

    addNameToUI();
}

function addNameToUI(newName){
    const cardNameDiv = document.querySelector("card-name-text");
    cardNameDiv.appendChild(newName);
  

}
 


                 
if(nameInput.value || numberInput.value || dateInput.value || monthInput.value || cvcInput.value === ""){
    
}else {

}
