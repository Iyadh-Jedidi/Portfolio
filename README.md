# Portfolio — Iyadh Jedidi

Portfolio Angular 22, responsive, en français et en anglais.

## Développement

Node.js 24.15 ou version 24 ultérieure recommandé.

```sh
npm ci
npm start
```

L’application est disponible sur http://localhost:4200.

## Production

```sh
npm run build
```

Le dossier `dist/` est autonome et peut être servi par un hébergement statique.

## Contenu

- `src/app/portfolio-data.ts` : projets, compétences et expériences.
- `src/app/app.component.html` : sections et textes français/anglais.
- `src/styles.css` : thème et styles responsive.
- `public/images/` : images récupérées depuis le portfolio original.

Contenu repris de https://iyadh-395221.nw.r.appspot.com/ le 8 septembre 2026. Les dates des expériences correspondent aux indications du portfolio source ; l’âge n’est pas repris afin d’éviter une information périmée. Les liens de certifications ont été nettoyés d’une accolade finale présente dans les URLs originales. Deux images secondaires de Feelgood renvoyaient 404 et ne sont pas utilisées.

Aucun formulaire serveur ni service externe n’est nécessaire. Le contact ouvre le client e-mail. Les fiches projets utilisent la boîte de dialogue native du navigateur, avec fermeture Échap et restitution du focus.

## Mise à jour depuis le CV

Les missions, projets, compétences et dates Equalios ont été actualisés à partir du CV Novencia fourni le 8 septembre 2026 (`Iyadh_JEDIDI_20260827_Novencia.pdf`). Ce document est prioritaire en cas de divergence. L’entrée Novencia, les coordonnées, les langues et les liens de certifications déjà présents sont conservés depuis le portfolio original. Le PDF lui-même n’est pas inclus dans les fichiers publics.

## GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` compile et publie le site à chaque push sur `main`. Dans les paramètres du dépôt, choisir **Pages → Source → GitHub Actions**. GitHub Pages doit être disponible pour le dépôt (dépôt public sur le forfait gratuit, ou forfait compatible avec les dépôts privés).

La compilation utilise `--base-href /Portfolio/`. Les images et les polices fonctionnent également sous ce chemin. Adresse prévue après activation : https://iyadh-jedidi.github.io/Portfolio/.
