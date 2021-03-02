var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var logOut = document.getElementById("logOut");
var data = document.getElementsByClassName("form-control");
var title = document.getElementById("h1");
var inputs;
var suc = document.getElementById("suc");
var err = document.getElementById("error");

if (localStorage.getItem("dataList") == null) {
    inputs = [];
}
else {
    inputs = JSON.parse(localStorage.getItem("dataList"));
}

function addNewData() {
    var input = {
        name: nameInput.value,
        email: emailInput.value,
        pass: passInput.value
    }
    inputs.push(input);
}

var userName = JSON.parse(localStorage.getItem("userName"))
title.innerHTML = "Welcome " + userName;

logOut.onclick = function () {
    window.location = "../index.html";
    localStorage.removeItem("userName");
}



