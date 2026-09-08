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
