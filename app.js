const firstName = document.getElementById('inputName');
const showName = document.getElementById('firstName')

function saveName(){
firstName.value 
localStorage.setItem('firstName', firstName.value)
}

function getName(){
    showName,innerText = localStorage.getItem("firstname")
}