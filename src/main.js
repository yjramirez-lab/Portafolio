import './style.css';
import { portfolioData } from './data.js';

// ---- INYECCIÓN DEL HTML PRINCIPAL ----
document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <div class="logo">
      <i data-lucide="terminal" class="logo-icon"></i>
      IT Portfolio
    </div>
    <nav class="nav-links">
      <a href="#stack" class="mono">/stack</a>
      <a href="#projects" class="mono">/projects</a>
      <a href="#credentials" class="mono">/credentials</a>
      <a href="${portfolioData.personal.cvLink}" target="_blank" class="btn-primary">
        <i data-lucide="download" size="16"></i> CV
      </a>
    </nav>
  </header>

  <main class="dashboard-grid">
    
    <!-- COLUMNA IZQUIERDA (Cuerpo Principal) -->
    <div class="col-left">

      <!-- HERO / STACK SECTION -->
      <div id="stack" class="card appear">
        <div class="card-title">
          <i data-lucide="layers" size="20"></i>
          Core Technical Stack
        </div>
        <div class="stack-grid">
          ${portfolioData.stackCategories.map(cat => `
            <button class="stack-category-btn stack-${cat.id}" data-category="${cat.id}">
              <i data-lucide="${cat.icon}" size="32"></i>
              <span class="stack-category-title mono">${cat.title}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- PROJECTS THUMBNAIL SECTION -->
      <div id="projects" class="card appear">
        <div class="card-title">
          <i data-lucide="folder-git-2" size="20"></i>
          /mnt/archive/projects
        </div>
        <div class="projects-grid">
          ${portfolioData.projects.map(proj => `
            <a href="${proj.link}" class="project-card">
              <img src="${proj.thumbnail}" alt="${proj.title}" class="project-thumbnail">
              <div class="project-info">
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-desc">${proj.description}</p>
                <div class="sim-tech mono">
                  ${proj.tech.map(t => `<span class="${t.class}">${t.label}</span>`).join('')}
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <!-- SIMULATIONS SECTION -->
      <div id="simulations" class="card appear">
        <div class="card-title">
          <i data-lucide="activity" size="20"></i>
          Job Simulations
        </div>
        <div class="sim-list">
          ${portfolioData.simulations.map(sim => `
            <a href="${sim.link}" target="_blank" class="sim-item">
              <div class="sim-header">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <img src="${sim.logoUrl}" alt="${sim.company}" class="sim-logo" style="width: 40px; height: 40px; object-fit: contain;">
                  <div>
                    <h3 class="sim-role">${sim.role}</h3>
                    <div class="sim-company">${sim.company}</div>
                  </div>
                </div>
                <div class="sim-period mono">${sim.period}</div>
              </div>
              <p class="project-desc">${sim.description}</p>
              <ul class="sim-bullets">
                ${sim.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
              <div class="sim-tech mono">
                ${sim.tech.map(t => `<span class="${t.class}">${t.label}</span>`).join('')}
              </div>
            </a>
          `).join('')}
        </div>
      </div>
      
    </div><!-- Fin Columna Izquierda -->

    <!-- COLUMNA DERECHA (Perfil & Certificaciones) -->
    <div class="col-right">
      
      <!-- PROFILE CARD -->
      <div class="profile-card appear">
        <img src="${portfolioData.personal.avatarUrl}" alt="Profile" class="profile-avatar">
        <h1 class="profile-name">${portfolioData.personal.name}</h1>
        <h2 class="profile-title">${portfolioData.personal.title}</h2>
        
        <div class="profile-details">
          <div class="profile-details-row">
            <i data-lucide="map-pin" size="16"></i>
            <span>${portfolioData.personal.location}</span>
          </div>
          <div class="profile-details-row">
            <i data-lucide="mail" size="16"></i>
            <a href="mailto:${portfolioData.personal.email}" style="color: inherit;">
              ${portfolioData.personal.email}
            </a>
          </div>
          <div class="profile-details-row" style="margin-top: 10px;">
            <a href="${portfolioData.personal.linkedin}" target="_blank" class="btn-primary" style="background: rgba(255,255,255,0.2); width: 100%; justify-content: center;">
              <i data-lucide="linkedin" size="16"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <!-- CREDENTIALS LIST -->
      <div id="credentials" class="card appear">
        <div class="card-title">
          <i data-lucide="shield-check" size="20"></i>
          SECURE_CREDENTIALS
        </div>
        <div class="certs-list">
          ${portfolioData.education.map(cert => `
            <a href="${cert.url}" target="_blank" class="cert-item">
              <img src="${cert.iconUrl}" alt="${cert.issuer} icon" class="cert-icon" onerror="this.style.display='none'">
              <div class="cert-content">
                <h3 class="cert-name">${cert.title}</h3>
                <div class="cert-issuer mono">${cert.issuer}</div>
              </div>
              <div class="cert-badge mono">${cert.date}</div>
            </a>
          `).join('')}
        </div>
      </div>

    </div><!-- Fin Columna Derecha -->

  </main>

  <footer class="footer">
    <p class="mono">[SYS_LOG: ${new Date().getFullYear()}] MODULAR DASHBOARD INITIALIZED.</p>
  </footer>

  <!-- MODAL / CAROUSEL -->
  <div class="modal-overlay" id="stackModal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal">
        <i data-lucide="x" size="24"></i>
      </button>
      <div id="modalBody"></div>
    </div>
  </div>
`;

// Initialize lucide icons
lucide.createIcons();

// ---- LÓGICA DEL MODAL DE CATEGORÍAS (STACK) ----
const modalOverlay = document.getElementById('stackModal');
const modalBody = document.getElementById('modalBody');
const btnCloseModal = document.getElementById('closeModal');
const categoryButtons = document.querySelectorAll('.stack-category-btn');

function openModal(categoryId) {
  const category = portfolioData.stackCategories.find(c => c.id === categoryId);
  if(!category) return;

  // Renderizar contenido del modal
  modalBody.innerHTML = `
    <div class="modal-header">
      <i data-lucide="${category.icon}" size="24"></i>
      ${category.title}
    </div>
    <div class="modal-desc">${category.description}</div>
    <div class="modal-skills-grid">
      ${category.skills.map(skill => `
        <div class="modal-skill-item">
          <i data-lucide="${skill.icon}" size="20"></i>
          <span class="modal-skill-name">${skill.name}</span>
        </div>
      `).join('')}
    </div>
  `;
  
  // Re-inicializar iconos inyectados en el html interno
  lucide.createIcons();
  
  // Abrir modal
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = ''; 
}

// Asignar eventos de click a cada cajón del Stack
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(btn.dataset.category);
  });
});

// Cerrar con el boton X o haciendo click fuera del modal
btnCloseModal.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) closeModal();
});

// ==== Efecto Appear en Scroll ====
const observerOptions = { threshold: 0.05, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); }
  });
}, observerOptions);

document.querySelectorAll('.appear').forEach(el => observer.observe(el));
