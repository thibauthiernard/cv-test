// Sur tactile (pas de vraie souris), affiche la description d'une carte
// "Réalisation" quand elle est centrée à l'écran pendant le scroll —
// équivalent du survol souris sur desktop. Fonctionne sur toutes les
// pages qui contiennent des .realisation-card (Accueil et Réalisations).

document.addEventListener('DOMContentLoaded', function () {
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHover) return; // Sur souris, le CSS :hover suffit — on ne fait rien.

  var cards = document.querySelectorAll('.realisation-card');
  if (!cards.length) return;

  // "Centrée" = la carte croise la bande verticale médiane de l'écran
  // (entre 35% et 65% de la hauteur du viewport). Un seul observer
  // suffit : IntersectionObserver recalcule tout seul à chaque scroll,
  // pas besoin d'écouter 'scroll' ou 'resize' en plus.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle('is-active', entry.isIntersecting);
    });
  }, {
    root: null,
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0
  });

  cards.forEach(function (card) {
    observer.observe(card);
  });
});
