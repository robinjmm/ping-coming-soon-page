const form = document.querySelector(".form");
const email = document.querySelector(".form__input");
const errorText = document.querySelector(".form__text--error");
const successText= document.querySelector(".form__text--success");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value === "" || !email.value.match(pattern)) {
        errorText.classList.add("visible");
        email.classList.add("border-red");
    } else {
        email.value = "";
        successText.classList.add("visible");
    }
})

function removeClass() {
    email.classList.remove("border-red");
    errorText.classList.remove("visible");
    successText.classList.remove("visible");
}

email.addEventListener("click", function (event) {
    event.stopPropagation();
    removeClass();
})

email.addEventListener("keydown", function (event) {
    event.stopPropagation();
    removeClass();
})