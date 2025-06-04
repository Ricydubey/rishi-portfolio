const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('active');
});

function downloadResume() {
  const link = document.createElement('a');
  link.href = "{% static 'main/Resume.pdf' %}";
  link.download = 'Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
