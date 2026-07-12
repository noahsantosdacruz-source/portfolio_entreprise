# Portfolio — Noah Santos da Cruz

Portfolio de formation en BTS SIO (option SISR), regroupant mes TP, missions, certifications et projets réalisés en cours d'année et durant mon alternance. Site statique en HTML/CSS/JS, sans build ni dépendances.

**Voir en ligne :** activer GitHub Pages sur la branche `main` (Settings → Pages) pour publier `index.html` à la racine.

## Aperçu

- Une page d'accueil (`index.html`) avec mes compétences, une grille de projets filtrable par mot-clé/tag, et mes centres d'intérêt.
- Chaque projet de la grille pointe vers un fichier ou un dossier du dépôt (page HTML, PDF, document Office, lien externe).
- Le contenu de la grille est déclaré dans `script.js` — ajouter un projet revient à ajouter une entrée dans le tableau en haut du fichier.

## Structure du dépôt

```
index.html            Page principale du portfolio
script.js              Données des projets + logique de la grille/modale
styleest.css            Feuille de style de la page principale
```

Dossiers par TP, mission ou projet :

| Dossier | Contenu |
|---|---|
| `Kiosk_stage/` | Stage chez OKEN Consulting — client d'affichage dynamique Xibo sur Raspberry Pi (rapport, présentation, page explicative) |
| `Certifica/` | Attestations et certificats de l'atelier RGPD (modules 1 à 6) |
| `Convention_stage/` | Documents de convention de stage BTS SIO |
| `Dossier_CV/` | CV |
| `cisco.lamoula/` | Travaux pratiques Cisco Packet Tracer (routage RIP) |
| `Projet 2 PHP/` | Application PHP/MySQL de gestion de bibliothèque |
| `Projet_react/` | Composant météo en React |
| `Carrousel/` | Carrousel interactif de notions mathématiques |
| `CLI_entreprise/` | Outil en ligne de commande |
| `JMerise/`, `JMerisseMission/` | Premiers portfolios et exercices HTML/CSS/JS |
| `TP12/`, `calculatrice TP9/`, `column/`, `Formulaire/`, `page_persoconcept/`, `Persoconcept/`, `Margin/`, `style.css/`, `Amps/` | Travaux pratiques de formation (HTML/CSS/JS) |
| `Python/` | Scripts Python (calculatrice, jeu du juste prix, scraping…) |
| `PHOTO/` | Ressources visuelles utilisées par les différentes pages |

## Projet mis en avant : client Xibo en kiosque (stage)

Dans `Kiosk_stage/`, déploiement d'un client d'affichage dynamique Xibo sur Raspberry Pi :

- Chromium en plein écran (Wayland), lancé automatiquement au démarrage via un service systemd
- Connexion au CMS Xibo à travers un tunnel OpenVPN
- Documentation détaillée du déploiement et du dépannage dans `xibo_kiosk.html`

## Stack

HTML5, CSS3, JavaScript (vanilla), [Bootstrap 5](https://getbootstrap.com/) pour la mise en page — sans framework ni étape de build.

## Lancer en local

Aucune installation requise : ouvrir `index.html` dans un navigateur, ou servir le dossier avec un petit serveur local pour éviter les restrictions CORS sur certains liens :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Contact

- GitHub : [@noahsantosdacruz-source](https://github.com/noahsantosdacruz-source)
- Email : noahsantosdacruz@gmail.com
