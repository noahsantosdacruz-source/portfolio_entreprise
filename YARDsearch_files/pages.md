# Pages — `src/pages/`

## `Accueil.jsx`
Dashboard principal, première page vue à l'ouverture.

**Props** : `onNavigate(pageId)`

**État interne** : `searchQuery`, `region`

**Sections, dans l'ordre :**
1. **Hero** — bloc d'accroche avec barre de recherche ("Carreleur, électricien, plombier..." + sélecteur de région). Redirige vers `pros` si saisie > 1 caractère, ou touche `Enter`.
2. **Stats row** — 4 cartes de métriques (ex : artisans vérifiés, satisfaction client, temps de réponse moyen, frais de mise en relation), générées depuis `stats`.
3. **Professionnels en vedette** — 3 premières `<ProCard>`, bouton "Voir tous" → `pros`.
4. **Deux colonnes** — Devis en cours (badge coloré par statut) / Mes chantiers (barre de progression).
5. **Messagerie récente** — clic sur un item → `messagerie`.

---

## `Professionnels.jsx`
Recherche et listing des artisans.

**État interne** : `activeFilter` (défaut `"Tous"`)

**Filtres** : Tous, Plombier, Électricienne, Carreleur, Maçon, Menuisier, Peintre.

```js
const filtered = activeFilter === "Tous"
  ? pros
  : pros.filter(p => p.metier === activeFilter);
```

Grille de `<ProCard>` filtrée, ou écran vide si aucun résultat.

**À connecter** : `GET /api/v1/pros?metier=Plombier` avec pagination.

---

## `BonsPlans.jsx`
Répertoire des fournisseurs et négoces locaux.

Pas d'état local. Grille 3 colonnes depuis `bonsPlans`. Chaque carte : type de commerce, nom, localisation, promotion, distance estimée.

**À connecter** : `GET /api/v1/bons-plans?lat=...&lng=...&rayon=20`.

---

## `Devis.jsx`
Formulaire de création de demande de devis.

**État interne** : `form` (`type`, `description`, `surface`, `budget`, `date`), `sent` (boolean, bandeau de confirmation 3s)

**Champs** : type de travaux (select, 8 options), description (textarea), surface m² + budget € (2 colonnes), date souhaitée.

**Validation** : description non vide, sinon `alert`.

**À connecter** : `POST /api/v1/devis` — le backend crée le devis et notifie les artisans correspondants via matching.

---

## `Messagerie.jsx`
Chat interne client ↔ artisan.

**État interne** : `selected`, `input`, `chatHistory` (`{ [conversationId]: [{ from, text, time }] }`)

**Mise en page** : liste des conversations (280px, gauche) + zone de chat (droite).

Envoi via bouton ou `Enter`. Le `preview` de chaque conversation s'affiche comme premier message reçu ; les messages envoyés sont alignés à droite.

**À connecter** : WebSockets (Laravel Echo + Pusher/Soketi) ou MQTT (HiveMQ), historique via `GET /api/v1/conversations/{id}/messages`.

---

## Pages visibles dans la nav, non encore implémentées

D'après l'interface actuelle, ces entrées de navigation existent mais n'ont pas encore de page dédiée dans `src/pages/` :

| Page | Emplacement nav | Rôle probable |
|---|---|---|
| Matching | Topbar + Sidebar | Suggestions automatiques artisan ↔ besoin |
| Historique | Topbar | Historique des échanges / chantiers passés |
| Projet | Topbar + Sidebar | Suivi détaillé d'un projet en cours |
| Post | Topbar | Fil d'actualité ou publications communauté |
| Paiements sécurisés | Sidebar | Suivi des paiements protégés |
| Notification | Sidebar | Centre de notifications complet |
| Social | Sidebar | Interactions sociales entre utilisateurs |
| Mon profil & réputation | Sidebar (Communauté) | Profil public + avis reçus |
| Archives de chantier | Sidebar (Communauté) | Historique des chantiers terminés |
| Collaboration entre particuliers | Sidebar (Communauté) | Mise en relation hors artisans pros |
| Signalement | Sidebar (Compte) | Signaler un utilisateur ou contenu |
