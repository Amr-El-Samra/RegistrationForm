var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var signUp = document.getElementById("signUp");
var logIn = document.getElementById("logIn");
var data = document.getElementsByClassName("form-control")
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
function validEmail() {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (emailRegex.test(emailInput.value) == false) {
        return false;
    }
    else {
        return true;
    }
}
emailInput.onkeyup = function () {
    validEmail();
}
function validPass() {
    var passRegex = /^[A-Za-z0-9!@#$%^&*()_+=-]{4,}$/
    if (passRegex.test(passInput.value) == false) {
        return false;
    }
    else {
        return true;
    }
}
passInput.onkeyup = function () {
    validPass();
}
function clearData() {
    for (var i = 0; i < data.length; i++) {
        data[i].value = "";
    }
}
function checkEmail() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].email == emailInput.value) {
            return true;
        }
    }
    return false;
}
function checkPass() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].pass == passInput.value) {
            return true;
        }
    }
    return false;
}

function addToStorage() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].email == emailInput.value) {
            localStorage.setItem("userName", JSON.stringify(inputs[i].name));
        }
    }
}


logIn.addEventListener("click", function () {
    if (checkEmail() && checkPass()) {
        window.location = "../Assignment 9/Links/Home.html";
        addToStorage();

    }
    else if (emailInput.value == "" && passInput.value == "") {
        err.removeAttribute("hidden");
        suc.hidden = true;
    }
    else {
        suc.removeAttribute("hidden");
    }
})

