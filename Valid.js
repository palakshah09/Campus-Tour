document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('enquiry');
  const successMessage = document.getElementById('success-msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // For Resetting any previous error messages
    const errorMessages = document.querySelectorAll('.error-msg');
    errorMessages.forEach(function (element) {
      element.style.display = 'none';
    });

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('number').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('feedback').value.trim();

    // For Validation
    let valid = true;

    if (name === '') {
      displayError('name', 'Name is required');
      valid = false;
    }

    if (email === '') {
      displayError('email', 'Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      displayError('email', 'Please enter a valid email address');
      valid = false;
    }

    if (address === '') {
      displayError('address', 'Address is required');
      valid = false;
    }

    if (phone === '') {
      displayError('phone', 'Phone number is required');
      valid = false;
    }

    if (subject === '') {
      displayError('subject', 'Subject is required');
      valid = false;
    }

    if (message === '') {
      displayError('message', 'Message is required');
      valid = false;
    }

    if (!valid) {
      alert('Please fill out all required fields and correct any errors.');
    }

    // After validated, the form will be submitted
    if (valid) {
      setTimeout(function () {
        form.reset();
        successMessage.innerText = 'Your inquiry has been submitted successfully!';
      }, 1000);
    }
  });

  function displayError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
  }

  function isValidEmail(email) {
    // For checking validation added this
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
});
