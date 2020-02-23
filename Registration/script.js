var red = "rgb(255, 130, 130)";
var green = "rgb(142, 255, 151)";
var user = document.getElementById('login');
var pass = document.getElementById('pass');
var confPass = document.getElementById('confPass'); 
var status = document.getElementById('stat');


function submitValidation() {  
    if (pass.value == "" ) {
        pass.style.background = red;
        return false;
    }
    if (confPass.value == "" ) {
        confPass.style.background = red;
        return false;
    } 
    if (pass.value != confPass.value) {
        pass.style.background = red;
        confPass.style.background = red;  
        status.innerHTML="Passwords don't match."
        status.style.color = red;
        return false;
    }   
    alert(`Hello ${user.value.trim()}! You are now registered. Please check your email to confirm`+
        ` your account.`);
    
} 
var passStrength = function() {
    var cou = 0;
    if (pass.value.includes(/a-z/g)) 
        cou = 1;
    else if (pass.value.includes(/A-Z/g))
        cou = 2;
    else if (pass.value.includes(/0-9/g))
        cou = 3; 

    return cou;
} 
