# CV — Thibaut Hiernard

Site personnel en HTML/CSS/JS pur (aucun générateur), recréé à partir de
[thibaut-hiernard.com](https://www.thibaut-hiernard.com/) (DoYouBuzz).

## Contenu

- `index.html` — Accueil
- `experiences.html` — Expériences
- `formations.html` — Formations
- `competences.html` — Compétences
- `publications.html` — Publications
- `style.css` — feuille de style unique, partagée par toutes les pages
- `script.js` — bascule du menu sur mobile

Chaque page inclut sa propre copie de la barre latérale (nom, tags,
navigation) : c'est volontaire, pour rester en HTML pur sans générateur
de site. Pour modifier la barre latérale, il faut donc répéter le
changement dans les 5 fichiers `.html`.

## À personnaliser avant publication

- Le bouton « Me contacter sur LinkedIn » peut être remplacé par un
  lien `mailto:` (voir le commentaire dans `index.html`).
- Le lien de téléchargement du CV en PDF n'a pas été repris (le fichier
  n'était pas accessible directement) : ajoutez un fichier `cv.pdf`
  à la racine et un bouton `<a href="cv.pdf">Télécharger mon CV</a>`
  si besoin.
- Les images de postes du site d'origine sont hébergées sur DoYouBuzz
  et n'ont pas été reprises (mieux vaut héberger vos propres visuels
  dans le dépôt, par exemple dans un dossier `assets/`).

## Publier sur GitHub Pages

Le dépôt existe déjà : `https://github.com/thibauthiernard/cv`

Depuis le dossier contenant ces fichiers :

```bash
cd chemin/vers/cv-site

git init
git remote add origin https://github.com/thibauthiernard/cv.git
git add .
git commit -m "Premier import du site en HTML/CSS/JS"
git branch -M main
git push -u origin main
```

Si le dépôt GitHub contient déjà un fichier (README auto-généré à la
création), `git push` peut être refusé. Dans ce cas :

```bash
git pull origin main --allow-unrelated-histories
# régler les éventuels conflits, puis :
git push -u origin main
```

Ensuite, pour activer l'hébergement gratuit GitHub Pages :

1. Sur GitHub, ouvrez le dépôt `cv`.
2. Allez dans **Settings → Pages**.
3. Dans **Build and deployment → Source**, choisissez **Deploy from a
   branch**.
4. Choisissez la branche **main** et le dossier **/ (root)**, puis
   **Save**.
5. Au bout de quelques minutes, le site sera disponible à l'adresse
   `https://thibauthiernard.github.io/cv/`.

Vous pourrez ensuite pointer votre nom de domaine
`thibaut-hiernard.com` vers cette adresse (menu **Settings → Pages →
Custom domain**) si vous voulez le réutiliser.
