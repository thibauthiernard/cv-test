/* ==========================================================================
   Sélecteur de langue FR / EN
   - Détecte la langue du navigateur au premier passage (fr par défaut si
     ni fr ni en ne sont détectés)
   - Mémorise le choix de l'utilisateur (localStorage) pour les visites suivantes
   - Met à jour l'état visuel (langue active en blanc) sur tous les boutons
     .lang-btn présents sur la page (ruban desktop et mobile)
   NB : le contenu du site est aujourd'hui uniquement en français. Ce script
   prépare la structure (attribut lang, état actif) pour une future
   traduction complète des pages ; il ne traduit pas encore le texte.
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";
  var SUPPORTED = ["fr", "en"];

  function detectBrowserLang() {
    var navLangs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "fr"];

    for (var i = 0; i < navLangs.length; i++) {
      var code = String(navLangs[i] || "").slice(0, 2).toLowerCase();
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return "fr";
  }

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {
      /* localStorage indisponible (navigation privée, cookies bloqués...) */
    }
    return null;
  }

  function getPreferredLang() {
    return getStoredLang() || detectBrowserLang();
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* stockage indisponible : on continue quand même */ }
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getPreferredLang());

    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        setLang(this.getAttribute("data-lang"));
      });
    }
  });
})();
