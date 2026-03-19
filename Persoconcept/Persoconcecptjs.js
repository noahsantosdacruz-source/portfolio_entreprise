
    const projects = [
      {id:1, title:"TP1", tags:["TP"], short:"TP1", image:"PHOTO/=voile.jpg", details:"Détails du projet 1 : stack, défis, résultats.", src:"test/testTp1.html"},
      {id:2, title:"TP2", tags:["TP"], short:"TP2", image:"PHOTO/=voile.jpg", details:"Détails du projet 2 : perf, SEO.", src:"Tp2.html"},
      {id:3, title:"TP3", tags:["TP"], short:"Formulaire", image:"PHOTO/=voile.jpg", details:"Détails du projet 3 : brand book, livrables.", src:"Formulaire/formulaireTp3.html"},
      {id:4, title:"TP4", tags:["TP"], short:"Liste", image:"PHOTO/=voile.jpg", details:"Détails du projet 4 : UX/UI, backend.", src:"liste d'ordinateurTP4.html"},
      {id:5, title:"TP5", tags:["TP"], short:"1st CSS", image:"PHOTO/=voile.jpg", details:"Détails du projet 5 : contenu, SEO.", src:"style.css/styleTP5.html"},
      {id:6, title:"TP6", tags:["TP"], short:"2nd CSS", image:"f4a3a950e1cd8ab6ece9a60ba624a5c8.gif", details:"Détails du projet 6 : data viz, interactivité.", src:"column.html"},
      {id:7, title:"Mission", tags:["Mission"], short:"Formulaire mission", image:"f4a3a950e1cd8ab6ece9a60ba624a5c8.gif", details:"Détails du projet 7.", src:"Formulaire/Formulaired'inscriptionTP6.html"},
      {id:8, title:"TP8", tags:["TP"], short:"Formulaire", image:"f4a3a950e1cd8ab6ece9a60ba624a5c8.gif", details:"Détails du projet 8.", src:"Formulaire/formulairesolo.html"},
      {id:9, title:"TP9", tags:["TP","Calculatrice.js"], short:"Calculatrice.js", image:"f4a3a950e1cd8ab6ece9a60ba624a5c8.gif", details:"Détails du projet 9.", src:"calculatrice TP9/train.html"},
      {id:10, title:"TP10", tags:["TP"], short:"Logiciel virtualisation", image:"f4a3a950e1cd8ab6ece9a60ba624a5c8.gif", details:"Détails du projet 10.", src:"logiciel de virtualisation TP10/Logiciel de virtualisation-3.pdf"},
      {id:11, title:"TP11", tags:["TP"], short:"Début", image:"f4a3a950e1cd8ab6ece9a60ba624a5c8.gif", details:"Détails du projet 11.", src:"TP12/tp11.html"},
      {id:12, title:"TP12", tags:["TP"], short:"Début", image:"f4a3a950e1cd8ab6ece9a60ba624a5c8.gif", details:"Détails du projet 12.", src:"TP12/TP12LARVEULEUSE.html"},
      {id:14, title:"Certification", tags:["Mission"], short:"Certification", image:"Capture d'écran 2025-11-05 001508.png", details:"Détails du projet 14.", src:"Capture d'écran 2025-11-05 001508.png"},
      {id:15, title:"TP13 AMPS", tags:["TP"], short:"AMPS", image:"Amps/Capture d'écran 2025-11-18 114517.png", details:"Détails du projet 15.", src:"Amps/Capture d'écran 2025-11-18 114517.png"},
      {id:16, title:"TP14 AMPS", tags:["TP"], short:"AMPS", image:"Amps/Capture d'écran 2025-11-18 114452.png", details:"Détails du projet 16.", src:"Amps/Capture d'écran 2025-11-18 114452.png"},
      {id:17, title:"RGPD Module 1", tags:["Mission","RGPD"], short:"L'atelier RGPD", image:"Certifica/module1.png", details:"Détails RGPD module 1.", src:"Certifica/Certificat_module1.pdf"},
      {id:18, title:"RGPD Module 2", tags:["Mission","RGPD"], short:"L'atelier RGPD", image:"Certifica/module2.png", details:"Détails RGPD module 2.", src:"Certifica/Attestation_de_suivi_module2.pdf"},
      {id:19, title:"RGPD Module 3", tags:["Mission","RGPD"], short:"L'atelier RGPD", image:"Certifica/module3.png", details:"Détails RGPD module 3.", src:"Certifica/Certificat_module3.pdf"},
      {id:20, title:"RGPD Module 4", tags:["Mission","RGPD"], short:"L'atelier RGPD", image:"Certifica/module4.png", details:"Détails RGPD module 4.", src:"Certifica/Certificat_module4.pdf"},
      {id:21, title:"RGPD Module 5", tags:["Mission","RGPD"], short:"L'atelier RGPD", image:"Certifica/module5.png", details:"Détails RGPD module 5.", src:"Certifica/Certificat_module5.pdf"},
      {id:22, title:"RGPD Module 6", tags:["Mission","RGPD"], short:"L'atelier RGPD", image:"Certifica/module6.png", details:"Détails RGPD module 6.", src:"Certifica/Attestation_de_suivi_module6.pdf"},
      {id:23, title:"Carrousel Mathématique", tags:["projet"], short:"Petit projet sur un carrousel qui défile des notions mathématiques", image:"PHOTO/Gemini_Generated_Image_mr65vamr65vamr65.png", details:"<p>Un carrousel interactif démontrant des notions mathématiques.</p>", src:"Carrousel/Carrousel.html"},
      {id:24, title:"PHP", tags:["TP_php"], short:"biblio", image:"f4a3a950e1cd8ab6ece9a60ba624a5c8.gif", details:"Détails du projet 24.", src:"https://bibliov2.infinityfreeapp.com/"},
    ];

    let activeTag = 'Tous';
    const tags = ['Tous', ...new Set(projects.flatMap(p => p.tags))];

    function renderTags() {
      const container = document.getElementById('tags');
      container.innerHTML = '';
      tags.forEach(tag => {
        const btn = document.createElement('button');
        btn.textContent = tag;
        if (tag === activeTag) btn.classList.add('active');
        btn.onclick = () => { activeTag = tag; renderTags(); renderProjects(); };
        container.appendChild(btn);
      });
    }

    function renderProjects() {
      const query = document.getElementById('search').value.toLowerCase();
      const container = document.getElementById('projects-grid');
      container.innerHTML = '';

      const filtered = projects.filter(p => {
        const matchesTag = activeTag === 'Tous' || p.tags.includes(activeTag);
        const matchesQuery = (p.title + p.short + p.tags.join(' ')).toLowerCase().includes(query);
        return matchesTag && matchesQuery;
      });

      if (filtered.length === 0) {
        container.innerHTML = '<p class="text-center" style="grid-column: 1/-1;">Aucun projet trouvé.</p>';
      } else {
        filtered.forEach(p => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${p.image}" alt="${p.title}">
            <div class="content">
              <h3>${p.title}</h3>
              <p>${p.short}</p>
            </div>
          `;
          card.onclick = () => openModal(p);
          container.appendChild(card);
        });
      }
    }

    function openModal(project) {
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-tags').textContent = project.tags.join(' • ');
      document.getElementById('modal-img').style.display = 'block';
      document.getElementById('modal-img').src = project.image;
      document.getElementById('modal-details').innerHTML = project.details;
      document.getElementById('modal-link').style.display = 'inline-block';
      // encode URI for paths with spaces/apostrophes
      document.getElementById('modal-link').href = encodeURI(project.src);
      document.getElementById('modal').classList.add('active');
    }

    function closeModal() {
      document.getElementById('modal').classList.remove('active');
    }

    function openPassionModal(passion) {
      const passions = {
        sport: {
          title: "Sport - Ma passion pour le collectif",
          content: `
            <h4 style="color: var(--primary); margin-bottom: 1rem;">Football & Sports collectifs</h4>
            <p style="margin-bottom: 1rem;">Le sport a toujours fait partie de ma vie. Pratiquant régulier de football, j'ai développé des qualités essentielles qui me servent aujourd'hui dans ma vie professionnelle :</p>
            <ul style="text-align: left; margin-left: 2rem;">
              <li style="margin-bottom: 0.5rem;"><strong>Esprit d'équipe :</strong> Travailler ensemble vers un objectif commun</li>
              <li style="margin-bottom: 0.5rem;"><strong>Persévérance :</strong> Ne jamais abandonner face aux difficultés</li>
              <li style="margin-bottom: 0.5rem;"><strong>Discipline :</strong> Rigueur et engagement constant</li>
              <li style="margin-bottom: 0.5rem;"><strong>Communication :</strong> Savoir écouter et se faire comprendre</li>
            </ul>
            <p style="margin-top: 1rem;">Ces valeurs sportives sont directement transposables dans le monde de l'informatique, notamment dans la gestion de projets et le travail en équipe.</p>
          `
        },
        tech: {
          title: "Tech & Innovation - Veille technologique",
          content: `
            <h4 style="color: var(--primary); margin-bottom: 1rem;">Passion pour les nouvelles technologies</h4>
            <p style="margin-bottom: 1rem;">Toujours en veille sur les dernières innovations tech :</p>
            <ul style="text-align: left; margin-left: 2rem;">
              <li style="margin-bottom: 0.5rem;"><strong>Automatisation :</strong> Création de workflows avec n8n pour optimiser les tâches répétitives</li>
              <li style="margin-bottom: 0.5rem;"><strong>Intelligence Artificielle :</strong> Exploration des outils IA et leur application dans l'IT</li>
              <li style="margin-bottom: 0.5rem;"><strong>Cloud & Infrastructure :</strong> Intérêt pour les architectures modernes et scalables</li>
              <li style="margin-bottom: 0.5rem;"><strong>Cybersécurité :</strong> Sensible aux enjeux de protection des données</li>
            </ul>
            <p style="margin-top: 1rem;">Je suis convaincu que rester curieux et à jour technologiquement est essentiel pour évoluer dans le domaine de l'IT.</p>
          `
        },
        gaming: {
          title: "Gaming & Setup - Hardware enthusiast",
          content: `
            <h4 style="color: var(--primary); margin-bottom: 1rem;">Montage PC & Optimisation</h4>
            <p style="margin-bottom: 1rem;">Ma passion pour le gaming m'a naturellement conduit vers le hardware :</p>
            <ul style="text-align: left; margin-left: 2rem;">
              <li style="margin-bottom: 0.5rem;"><strong>Montage de PC :</strong> Assemblage et configuration de configurations gaming et workstation</li>
              <li style="margin-bottom: 0.5rem;"><strong>Optimisation :</strong> Tweaking système pour maximiser les performances</li>
              <li style="margin-bottom: 0.5rem;"><strong>Benchmarking :</strong> Tests et comparaisons de composants</li>
              <li style="margin-bottom: 0.5rem;"><strong>Troubleshooting :</strong> Diagnostic et résolution de problèmes hardware</li>
            </ul>
            <p style="margin-top: 1rem;">Cette passion me donne une compréhension approfondie du matériel informatique, un atout précieux pour la maintenance et le support technique.</p>
          `
        }
      };

      const selectedPassion = passions[passion];
      document.getElementById('modal-title').textContent = selectedPassion.title;
      document.getElementById('modal-tags').textContent = '';
      document.getElementById('modal-img').style.display = 'none';
      document.getElementById('modal-details').innerHTML = selectedPassion.content;
      document.getElementById('modal-link').style.display = 'none';
      document.getElementById('modal').classList.add('active');
    }

    document.getElementById('search').addEventListener('input', renderProjects);
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Initial render
    renderTags();
    renderProjects();