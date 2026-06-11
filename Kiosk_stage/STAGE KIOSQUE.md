**STAGE KIOSQUE**





utilisation rasberry et de ce qui autour pour utiliser

linux sur kiosque (ecran)



mondialisation afrique



vscode



GitHub

stie web

devopps

Docker



recherche des infos sur ça et m'informer le plus possible sur ça





OKEN CONSULTING LA PAGE





\*\*Oken Consulting\*\*, en tant qu'Entreprise de Services du Numérique (ESN) basée en Île-de-France, se positionne comme un partenaire technique pour les entreprises (PME et Grands Comptes) qui cherchent à moderniser leur infrastructure ou à développer des produits numériques sur mesure.



Voici un zoom détaillé sur leur mode de fonctionnement, leur stack technique et leur valeur ajoutée :



\### 1. Les Domaines d'Intervention Phares



\* \*\*Ingénierie Logicielle \& Développement Web/Mobile :\*\* C'est le cœur de leur métier. Ils conçoivent des architectures logicielles évolutives et robustes. Leurs équipes interviennent aussi bien sur la refonte d'anciens systèmes (\*legacy\*) que sur la création de plateformes de zéro.

\* \*\*Transformation Cloud \& DevOps :\*\* Ils aident les entreprises à migrer leurs applications vers le Cloud pour gagner en flexibilité et réduire les coûts d'infrastructure. L'accent est mis sur l'automatisation (CI/CD) pour permettre aux équipes de développement de livrer des fonctionnalités plus rapidement et sans interruption de service.

\* \*\*Infogérance et Support Système/Réseau :\*\* Au-delà du développement, ils proposent le suivi, la sécurisation et la maintenance opérationnelle des infrastructures serveurs pour garantir une disponibilité maximale des outils de travail.



\---



\### 2. La Stack Technique (Les Technologies Maîtrisées)



Leurs consultants et développeurs s'appuient sur des technologies éprouvées et hautement demandées sur le marché :



| Couche Applicative | Technologies \& Frameworks |

| --- | --- |

| \*\*Backend\*\* | Java (Spring Boot), PHP (Symfony / Laravel), Node.js |

| \*\*Frontend\*\* | Angular, React, Vue.js (pour des interfaces fluides et responsives) |

| \*\*Cloud \& Conteneurs\*\* | Amazon Web Services (AWS), Microsoft Azure, Docker, Kubernetes |

| \*\*DevOps / CI-CD\*\* | Jenkins, GitLab CI, Ansible, Terraform |



\---



\### 3. Modèles d'Accompagnement



Selon les besoins du client, l'ingénierie se décline souvent sous deux formats classiques du secteur :



1\. \*\*L'Assistance Technique (Régie) :\*\* Un ou plusieurs consultants experts intègrent directement les équipes du client pour renforcer un projet en cours et apporter une compétence précise (ex: un Tech Lead Java ou un Ingénieur DevOps).

2\. \*\*Le Forfait :\*\* Oken Consulting prend en charge l'intégralité d'un projet, du cahier des charges à la livraison finale, avec un engagement sur le calendrier et le budget.



> \*\*Ce qui fait leur force :\*\* En combinant l'agilité du développement moderne (DevOps) et une solide maîtrise des environnements Cloud, ils permettent aux entreprises d'éviter le "piège" des architectures rigides et difficiles à faire évoluer.





L'utilisation d'un \*\*Raspberry Pi\*\* pour piloter un kiosque (borne interactive, affichage dynamique, ou guichet automatique) est une excellente solution, très prisée par les ESN et les directions techniques. C'est économique, fiable, et cela consomme très peu d'énergie.



Voici un guide complet pour concevoir, configurer et sécuriser un kiosque sous Raspberry Pi.



\---



\### 1. Le Choix du Matériel



Pour un kiosque fluide et durable, la configuration matérielle est cruciale :



\* \*\*Le Raspberry Pi :\*\* Le \*\*Raspberry Pi 4 (4 Go ou 8 Go)\*\* ou le \*\*Raspberry Pi 5\*\* sont idéaux. Ils gèrent parfaitement le double écran 4K et possèdent la puissance nécessaire pour faire tourner des applications web lourdes (JavaScript/Animations).

\* \*\*Le Stockage :\*\* Évitez les cartes microSD standards pour un usage industriel, elles grillent rapidement à cause des écritures répétées. Optez pour une \*\*carte microSD "Endurance"\*\* (conçue pour la vidéosurveillance) ou, idéalement, un \*\*SSD connecté en USB 3\*\*.

\* \*\*L'Écran :\*\* Un écran tactile capacitif (connecté en HDMI + USB pour le tactile).



\---



\### 2. L'Architecture Logicielle : Quelle approche choisir ?



Il existe deux grandes manières de transformer un Raspberry Pi en kiosque :



\#### Option A : L'approche Web (La plus courante)



Le Raspberry Pi affiche simplement un navigateur web (Souvent Chromium) en plein écran, pointant vers une application web locale ou distante.



\* \*\*Avantages :\*\* Mise à jour ultra-simple (il suffit de mettre à jour le site web sur le serveur), interface moderne en HTML/CSS/React/Angular.

\* \*\*Outils dédiés :\*\* Des OS comme \*\*FullPageOS\*\* sont pré-configurés uniquement pour cela : vous l'installez, vous donnez l'URL, et le Pi démarre directement sur votre site en plein écran, sans bureau ni curseur de souris.



\#### Option B : L'approche Applicative (Native)



Développer une application dédiée qui s'exécute directement sur le Pi.



\* \*\*Avantages :\*\* Idéal si le kiosque doit interagir avec du matériel physique (imprimante de tickets, lecteur de cartes bancaires, capteurs RFID) via les broches GPIO ou les ports USB.

\* \*\*Technologies :\*\* Python (avec les bibliothèques `Tkinter` ou `PyQt`), ou Node.js/Electron.



\---



\### 3. Guide de Configuration : Le "Mode Kiosque" sous Raspberry Pi OS



Si vous utilisez \*\*Raspberry Pi OS\*\* (version Lite, sans environnement de bureau lourd pour maximiser les performances), voici les étapes clés pour verrouiller le système :



\#### Étape 1 : Installer un serveur d'affichage léger



On installe un gestionnaire de fenêtres minimal (comme `Openbox`) et le navigateur Chromium.



```bash

sudo apt update

sudo apt install --no-install-recommends xserver-xorg x11-xserver-utils xinit openbox chromium-browser



```



\#### Étape 2 : Configurer le démarrage d'Openbox



On modifie le script de démarrage d'Openbox (`/etc/xdg/openbox/autostart`) pour y intégrer les règles du kiosque :



```bash

\# Désactiver la mise en veille de l'écran et l'économiseur d'énergie

xset s off

xset s noblank

xset -dpms



\# Masquer le curseur de la souris (optionnel, utile si 100% tactile)

\# (Nécessite d'installer le paquet 'unclutter')

unclutter -idle 0.1 -root \&



\# Lancer Chromium en mode Kiosque

chromium-browser --noerrdialogs --disable-infobars --kiosk https://votre-url-de-kiosque.com \&



```



\#### Étape 3 : Lancer l'interface au démarrage du Pi



On configure le système pour que l'utilisateur `pi` se connecte automatiquement en ligne de commande, puis on ajoute `startx` dans le fichier `\~/.bash\_profile` pour lancer l'interface graphique immédiatement.



\---



\### 4. Les Bonnes Pratiques pour la Production (Sécurité \& Robustesse)



Déployer un kiosque dans un lieu public demande de la rigueur pour éviter qu'un utilisateur ne pirate l'affichage ou que le système ne plante :



\* \*\*Bloquer les interactions physiques :\*\* Désactivez les raccourcis clavier (comme `Alt+F4` ou `Ctrl+Alt+T`) dans la configuration d'Openbox pour éviter qu'un utilisateur avec un clavier USB caché ne quitte le mode kiosque.

\* \*\*Système de fichier en lecture seule (Read-Only) :\*\* C'est la règle d'or. Les kiosques sont souvent éteints brutalement (coupure de courant). En activant le mode "Overlay FS" dans l'utilitaire `raspi-config`, le système devient impossible à corrompre car rien n'est écrit sur le disque dur. Au redémarrage, le Pi revient exactement à son état d'origine.

\* \*\*Watchdog (Chien de garde) :\*\* Activez le Watchdog matériel du Raspberry Pi. Si l'application ou l'OS freeze, le Pi redémarre automatiquement après quelques secondes.

\* \*\*Gestion de la chaleur :\*\* Un kiosque est souvent enfermé dans un caisson. Utilisez un boîtier de dissipation thermique passif (en aluminium) pour éviter la surchauffe sans dépendre d'un ventilateur qui va accumuler la poussière.



\---


Les **HATs** (qui signifie *Hardware Attached on Top*, ou "matériel attaché au-dessus") sont des cartes d'extension électroniques conçues spécialement pour s'emboîter parfaitement sur le Raspberry Pi.

Pour reprendre ton image, ils ont souvent **exactement la taille d'une carte bleue** (ou la taille exacte du Raspberry Pi) et viennent se clipser directement sur les 40 broches (les "petits pics" noirs, appelés le port GPIO) du Raspberry Pi.

Dans le cadre de ton stage sur les kiosques, c'est un élément central. Voici tout ce qu'il faut savoir sur les HATs, pourquoi ils sont indispensables en entreprise (ESN) et lesquels tu risques d'utiliser :

---

### 1. Pourquoi utilise-t-on un HAT plutôt que des câbles ?

Si tu branches des capteurs ou des modules avec des fils de prototypage (les petits câbles de couleur), ton montage va ressembler à une "assiette de spaghettis". Pour un projet d'étude c'est bien, mais **pour un kiosque professionnel, c'est interdit** : un fil peut se débrancher avec les vibrations du transport ou de l'utilisation, et la borne tombe en panne.

* **Robustesse (Prêt pour l'industrie) :** Le HAT se clipse solidement. On peut même le visser au Raspberry Pi grâce à des entretoises. Rien ne bouge.
* **Simplicité logicielle (Plug & Play) :** Les HATs intègrent une petite mémoire (EEPROM) qui dit automatiquement au système Linux du Raspberry Pi : *"Hé, je suis une carte 4G, configure mes pilotes automatiquement !"*. Pas besoin de passer des heures à chercher des drivers complexes sous Linux.
* **Gain de place :** Comme ils se superposent (en "sandwich"), le tout reste très compact et rentre facilement dans le caisson métallique ou en plastique du kiosque.

---

### 2. Les HATs indispensables pour un Kiosque (Exemples concrets)

Dans le déploiement de bornes interactives, voici les HATs les plus utilisés sur le marché :

#### A. Le HAT 4G / 5G (Connectivité)

Si ton kiosque est installé dans la rue, dans une gare ou dans une zone rurale (par exemple pour des projets liés au développement ou à la mondialisation en Afrique), il n'y aura pas de box internet Wi-Fi ou Ethernet à disposition.

* **Ce qu'il fait :** Il ajoute une antenne et un emplacement pour une **carte SIM**.
* **Intérêt pour le kiosque :** Permet à la borne d'envoyer des données, de mettre à jour le site web via GitHub, ou de signaler une panne à l'ESN (Oken Consulting) via le réseau mobile.

#### B. Le HAT NFC / RFID / Lecteur de carte (Paiement & Identification)

* **Ce qu'il fait :** Il intègre une puce capable de lire les badges ou les cartes sans contact lorsqu'on les approche du kiosque.
* **Intérêt pour le kiosque :** Permet à un utilisateur de s'identifier (badge d'étudiant, carte de fidélité, pass transport) ou d'effectuer un petit paiement si le HAT est certifié pour cela.

#### C. Le HAT PoE (Power over Ethernet)

* **Ce qu'il fait :** Il permet d'alimenter le Raspberry Pi en électricité directement par le câble réseau (Ethernet RJ45).
* **Intérêt pour le kiosque :** Au lieu d'avoir deux câbles (un câble pour internet + une prise de courant standard), tu n'as besoin que d'**un seul câble** qui amène internet ET l'électricité au kiosque depuis un répartiteur. C'est beaucoup plus propre et économique pour les installations de bornes dans les bâtiments professionnels.

#### D. Le HAT Écran / Tactile

Certaines cartes bleues sont en réalité de mini-écrans tactiles qui se clipsent directement sur le Pi sans aucun câble HDMI. C'est très utilisé pour faire des micro-kiosques ou des boîtiers de contrôle.

#### E. Le HAT "Power Management" / UPS (Batterie de secours)

* **Ce qu'il fait :** Il gère l'alimentation et embarque une batterie (comme une banque d'alimentation).
* **Intérêt pour le kiosque :** Si quelqu'un débranche la borne ou s'il y a une coupure de courant, le HAT prend le relais immédiatement. Il envoie un signal au système Linux pour lui dire : *"Attention, coupure de courant ! Éteins-toi proprement dans 30 secondes pour ne pas corrompre les fichiers"*.

---

### 3. Quel est le lien avec VS Code, GitHub et DevOps ?

En tant que stagiaire, tu te demandes peut-être comment on gère ça avec du code :

1. **Le code dans VS Code :** Tu vas écrire des scripts (souvent en Python ou en Node.js) qui vont utiliser des bibliothèques de code spécifiques pour interagir avec le HAT (par exemple, une bibliothèque pour dire à la puce NFC : `attendre_carte()`).
2. **La configuration dans GitHub / DevOps :** Grâce à des outils comme Docker, tu peux créer un conteneur qui embarque directement les autorisations Linux pour parler à ce HAT. Quand tu déploieras ton application sur les 50 bornes de l'entreprise, le code saura exactement comment utiliser le HAT dès le premier démarrage.



Pour comprendre **Docker**, oublie un instant l'informatique et imagine un vrai port de commerce avec des bateaux de marchandises.

Avant l'invention du **conteneur maritime** en métal, charger un bateau était un enfer : il y avait des sacs de café, des voitures, des caisses de vin... Tout se mélangeait, les bouteilles cassaient, et si un sac de café fuyait, il abîmait le reste. Aujourd'hui, on met tout dans des conteneurs standardisés en métal : peu importe ce qu'il y a dedans, ils ont tous la même taille, ils s'empilent parfaitement, et ce qui se passe dans un conteneur ne touche pas le voisin.

**Docker, c'est exactement ça, mais pour les applications et le code.**

---

## Le problème que Docker résout (Le cauchemar des développeurs)

Tu as sûrement déjà entendu ou dit cette phrase :

> *"Pourtant, ça marchait sur mon PC ! Je ne comprends pas pourquoi ça ne marche pas sur le tien..."*

C'est le problème n°1 en informatique. Ton application web de kiosque fonctionne super bien sur ton ordinateur portable (Windows ou Mac), mais quand tu la mets sur le Raspberry Pi (Linux) en stage, plus rien ne marche parce que :

* La version de Node.js ou de Python n'est pas tout à fait la même.
* Il manque une petite bibliothèque système sur le Raspberry Pi.
* Un paramètre caché de Linux bloque l'affichage.

---

## La solution : Le "Conteneur" Docker

Avec Docker, tu vas créer une boîte virtuelle (un **conteneur**) dans laquelle tu mets :

1. Ton code (ton site web de kiosque).
2. Juste le mini-système Linux nécessaire pour le faire tourner.
3. Les outils exacts dont ton code a besoin (ex: Node.js version 20.1, et rien d'autre).

Tu lances une commande, et Docker "emballe" tout ça dans une **image**.

### Pourquoi c'est magique pour ton projet de Kiosque ?

* **Garantie "Ça marche partout" :** Si le conteneur Docker tourne sur ton PC avec VS Code, il tournera **exactement de la même manière** sur le Raspberry Pi, sans que tu aies besoin d'installer manuellement Node.js ou des packages sur le Pi.
* **C'est ultra-léger :** Contrairement à une "Machine Virtuelle" (comme VirtualBox) qui doit simuler un ordinateur entier et prend 10 Go de RAM, un conteneur Docker partage les ressources du Raspberry Pi. Il démarre en 2 secondes et consomme presque rien. C'est parfait pour la puissance limitée d'un Raspberry Pi.
* **Nettoyage en un clic :** Si tu fais une erreur dans ton code ou que tu installes un outil qui fait bugger ton application, tu détruis le conteneur et tu en relances un tout neuf en 2 secondes. Ton Raspberry Pi reste toujours "propre".

---

## Le lien direct avec le DevOps et Oken Consulting

Dans une ESN (Entreprise de Services du Numérique), Docker est l'outil **indispensable** du mouvement DevOps. Voici comment la chaîne va se passer durant ton stage :

```
[ Code sur VS Code ] ➔ [ Poussé sur GitHub ] ➔ [ GitHub Actions crée l'image Docker ] ➔ [ Déploiement automatique sur le Raspberry Pi ]

```

1. Tu écris le code du kiosque dans **VS Code**.
2. Tu écris un petit fichier texte appelé `Dockerfile` (la "recette de cuisine" pour fabriquer ton conteneur).
3. Tu envoies le tout sur **GitHub**.
4. Les outils **DevOps** récupèrent ton code, fabriquent automatiquement le conteneur Docker, et l'envoient sur les 50 Raspberry Pi de l'entreprise via Internet.

Sur les Raspberry Pi, il y a juste besoin d'avoir Docker installé. On lui dit : *"Télécharge le conteneur du projet Kiosque et lance-le"*. En moins de 10 secondes, ta borne est à jour, sécurisée, et isolée du reste du système.


Voici la liste des applications et outils indispensables que tu vas manipuler pour l'ensemble de ce projet de kiosque (du développement jusqu'à l'installation sur le Raspberry Pi).

Je te les ai classés par catégorie pour que tu t'y retrouves facilement :

---

## 1. Pour coder et gérer ton code (Ton quotidien)

* **VS Code (Visual Studio Code) :** Ton outil principal sur ton PC. C’est là que tu vas écrire le code du site web du kiosque, tes scripts Python, et tes fichiers de configuration.
* *Astuce pro :* Tu installeras l'extension **"Remote - SSH"** dans VS Code. Elle te permet de coder sur ton PC mais de voir et modifier directement les fichiers qui sont à l'intérieur du Raspberry Pi, sans brancher de deuxième clavier/souris.


* **Git & GitHub :**
* **Git** (le logiciel en ligne de commande) te permet de sauvegarder l'historique de ton code.
* **GitHub** (le site web) te permet de stocker ton code en ligne, de travailler en équipe et de préparer l'automatisation (le DevOps).



---

## 2. Pour le déploiement et l'industrialisation (Le côté DevOps)

* **Docker Desktop :** L'application à installer sur ton PC pour créer, tester et lancer tes conteneurs en local avant de les envoyer sur le Raspberry Pi.
* **Portainer :** Une application avec une interface web super visuelle (très utilisée en entreprise) que tu installes sur le Raspberry Pi. Elle permet de surveiller, démarrer et arrêter tes conteneurs Docker en cliquant sur des boutons plutôt qu'en tapant des lignes de commande.
* **GitHub Actions / GitLab CI :** Des outils intégrés à GitHub (ou GitLab) qui automatisent les tâches. Dès que tu vas "pousser" ton code sur GitHub, l'outil va vérifier s'il n'y a pas d'erreurs, fabriquer ton conteneur Docker tout seul et le préparer pour le Raspberry Pi.

---

## 3. Pour configurer et piloter le Raspberry Pi (Depuis ton PC)

Puisque le Raspberry Pi sera dans un kiosque (sans clavier ni souris), tu vas le contrôler à distance depuis ton PC avec ces applications :

* **Raspberry Pi Imager :** Le logiciel officiel à installer sur ton PC pour flasher (installer) le système d'exploitation Linux (Raspberry Pi OS) sur la carte microSD ou le SSD de ton Pi.
* **Un client SSH (comme PuTTY ou tout simplement le Terminal de ton PC) :** Pour te connecter à distance au Raspberry Pi en tapant des lignes de commande Linux.
* **Un client SFTP (comme FileZilla ou Cyberduck) :** Une application qui ressemble à un dossier Windows, mais qui te permet de glisser-déposer des fichiers (images, vidéos, configurations) directement depuis ton PC vers le Raspberry Pi à travers le réseau.
* **VNC Viewer (ou AnyDesk) :** Si tu as besoin de voir l'écran du Raspberry Pi à distance sur ton propre PC pour vérifier que l'affichage du kiosque est correct.

---

## 4. Pour le système "Kiosque" sur le Raspberry Pi

Ce sont les applications internes à Linux qui font tourner la borne :

* **FullPageOS :** Une version modifiée de Linux (un OS complet) conçue exprès pour les kiosques. Tu l'installes, et elle démarre directement sur Chromium en plein écran sans aucune configuration.
* **Chromium :** La version open-source de Google Chrome. C’est l'application qui va tourner en arrière-plan sur le kiosque pour afficher ton site web en mode `--kiosk`.
* **Unclutter :** Une mini-application Linux essentielle qui sert à cacher automatiquement le curseur de la souris au bout de 1 ou 2 secondes d'inactivité (indispensable pour les écrans tactiles).

Raspberry piloter à distance depuis une interface sous linux pour afficher des publicité type page web 

0