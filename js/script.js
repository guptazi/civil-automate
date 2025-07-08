// Collapse mobile nav on link click
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
  const navCollapse = document.getElementById('navbarResponsive');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navCollapse).toggle();
      }
    });
  });
});
