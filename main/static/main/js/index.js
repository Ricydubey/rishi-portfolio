const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('active');
});

function downloadResume() {
  const resumeUrl = "{% static 'main/resume.pdf' %}";
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Show custom popup
  const popup = document.getElementById('download-popup');
  popup.classList.remove('hidden');
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');
  }, 3000); // hide after 3 seconds
}


// function downloadResume(button) {
//   const resumeUrl = button.getAttribute('data-resume-url');
//   const link = document.createElement('a');
//   link.href = resumeUrl;
//   link.download = 'Resume.pdf';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }


