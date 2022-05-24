const form = document.querySelector(".form");
const email = document.querySelector(".form__input");
const errorText = document.querySelector(".form__error");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Submit");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value === "" || !email.value.match(pattern)) {
        errorText.classList.add("visible");
        email.classList.add("border-red");
    } else {
        email.value = "";
    }
})

function removeClass() {
    email.classList.remove("border-red");
    errorText.classList.remove("visible");
}

email.addEventListener("click", function (event) {
    event.stopPropagation();
    removeClass();
})

email.addEventListener("keydown", function (event) {
    event.stopPropagation();
    removeClass();
})