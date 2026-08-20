// Calcule l'âge automatiquement (né en 1982) sur tous les éléments .js-age
document.addEventListener('DOMContentLoaded', function () {
  var age = new Date().getFullYear() - 1982;
  document.querySelectorAll('.js-age').forEach(function (el) {
    el.textContent = age + ' ans';
  });
});
