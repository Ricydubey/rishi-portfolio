const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('active');
});


function downloadResume(button) {
  const resumeUrl = button.getAttribute('data-resume-url');
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Show the toast
  const toast = document.getElementById('toast');
  toast.classList.add('show');

  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
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


