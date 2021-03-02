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
function validName() {
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

    if (nameRegex.test(nameInput.value) == false) {
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        return false;
    }
    else {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        return true;
    }
}
nameInput.onkeyup = function () {
    validName();
}

function validEmail() {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (emailRegex.test(emailInput.value) == false) {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        return false;
    }
    else {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        return true;
    }
}
emailInput.onkeyup = function () {
    validEmail();
}
function validPass() {
    var passRegex = /^[A-Za-z0-9!@#$%^&*()_+=-]{4,}$/
    if (passRegex.test(passInput.value) == false) {
        passInput.classList.add("is-invalid");
        passInput.classList.remove("is-valid");
        return false;
    }
    else {
        passInput.classList.add("is-valid");
        passInput.classList.remove("is-invalid");
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
function checkRepeat() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].email == emailInput.value) {
            return true;
        }
    }
    return false;
}




signUp.addEventListener("click", function () {
    if (checkRepeat()) {
        err.removeAttribute("hidden");
        err.innerHTML = "This Mail Already Exist";
        suc.hidden = true;
    }
    else {
        if (validName() && validEmail() && validPass()) {
            addNewData();
            localStorage.setItem("dataList", JSON.stringify(inputs));
            suc.removeAttribute("hidden");
            err.hidden = true;
        }
        else {
            err.removeAttribute("hidden");
            suc.hidden = true;
        }
    }
    clearData();

});
