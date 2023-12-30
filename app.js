document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Validate name
    const nameInput = form.querySelector('input[name="name"]');
    isValid = validateRequired(nameInput) && isValid;

    // Validate email
    const emailInput = form.querySelector('input[name="email"]');
    isValid = validateEmail(emailInput) && isValid;

    // Validate phone
    const phoneInput = form.querySelector('input[name="phone"]');
    isValid = validatePhone(phoneInput) && isValid;

    // Validate message
    const messageInput = form.querySelector('textarea[name="message"]');
    isValid = validateRequired(messageInput) && isValid;

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

  function validateRequired(input) {
    const value = input.value.trim();
    if (value === "") {
      showError(input, "This field is required");
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }

  function validateEmail(emailInput) {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(emailInput, "Please enter a valid email address");
      return false;
    } else {
      showSuccess(emailInput);
      return true;
    }
  }

  function validatePhone(phoneInput) {
    const phone = phoneInput.value.trim();
    const phoneRegex = /^\+?[0-9]{10,}$/;
    if (!phoneRegex.test(phone)) {
      showError(phoneInput, "Please enter a valid phone number");
      return false;
    } else {
      showSuccess(phoneInput);
      return true;
    }
  }

  function showError(input, message) {
    const inputContainer = input.parentElement;
    inputContainer.className = "input-container error";
    const span = inputContainer.querySelector("span");
    span.innerText = message;
  }

  function showSuccess(input) {
    const inputContainer = input.parentElement;
    inputContainer.className = "input-container success";
  }
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // ... (other validations)

    // Validate email confirmation
    const emailInput = form.querySelector('input[name="email"]');
    const confirmEmailInput = form.querySelector('input[name="confirmEmail"]');
    isValid = validateEmail(emailInput) && isValid;
    isValid = validateEmailConfirmation(emailInput, confirmEmailInput) && isValid;

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

  // ... (other validation functions)

  function validateEmailConfirmation(emailInput, confirmEmailInput) {
    const email = emailInput.value.trim();
    const confirmEmail = confirmEmailInput.value.trim();

    if (email !== confirmEmail) {
      showError(confirmEmailInput, "Email addresses do not match");
      return false;
    } else {
      showSuccess(confirmEmailInput);
      return true;
    }
  }

  // ... (other validation functions)
});



