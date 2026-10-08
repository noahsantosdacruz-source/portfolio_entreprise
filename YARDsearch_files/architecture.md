# Architecture — fichiers racine

## `index.html`
Point d'entrée HTML unique de l'application (SPA). Contient uniquement `<div id="root">`. Vite injecte automatiquement `/src/main.jsx` via `<script type="module">`. Aucune logique métier — à modifier seulement pour le titre d'onglet ou les meta tags SEO.

## `vite.config.js`
Configuration Vite. Active `@vitejs/plugin-react` (JSX + Fast Refresh).
À compléter : proxy vers l'API Laravel (`server.proxy`), variables d'environnement (`define`), alias de chemins (`resolve.alias`).

## `package.json`
- **Prod** : `react`, `react-dom` v18
- **Dev** : `vite` v5, `@vitejs/plugin-react`
- **Scripts** : `dev`, `build`, `preview`

## `src/main.jsx`
Monte `<App />` dans `#root` via `createRoot`, enveloppé dans `<StrictMode>`.
Ne se modifie que pour ajouter un Provider global (auth, React Query, Redux...).

## `src/App.jsx`
Composant racine et routeur principal.

- State `page` (via `useState`) détermine la page affichée — remplace `react-router-dom` pour garder le projet simple en solo.
- `onNavigate` (= `setPage`) est passé en cascade à `Topbar`, `Sidebar`, et aux boutons internes des pages.

```
<App>
  <Topbar onNavigate currentPage />
  <div class="layout">
    <Sidebar onNavigate currentPage />
    <main>
      {page === "accueil"    && <Accueil />}
      {page === "pros"       && <Professionnels />}
      {page === "bonsplans"  && <BonsPlans />}
      {page === "devis"      && <Devis />}
      {page === "messagerie" && <Messagerie />}
      {/* page inconnue → écran "en construction" */}
    </main>
  </div>
</App>
```

**Pages déclarées** : `accueil`, `pros`, `bonsplans`, `devis`, `messagerie`.

**À prévoir** (visibles dans la nav mais pas encore branchées) : `matching`, `historique`, `projet`, `post`, `paiements`, `notifications`, `social`, `connexions`, `bons-plans-materiel` (sidebar), `profil`, `archives-chantier`, `collaboration`, `signalement`.

## Variables d'environnement

`.env.local` à la racine :

```env
VITE_API_URL=http://localhost:8000/api/v1
VITE_GRAPHQL_URL=http://localhost:8000/graphql
VITE_MQTT_BROKER=wss://broker.hivemq.com:8884/mqtt
```

Accès dans le code : `import.meta.env.VITE_API_URL`

## Stack recommandée

| Couche | Technologie | Coût |
|---|---|---|
| Frontend | React 18 + Vite | Gratuit |
| Backend | Laravel (PHP) + Sanctum | Gratuit |
| API | GraphQL via Lighthouse | Gratuit |
| Base de données | PostgreSQL via Supabase (Frankfurt) | Gratuit (500 Mo) |
| Cache / Queues | Redis via Upstash | Gratuit (10k req/j) |
| Temps réel | MQTT via HiveMQ Cloud | Gratuit |
| Deploy frontend | Vercel | Gratuit |
| Deploy backend | Railway | ~5€/mois |
| **Total** | | **~5–10€/mois** |

## Ordre de branchement API conseillé

1. Authentification — OAuth2/Sanctum, token stocké côté client
2. Listing pros — `GET /api/v1/pros` à la place de `mockData.pros`
3. Création devis — `POST /api/v1/devis` depuis `Devis.jsx`
4. Messagerie temps réel — WebSockets ou MQTT
5. Géolocalisation bons plans — `GET /api/v1/bons-plans?lat&lng`
6. Système d'étoiles — `POST /api/v1/pros/{id}/avis`
