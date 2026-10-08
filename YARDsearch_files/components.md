# Composants — `src/components/`

## `Topbar.jsx`
Barre de navigation horizontale, `position: sticky`, `z-index: 100`.

**Props**
- `onNavigate(pageId)` — appelée au clic sur un item de nav
- `currentPage` — string, pour le style actif

**État interne**
- `notif` (boolean) — point rouge sur la cloche, passe à `false` au clic (simulation "vu")

**Contenu observé dans l'UI actuelle**
- Logo YARDsearch (icône + nom en Syne 800)
- Navigation : Accueil, Professionnels, Matching *(badge "Nouveau")*, Bons plans, Historique, Projet, Post
- Zone droite : cloche de notification, cadenas (paiements sécurisés), avatar utilisateur

**Style actif** : `background: rgba(255,255,255,0.15)` + `color:#fff` (vs 70% opacité pour les inactifs).

---

## `Sidebar.jsx`
Menu latéral gauche, largeur fixe 260px, fond blanc, bordure droite.

**Props**
- `onNavigate(pageId)`
- `currentPage`

**Sections** (tableau `sections`) :

| Section | Items |
|---|---|
| Navigation | Tableau de bord, Chercher un pro, Matching *(badge Nouveau)*, Mes devis *(badge 3)*, Paiements sécurisés, Notification, Projet, Messagerie *(badge 5)*, Social |
| Communauté | Mes connexions, Bons plans matériel, Mon profil & réputation, Archives de chantier, Collaboration entre particuliers |
| Compte | Signalement |

**Item actif** : fond `#e8f5ee` (ou variante rouge de marque si aligné sur la nouvelle charte), bordure gauche 3px, texte foncé, `font-weight: 500`.

**Badges** : pastilles affichant un compteur — actuellement codées en dur dans `sections`, à remplacer par des compteurs dynamiques depuis l'API.

---

## `ProCard.jsx`
Carte réutilisable affichant le profil d'un professionnel.

**Props**
- `pro` — objet artisan (voir `data/mockData.js`)

**État interne**
- `fav` (boolean) — bascule ♡ / ♥ au clic sur le bouton favori

**Contenu affiché**
- Point de disponibilité (vert si `pro.dispo`, gris sinon) — coin haut-droit
- Avatar coloré avec initiales (`pro.color`)
- Nom, métier, étoiles (`★` × `Math.floor(pro.stars)`), nombre d'avis
- Tags de compétences
- Tarif indicatif (ex : "À partir de 65€/h")
- Bouton **Contacter** (à connecter à la Messagerie) + bouton favori

**Utilisation**
```jsx
import ProCard from "../components/ProCard";
<ProCard pro={unObjetPro} />
```
