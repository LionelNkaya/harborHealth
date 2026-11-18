// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

// Keep the copyright year current.
document.getElementById('year').textContent = new Date().getFullYear();

// This demo form prepares an email in the visitor's email application.
// Connect a secure form service or backend before using this site in production.
const inquiryForm = document.getElementById('inquiry-form');
const formStatus = document.getElementById('form-status');

inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!inquiryForm.reportValidity()) return;

  const data = new FormData(inquiryForm);
  const subject = encodeURIComponent('In-home care inquiry from ' + data.get('name'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\n' +
    'Email: ' + data.get('email') + '\n' +
    'Phone: ' + (data.get('phone') || 'Not provided') + '\n' +
    'Interested in: ' + (data.get('interest') || 'Not specified') + '\n\n' +
    'Message: ' + (data.get('message') || 'No additional message')
  );

  formStatus.textContent = 'Your email application should open with your inquiry ready to review.';
  window.location.href = 'mailto:hello@harborhomecare.com?subject=' + subject + '&body=' + body;
});
