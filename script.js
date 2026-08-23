// Calcule l'âge automatiquement (né en 1982) sur tous les éléments .js-age
document.addEventListener('DOMContentLoaded', function () {
  var age = new Date().getFullYear() - 1982;
  document.querySelectorAll('.js-age').forEach(function (el) {
    el.textContent = age + ' ans';
  });
});

// Surligne le lien de nav correspondant pendant le scroll sur la page d'accueil
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('[data-nav]');
  if (!sections.length) return;

  var navLinks = document.querySelectorAll('.topbar-nav a[data-section]');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var key = entry.target.getAttribute('data-nav');
      var link = document.querySelector('.topbar-nav a[data-section="' + key + '"]');
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(function (l) { l.classList.remove('is-scroll-active'); });
        link.classList.add('is-scroll-active');
      }
    });
  }, {
    root: null,
    rootMargin: '-45% 0px -50% 0px',
    threshold: 0
  });

  sections.forEach(function (section) { observer.observe(section); });
});
