// Détection de l'intersection pour afficher la description au scroll sur mobile
// Fonctionne uniquement quand l'image est centrée à l'écran

document.addEventListener('DOMContentLoaded', function() {
  // Vérifier si on est en mode mobile (largeur < 768px)
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    const cards = document.querySelectorAll('.realisation-card');
    
    // Créer un observer pour détecter quand les cartes sont au centre de l'écran
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const card = entry.target;
        const overlay = card.querySelector('.realisation-card-overlay');
        
        if (overlay) {
          // Calculer si la carte est bien centrée
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          const viewportWidth = window.innerWidth;
          
          // La carte est considérée comme centrée si elle est à peu près au milieu de l'écran
          const isCentered = (
            rect.top >= viewportHeight * 0.25 &&
            rect.bottom <= viewportHeight * 0.75 &&
            rect.left >= viewportWidth * 0.1 &&
            rect.right <= viewportWidth * 0.9
          );
          
          if (entry.isIntersecting && isCentered) {
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
          } else {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
          }
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });
    
    // Observer toutes les cartes
    cards.forEach(card => {
      observer.observe(card);
    });
    
    // Recalculer au scroll et au redimensionnement
    window.addEventListener('scroll', () => {
      cards.forEach(card => {
        const overlay = card.querySelector('.realisation-card-overlay');
        if (overlay) {
          const rect = card.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const viewportWidth = window.innerWidth;
          
          const isCentered = (
            rect.top >= viewportHeight * 0.25 &&
            rect.bottom <= viewportHeight * 0.75 &&
            rect.left >= viewportWidth * 0.1 &&
            rect.right <= viewportWidth * 0.9
          );
          
          if (rect.top < viewportHeight && rect.bottom > 0 && isCentered) {
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
          } else {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
          }
        }
      });
    });
    
    window.addEventListener('resize', () => {
      // Recréer l'observateur si la taille change significativement
      if (window.innerWidth >= 768) {
        cards.forEach(card => {
          const overlay = card.querySelector('.realisation-card-overlay');
          if (overlay) {
            overlay.style.opacity = '';
            overlay.style.visibility = '';
          }
        });
      }
    });
  }
});
