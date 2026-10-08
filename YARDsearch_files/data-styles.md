# Données & styles

## `src/data/mockData.js`
Données statiques simulant une réponse d'API. À remplacer par des appels `fetch` ou GraphQL vers le backend Laravel.

| Export | Structure | Contenu |
|---|---|---|
| `pros` | `id, name, metier, stars, avis, tags, prix, color, initials, dispo` | 6 artisans |
| `messages` | `id, name, preview, time, color, initials, unread` | 3 conversations récentes |
| `devis` | `id, label, montant, status ("wait"\|"ok"\|"prog")` | 3 devis en cours |
| `chantiers` | `id, name, dates, progress (0–100), color` | 3 chantiers actifs |
| `bonsPlans` | `id, type, name, loc, promo, dist` | 6 fournisseurs locaux |
| `stats` | `num, label, trend` | 4 indicateurs clés |

**Migration vers API** : remplacer chaque export par un custom hook (`usePros()`, `useMessages()`, ...) appelant `fetch('/api/v1/pros')` avec le token Sanctum en header.

---

## `src/styles/global.css`
Feuille de styles globale unique — pas de CSS Modules ni de styled-components.

**Variables CSS (`:root`)**

| Variable | Rôle |
|---|---|
| `--c1` → `--c4` | Nuances de la couleur de marque (vert forêt dans la v1, rouge/bordeaux dans YARDsearch) |
| `--c5` | Fond général |
| `--cot`, `--cot2` | Accents dorés/orangés pour les CTA |
| `--text`, `--muted` | Texte principal / secondaire |
| `--white`, `--border` | Surface et bordures |
| `--rad` | Border-radius standard (12px) |
| `--shadow` | Ombre portée standard |

**Polices** : `Syne` (titres, logo, chiffres) + `DM Sans` (corps de texte).

**Classes utilitaires principales**

- `.app`, `.layout`, `.main`, `.main-inner` — structure générale
- `.hero` — bloc d'accroche dégradé
- `.search-bar` — barre de recherche du hero
- `.btn-primary`, `.btn-dark`, `.btn-outline` — boutons
- `.stats-row`, `.stat-card` — grille de métriques
- `.pros-grid`, `.pro-card` — grille et carte professionnel
- `.two-cols` — mise en page deux colonnes (devis + chantiers)
- `.msgs-card`, `.msg-list`, `.msg-item` — messagerie récente
- `.tab-bar`, `.tab-btn` — filtres à onglets
- `.bons-plans-grid`, `.bp-card` — grille bons plans
- `.form-card`, `.form-group`, `.form-grid` — formulaire de devis
- `.progress-bar`, `.progress-fill` — progression chantier
- `@media(max-width:900px)` — adaptation tablette/mobile

**Note de charte** : l'interface actuelle utilise une palette rouge/bordeaux + or (`#7a1620`, `#d4a574`) plutôt que le vert forêt initial — penser à mettre à jour les variables `--c1`–`--c4` en conséquence si ce n'est pas déjà fait.
