# CV — Thibaut Hiernard

Site personnel en **HTML / CSS / JavaScript pur**, sans framework ni générateur (pas de build, pas de dépendances à installer).

- **HTML5** — une page par section, contenu statique
- **CSS3** — une seule feuille de style partagée (`style.css`), variables CSS, layout en Grid/Flexbox
- **JavaScript vanilla (ES6)** — un seul script (`script.js`), sans librairie
- **Polices** — Outfit & Inter, chargées via Google Fonts (`@import` dans `style.css`)

## Fichiers

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil — profil, expertises, aperçu des réalisations, de l'expérience et des formations |
| `realisations.html` | Réalisations — projets et applications cartographiques |
| `parcours.html` | Parcours — timeline chronologique (expériences + formations) |
| `blog.html` | Blog — à venir |
| `ressources.html` | Ressources — à venir |
| `contact.html` | Contact |
| `style.css` | Feuille de style unique, partagée par toutes les pages |
| `script.js` | Calcul automatique de l'âge, surlignage du lien de nav actif au scroll |

## Dossier `assets/`

Images et icônes du site : photo de profil, logo du ruban de navigation, favicons (`favicon.ico`, `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`), visuels des réalisations, logos Orléans Métropole / Nantes Métropole.

## Publier sur GitHub Pages

Le dépôt est sur `https://github.com/thibauthiernard/cv-test`

```bash
cd chemin/vers/le/dossier/du/site

git init
git remote add origin https://github.com/thibauthiernard/cv-test.git
git add .
git commit -m "Mise à jour du site"
git branch -M main
git push -u origin main
```

Si le dépôt contient déjà des fichiers et que le push est refusé :

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

Puis, pour activer l'hébergement gratuit GitHub Pages : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.

Le site est disponible à l'adresse : `https://thibauthiernard.github.io/cv-test/`
