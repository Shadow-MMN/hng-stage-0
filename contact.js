document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("success");

  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Reset messages
    Object.values(errors).forEach((error) => (error.textContent = ""));
    successMsg.hidden = true;

    // Name validation
    if (fields.name.value.trim() === "") {
      errors.name.textContent = "Please enter your full name.";
      valid = false;
    }

    // Email validation
    if (fields.email.value.trim() === "") {
      errors.email.textContent = "Please enter your email address.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)) {
      errors.email.textContent = "Please enter a valid email address.";
      valid = false;
    }

    // Subject validation
    if (fields.subject.value.trim() === "") {
      errors.subject.textContent = "Please enter a subject.";
      valid = false;
    }

    // Message validation
    if (fields.message.value.trim().length < 10) {
      errors.message.textContent =
        "Message must be at least 10 characters long.";
      valid = false;
    }

    // If all valid, show success
    if (valid) {
      successMsg.hidden = false;
      form.reset();

      // Optional: Clear success message after few seconds
      setTimeout(() => {
        successMsg.hidden = true;
      }, 3000);
    }
  });
});
