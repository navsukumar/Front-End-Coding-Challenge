var correctUsername = 'Boba Bear'
var correctPassword = 'Sproulclubisthebest!'

document.getElementById("submitButton").onclick = function(){
    var tempU = document.getElementById("name").value;
    var tempP = document.getElementById("password").value;

    if (tempU.length == 0){
        document.getElementById("name").style.borderColor = '#DD0000';
        document.getElementById("err1").style.visibility = 'visible';

    }
    else if (tempU.normalize() != correctUsername.normalize() || tempP.normalize() != correctPassword.normalize()){
        document.getElementById("password").style.borderColor = '#DD0000';
        document.getElementById("err2").style.visibility = 'visible';
    }
    if (tempP.normalize() == correctPassword.normalize() && tempU.normalize() == correctUsername.normalize()) {
        window.location.href = "success.html";
        document.getElementById("user").innerHTML = correctUsername;
    } 
}

document.getElementById("name").onkeypress = function(){
    document.getElementById("name").style.borderColor = '#dcdcdc';
    document.getElementById("err1").style.visibility = 'hidden';
}

document.getElementById("password").onkeydown = function(){
    document.getElementById("password").style.borderColor = '#dcdcdc';
    document.getElementById("err2").style.visibility = 'hidden';
}

