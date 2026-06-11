
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    // Mobile burger menu
    const toggle = document.getElementById('navToggle');
    const links  = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.classList.toggle('open');
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => a.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(s => observer.observe(s));