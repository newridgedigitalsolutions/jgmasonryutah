import emailjs from '@emailjs/browser';

const desktopForm = document.querySelector('desktopForm');
const mobileForm = document.querySelector('mobileForm');

if (desktopForm) {
  alert('Desktop form found');
  desktopForm.addEventListener('submit', handleFormSubmission);
}

if (mobileForm) {
  alert('Mobile form found');
  mobileForm.addEventListener('submit', handleFormSubmission);
}

function handleFormSubmission(e) {
  // Prevent the default form submission
  e.preventDefault();

  // Extract the form data from the event object
  const form = e.target;
  const formData = new FormData(form);

  // Extract values 
  const name = formData.get('firstName');
  const email = formData.get('email');

  // Console log the values
  alert(`Form submitted: ${form.id}`);
  alert(`Name: ${name}, Email: ${email}`);

  // Convert to object for emailjs
  const formObject = {
    customer_name: name,
    customer_email: email,
  };

  // Send the form data to the email service
  sendEmail(formObject);

}

function sendEmail(formObject) {
  emailjs
    .send('service_hzk2e75', 'testing_contact_reply', formObject)
    .then(
      (response) => {
        alert('SUCCESS!', response.status, response.text);
      },
      (error) => {
        alert('FAILED...', error.text);
      },
    );
}
