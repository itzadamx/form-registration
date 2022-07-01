"use strict"; 
var formValidity = true;


 function validateInformation(fieldsetId) {
    var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
    var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;
    try {
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (fieldsetValidity === false) {
            if (fieldsetId === "details") {
                throw "Please complete all statments related details.";
            } 
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

/* validate form */
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault(); 
    } else {
        evt.returnValue = false; 
    }
    formValidity = true; 
    validateInformation("details");
    if (formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
        alert("Thanks for registering with our website, your customer record was created successfully.");
    } else {
        document.getElementById("errorText").innerHTML = "It seems that your input wasn't in the correct format.";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);
    }
}

function validateFirstname() {
    var unInput = document.getElementById("firstName");
    var errorDiv = document.getElementById("firstnameError");
    try {
        if (/[^a-zA-Z]/.test(unInput.value) === true) {
            throw "Firstname must contain only letters";
        }
        else  if (/.{2,}/.test(unInput.value) === false) {
                throw "Firstname must be at least 2 characters long";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validateLastname() {
    var unInput = document.getElementById("lastName");
    var errorDiv = document.getElementById("lastnameError");
    try {
        if (/[^a-zA-Z]/.test(unInput.value) === true) {
            throw "Lastname must contain only letters";
        }
        else if (/.{2,}/.test(unInput.value) === false) {
            throw "Lastname must be at least 2 characters long";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validateAddress() {
    var unInput = document.getElementById("address");
    var errorDiv = document.getElementById("addressError");
    try {
        if (/.{20,}/.test(unInput.value) === false) {
            throw "Address must be at least 20 characters long";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validateCity() {
    var unInput = document.getElementById("city");
    var errorDiv = document.getElementById("cityError");
    try {
        if (/[^a-zA-Z]/.test(unInput.value) === true) {
            throw "City Name must contain only letters";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validatePostalCode() {
    var canadianPostalCode = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)$/;

    var unInput = document.getElementById("postal");
    var errorDiv = document.getElementById("postalcodeError");
    try {
        if (canadianPostalCode.test(unInput.value) === false) {
            throw "It is not a Canadian Postal Code format";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validateProvince() {
    var unInput = document.getElementById("province");
    var errorDiv = document.getElementById("provinceError");
    
   var provinceArr = ['QC' , 'ON' , 'MN' , 'SK' , 'AB' , 'BC'];
    try {
        var id = -1;
        for (var i = 0; i < provinceArr.length; i++) {
            if (unInput.value.toUpperCase() === provinceArr[i]) {
                id = i;
                break;
            }
        }
        if (id === -1) {
            throw "Canadian Provinces are: QC, ON, MN, SK, AB, BC";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validateAge() {
    var unInput = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
    try {
        if (unInput.value < 18) {
            throw "Age has to be at least 18 years old";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validatePassword() {
    var pw1Input = document.getElementById("pwd1");
    var pw2Input = document.getElementById("pwd2");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (/.{6,}/.test(pw1Input.value) === false) {
            throw "Password must be at least 6 characters";
        } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
            throw "Passwords must match";
        } else if (/[A-Z]/.test(pw1Input.value) === false) {
            throw "Password must contain at least one upper-case letter";
        } else if (/\d/.test(pw1Input.value) === false) {
            throw "Password must contain at least one number";
        } else if (/[!@#_]/.test(pw1Input.value) === false) {
            throw "Password must contain at least one of the following symbols: ! @ # _";
        }
        pw1Input.style.background = "";
        pw2Input.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
       
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        pw1Input.style.background = "rgb(255,233,233)";
        pw2Input.style.background = "rgb(255,233,233)";
    }
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    try {
        if (emailCheck.test(emailInput.value) === false) {
            throw "Please provide a valid email address";
        }
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
       
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}



/* create event listeners */
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }

    var fNameInput = document.getElementById("firstName");
    var lNameInput = document.getElementById("lastName");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var postalCodeInput = document.getElementById("postal");
    var provinceInput = document.getElementById("province");
    var ageInput = document.getElementById("age");
    var pwd2Input = document.getElementById("pwd2");
    var emailInput = document.getElementById("email");

    if (fNameInput.addEventListener) {
        fNameInput.addEventListener("change", validateFirstname, false);
        lNameInput.addEventListener("change", validateLastname, false);
        addressInput.addEventListener("change", validateAddress, false);
        cityInput.addEventListener("change", validateCity, false);
        postalCodeInput.addEventListener("change", validatePostalCode, false);
        provinceInput.addEventListener("change", validateProvince, false);
        ageInput.addEventListener("change", validateAge, false);
        pwd2Input.addEventListener("change", validatePassword, false);
        emailInput.addEventListener("change", validateEmail, false);

    } else if (fNameInput.attachEvent) {
        fNameInput.attachEvent("onchange", validateFirstname);
        lNameInput.attachEvent("onchange", validateLastname);
        addressInput.attachEvent("onchange", validateAddress);
        cityInput.attachEvent("onchange", validateCity);
        postalCodeInput.attachEvent("onchange", validatePostalCode);
        provinceInput.attachEvent("onchange", validateProvince);
        ageInput.attachEvent("onchange", validateAge);
        pwd2Input.attachEvent("onchange", validatePassword);
        emailInput.attachEvent("onchange", validateEmail);
    }

}
function setUpPage() {
    createEventListeners();
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}