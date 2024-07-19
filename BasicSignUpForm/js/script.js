document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      // Prevent form submission
      event.preventDefault();

      // Clear previous errors
      const errors = document.querySelectorAll('.error');
      errors.forEach(error => error.textContent = '');

      // Form fields
      const fname = document.getElementById('fname').value.trim();
      const lname = document.getElementById('lname').value.trim();
      const email = document.getElementById('email').value.trim();
      const phonenumber = document.getElementById('phonenumber').value.trim();
      const password = document.getElementById('password').value.trim();
      const male = document.getElementById('male').checked;
      const female = document.getElementById('female').checked;
      const birth = document.getElementById('birth').value;
      const address = document.getElementById('address').value.trim();

      let isValid = true;

      // Validate first name
      if (fname === '') {
        document.getElementById('fnameError').textContent = 'First name is required';
        isValid = false;
      }

      // Validate last name
      if (lname === '') {
        document.getElementById('lnameError').textContent = 'Last name is required';
        isValid = false;
      }

      // Validate email
      if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Email format is invalid';
        isValid = false;
      }

      // Validate phone number
      if (phonenumber === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        isValid = false;
      } else if (!/^\d+$/.test(phonenumber)) {
        document.getElementById('phoneError').textContent = 'Phone number must be numeric';
        isValid = false;
      }

      // Validate password
      if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
      } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
        isValid = false;
      }

      // Validate sex
      if (!male && !female) {
        document.getElementById('sexError').textContent = 'Please select your sex';
        isValid = false;
      }

      // Validate birth date
      if (birth === '') {
        document.getElementById('birthError').textContent = 'Birth date is required';
        isValid = false;
      }

      // Validate address
      if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required';
        isValid = false;
      }

      if (isValid) {
        // Submit the form if all validations pass
        alert('Form submitted successfully');
        // You can also submit the form data to a server here
      }
    });
  });