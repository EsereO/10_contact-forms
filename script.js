const form = document.getElementById("contactForm");

const firstNameInput = document.getElementById("firstName");
const firstNameError = document.getElementById("errorFirstName");
const firstNameGeneral = document.querySelector("[data-field='firstName']");

const lastNameInput = document.getElementById("lastName");
const lastNameError = document.getElementById("errorLastName");
const lastNameGeneral = document.querySelector("[data-field='lastName']");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("errorEmail");
const emailGeneral = document.querySelector("[data-field='email']");

const queryError = document.getElementById("errorQuery");
const queryGeneral = document.querySelector("[data-field='queryType']")

const messageInput = document.getElementById("messageInput");
const messageError = document.getElementById("errorMessage");
const messageGeneral = document.querySelector("[data-field='messageInput']");

//const consentSelected = document.getElementById("consent");
const consentError = document.getElementById("errorConsent")
const consentGeneral = document.querySelector("[datafield='consent']");



form.addEventListener("submit", function (event) {
    event.preventDefault();

    //First Name
    const firstName = firstNameInput.value.trim();

    if (firstName === ""){
        firstNameError.textContent = "This field is required";
        firstNameGeneral.classList.add("is-error");
    } else {
        firstNameError.textContent= "";
        firstNameGeneral.classList.remove("is-error");
    }

    //Last Name
    const lastName = lastNameInput.value.trim();

    if (lastName === "") {
        lastNameError.textContent = "This field is required";
        lastNameGeneral.classList.add("is-error");
    } else {
        lastNameError.textContent = "";
        lastNameGeneral.classList.remove("is-error");
    }

    //Email
    const email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent = "This field is required";
        emailGeneral.classList.add("is-error");
    }else if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address";
        emailGeneral.classList.add("is-error");
    }else {
        emailError.textContent = "";
        emailGeneral.classList.remove("is-error");
    }

    //Query section
    const selectedQuery = document.querySelector("input[name='query']:checked");

    if (!selectedQuery) {
        queryError.textContent = "Please select a query type";
    } else {
        queryError.textContent = "";
    }

    //message
    const message = messageInput.value.trim();

    if (message === "") {
        messageError.textContent = "This field is required";
        messageGeneral.classList.add("is-error");
    }else {
        messageError.textContent = "";
        messageGeneral.classList.remove("is-error");
    }

    const consentSelected = document.querySelector("input[name='consent']:checked")

    if (!consentSelected) {
        consentError.textContent = "To submit this form, please consent to being contacted";
        consentGeneral.classList.add("is-error");
    } else {
        consentError.textContent = "";
        consentGeneral.classList.remove("is-error");
    }
});


