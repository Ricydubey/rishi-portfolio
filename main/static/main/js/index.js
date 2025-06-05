const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('active');
});

function downloadResume() {
  const link = document.createElement('a');
  link.href = "{% static 'main/resume.pdf' %}";
  link.download = 'Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("Resume successfully downloaded!");
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


