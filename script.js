const passwordBox = document.getElementById("password");
const length =  16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allCharacters = upperCase + lowerCase + number + symbols;

//Create password function 
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length) ];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length) ];
    password += number[Math.floor(Math.random() * number.length) ];
    password += symbols[Math.floor(Math.random() * symbols.length) ];

    while(length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length) ];
    }
    passwordBox.value = password;
}

//copy function

function copyPassword(){
    navigator.clipboard.writeText(passwordBox.value);
}



