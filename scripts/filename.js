var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

// Hamburger menu toggle
var hamburgerBtn = document.getElementById('hamburger-btn');
var mainNav = document.getElementById('main-nav');

if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener('click', function() {
    var isOpen = mainNav.classList.toggle('nav-open');
    hamburgerBtn.classList.toggle('is-open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Auto-close nav when a link is tapped (single-page scroll site)
  mainNav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mainNav.classList.remove('nav-open');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}
