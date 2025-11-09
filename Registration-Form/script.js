const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

function showError(input, message) {
    let error = input.parentElement.querySelector(".error-message");
    if (!error) {
        error = document.createElement("small");
        error.className = "error-message";
        input.parentElement.appendChild(error);
    }
    error.innerText = message;
    input.classList.add("error");
}

function clearError(input) {
    let error = input.parentElement.querySelector(".error-message");
    if (error) error.remove();
    input.classList.remove("error");
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    clearError(emailInput);
    clearError(phoneInput);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email 💌");
        valid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        showError(phoneInput, "Please enter a 10-digit phone number 📞");
        valid = false;
    }

    if (valid) {
        Swal.fire({
            title: "Yay! 🎉",
            text: "Your form has been submitted successfully!",
            icon: "success",
            confirmButtonColor: "#826AFB"
        });
        form.reset();
    }
});

