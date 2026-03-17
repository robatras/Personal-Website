// ── Accordion ──────────────────────────────────────────
document.querySelectorAll('.accordion-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        var isOpen = this.getAttribute('aria-expanded') === 'true';

        // Close all panels first
        document.querySelectorAll('.accordion-trigger').forEach(function(t) {
            t.setAttribute('aria-expanded', 'false');
            t.nextElementSibling.style.maxHeight = null;
        });

        // If it wasn't open, open it
        if (!isOpen) {
            this.setAttribute('aria-expanded', 'true');
            var panel = this.nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});

// ── Hamburger menu ──────────────────────────────────────
var hamburger = document.getElementById('hamburger');
var navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
        var isOpen = navLinks.classList.toggle('is-open');
        hamburger.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Auto-close on link tap
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('is-open');
            hamburger.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// ── Nav scroll shadow ───────────────────────────────────
window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 20) {
        nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.4)';
    } else {
        nav.style.boxShadow = 'none';
    }
});
