// Bascule du menu (légende) sur mobile
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav.map-index');
  var toggle = document.querySelector('.menu-toggle');
  if (!nav || !toggle) return;

  var isDesktop = window.matchMedia('(min-width: 861px)').matches;
  nav.setAttribute('data-open', isDesktop ? 'true' : 'false');

  toggle.addEventListener('click', function () {
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', open ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', String(!open));
  });
});
