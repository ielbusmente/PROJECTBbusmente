var red = "rgb(255, 130, 130)";
var green = "rgb(142, 255, 151)";



function submitValidation() {    
    var pass = document.getElementById('pass');
    var confPass = document.getElementById('confPass');
    var str = document.getElementById('stat');  
    var eStr = document.getElementById('emailStat');  
    var email = document.getElementById('email');
    var user = document.getElementById('login');
    if (pass.value != confPass.value) {
        pass.style.background = red;
        confPass.style.background = red;  
        str.innerHTML="Passwords don't match."
        str.style.color = red;
        return false;
    }    
    if (!(email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
        email.style.background = red; 
        eStr.style.color = red;
        eStr.innerHTML = "Invalid e-mail."
        return false;
    }
    alert(`Hello ${user.value.trim()}! You are now registered. Please check your email to co`
    + `nfirm your account.`);
    
} 


function passStrength(password) { 
    var st = document.getElementById('strength');
    var stl = document.getElementById('strengthLabel'); 
    var cou = 0; 
    
    if (password.match(/[a-z]+/)) cou += 1 
    if (password.match(/[0-9A-Z]+/)) cou += 1  
    if (password.match(/[~<>?]+/)) cou += 1 
    if (password.match(/[!@#$%^&*()]+/)) cou += 1  
    if (password.length>4) cou += 1  
    if (password.length>7) cou += 1  


    switch(cou) {
        case 0:  st.value = 0; stl.innerHTML = "";  break
        case 1:  st.value = 10; stl.innerHTML = "Weak";  break
        case 2:  st.value = 25; stl.innerHTML = "Weak"; break
        case 3:  st.value = 50; stl.innerHTML = "Good"; break
        case 4:  st.value = 65; stl.innerHTML = "Good"; break
        case 5:  st.value = 80; stl.innerHTML = "Strong"; break 
        case 6:  st.value = 100; stl.innerHTML = "Very Strong"; break
    } 
    
} 