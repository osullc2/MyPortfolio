// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('open');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
    
    // Close menu when clicking on links
    navLinks.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});

