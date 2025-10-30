// Data arrays for easy content updates
const projectsData = [
  {
    title: "Wordle Network Programming",
    subtitle: "C • POSIX Threads • TCP",
    description: "Single-process, multi-threaded TCP server for the Wordle game using POSIX threads, custom app-layer protocol, and dynamic memory management with synchronization.",
    image: "Images/project-wordle.png",
    imageAlt: "Wordle Network Programming project",
    badges: ["C", "Pthreads", "Networking"]
  },
  {
    title: "Epidemic Spread Simulation",
    subtitle: "Java • Multithreading • Graphs",
    description: "Multithreaded simulation of infection spread on large graphs with real-time stats, configurable parameters, and multiple infection strategies (random, degree-based, BFS).",
    image: "Images/project-epidemic.png",
    imageAlt: "Epidemic Spread Simulation project",
    badges: ["Java", "Graphs", "Concurrency"]
  },
  {
    title: "EastieUnits.com (In-Progress)",
    subtitle: "React • Node.js/Express",
    description: "Website for a property management company to showcase available units and streamline communication between tenants and the property manager. Est. completion: Spring 2026.",
    image: "Images/project-eastieunits.png",
    imageAlt: "EastieUnits.com web app",
    badges: ["React", "Express", "Node.js"]
  }
];

const skillsData = {
  languages: {
    title: "Programming Languages",
    subtitle: "Core Development",
    skills: ["Python", "C#", "C/C++", "Java", "JavaScript", "TypeScript", "R", "Assembly", "Haskell", "Erlang", "Prolog"]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    subtitle: "Modern Development",
    skills: ["React", ".NET Framework", "Node.js", "Express", "HTML/CSS", "RESTful API", "Cucumber"]
  },
  databases: {
    title: "Databases & Data",
    subtitle: "Data Management",
    skills: ["SQL", "PostgreSQL", "SQL Server", "Data Analysis"]
  },
  tools: {
    title: "Tools & Platforms",
    subtitle: "Development Environment",
    skills: ["Git/GitHub", "Visual Studio", "IntelliJ", "Docker", "Jenkins", "Datadog", "Selenium", "Postman", "Jira", "Kibana", "Linux", "Windows", "Perforce", "NuGet", "Gradle"]
  }
};

const experienceData = [
  {
    title: "Software Engineer Intern",
    company: "Charles River Development, State Street",
    period: "June – August 2025",
    logo: "Images/crd-logo.png",
    logoAlt: "Charles River Development logo",
    points: [
      "Contributed to migration toward a next-gen open-source automated testing framework safeguarding systems managing $50T+ in assets.",
      "Integrated a .NET C# reporting library logging results from 18k+ automated tests adopted by 170+ engineers.",
      "Benchmarked vs legacy tool showing 50% smaller reports and ~20% faster output, driving adoption.",
      "Implemented and tested OCR and image recognition to identify and interact with UI components via AI."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Ultimate Kronos Group (UKG)",
    period: "January – April 2025",
    logo: "Images/ukg-logo.png",
    logoAlt: "UKG logo",
    points: [
      "Built and optimized UI components and backend services powering core product features.",
      "Owned full-stack user stories through grooming, implementation, testing, and CI/CD deployment.",
      "Designed prototypes of AI agents leveraging app features and APIs to automate tasks and enhance UX."
    ]
  },
  {
    title: "Server, Food Runner",
    company: "Osteria Nino Restaurant",
    period: "August 2020 – August 2024",
    logo: "Images/osteria-nino-logo.png",
    logoAlt: "Osteria Nino logo",
    points: [
      "Delivered high-quality service at a high-end Italian restaurant in a fast-paced environment."
    ]
  }
];

const activitiesData = [
  {
    title: "President, Men's Club Soccer",
    period: "November 2023 – Present",
    description: "Lead team operations, scheduling, and university coordination.",
    badges: ["Leadership", "Team Management"]
  },
  {
    title: "Exec Committee, Pi Kappa Alpha",
    period: "April 2023 – April 2024",
    description: "Supported chapter leadership and event planning initiatives.",
    badges: ["Operations", "Event Planning"]
  },
  {
    title: "Member, RCOS",
    period: "January 2023 – Present",
    description: "RCOS is a program where students collaborate on open-source projects from conception to deployment, working in development teams to plan, implement, review, and ship features end-to-end.",
    badges: ["Open Source", "Team Development", "Deployment"]
  }
];

const contactData = {
  name: "Colin O’Sullivan",
  location: "Reading, MA",
  phone: "(781)-779-7181",
  email: "colinosullivan013@gmail.com",
  locationIcon: "Images/location-icon.png", // placeholder path
  phoneIcon: "Images/phone-icon.png",
  emailIcon: "Images/email-icon.png"
};

// Render functions
function renderProjects() {
  const container = document.querySelector('#projects .grid');
  if (!container) return;
  
  container.innerHTML = projectsData.map(project => `
    <article class="card project-card">
      <div class="project-media">
        <img src="${project.image}" alt="${project.imageAlt}" />
      </div>
      <div class="card-header">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-subtitle">${project.subtitle}</p>
      </div>
      <div class="card-content">
        <p>${project.description}</p>
        <div class="badge-group">
          ${project.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const container = document.querySelector('#skills .grid');
  if (!container) return;
  
  container.innerHTML = Object.values(skillsData).map(category => `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">${category.title}</h3>
        <p class="card-subtitle">${category.subtitle}</p>
      </div>
      <div class="card-content">
        <div class="badge-group">
          ${category.skills.map(skill => `<span class="badge">${skill}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const container = document.querySelector('#experience .timeline');
  if (!container) return;
  
  container.innerHTML = experienceData.map(exp => `
    <div class="timeline-item">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">${exp.title}</h3>
          <p class="card-subtitle">${exp.company} • ${exp.period}</p>
        </div>
        <div class="card-content">
          <div class="experience-meta">
            <img src="${exp.logo}" alt="${exp.logoAlt}" class="company-logo" />
          </div>
          <ul class="experience-points">
            ${exp.points.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
}

function renderActivities() {
  const container = document.querySelector('#activities .grid');
  if (!container) return;
  
  container.innerHTML = activitiesData.map(activity => `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">${activity.title}</h3>
        <p class="card-subtitle">${activity.period}</p>
      </div>
      <div class="card-content">
        <p>${activity.description}</p>
        <div class="badge-group">
          ${activity.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderContact() {
  const el = document.getElementById('contact-info');
  if (!el) return;
  el.innerHTML = `
    <div class="card contact-card" style="max-width: 500px; margin: 0 auto; text-align: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: var(--space-3);">
        <h3 class="card-title" style="font-size: var(--step-2);">${contactData.name}</h3>
        <div class="contact-row">
          <span class="contact-icon"><img src="${contactData.locationIcon}" alt="Location" style="width: 24px; height: 24px; vertical-align: middle;"></span>
          <span>${contactData.location}</span>
        </div>
        <div class="contact-row">
          <span class="contact-icon"><img src="${contactData.phoneIcon}" alt="Phone" style="width: 24px; height: 24px; vertical-align: middle;"></span>
          <a href="tel:${contactData.phone.replace(/[^\d]/g,'')}" class="contact-link">${contactData.phone}</a>
          <button type="button" class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: var(--step--1); margin-left: 0.5rem;" onclick="navigator.clipboard.writeText('${contactData.phone}')">Copy</button>
        </div>
        <div class="contact-row">
          <span class="contact-icon"><img src="${contactData.emailIcon}" alt="Email" style="width: 24px; height: 24px; vertical-align: middle;"></span>
          <a href="mailto:${contactData.email}" class="contact-link">${contactData.email}</a>
          <button type="button" class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: var(--step--1); margin-left: 0.5rem;" onclick="navigator.clipboard.writeText('${contactData.email}')">Copy</button>
        </div>
      </div>
    </div>
  `;
}

// Scrollspy and section reveal
function debounce(fn, wait = 30) {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

function onScrollSpy() {
  const sections = document.querySelectorAll('main section');
  let scrollPos = window.scrollY + 84;
  let found = false;
  sections.forEach(section => {
    if (!found && section.offsetTop <= scrollPos && scrollPos < section.offsetTop + section.offsetHeight) {
      const id = section.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
      found = true;
    }
  });
  if (!found) {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  }
}

function onReveal() {
  document.querySelectorAll('main section').forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('is-visible');
    } else {
      section.classList.remove('is-visible');
    }
  });
}

function setupInteractivity() {
  // Mark all as reveal targets
  document.querySelectorAll('main section').forEach(s => s.classList.add('js-reveal'));
  window.addEventListener('scroll', debounce(() => { onScrollSpy(); onReveal(); }, 30));
  onScrollSpy();
  onReveal();
}

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('open');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
    
    // Close menu when clicking on links
    navLinks.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Render all data-driven sections
  renderProjects();
  renderSkills();
  renderExperience();
  renderActivities();
  renderContact(); // Add this call
  setupInteractivity(); // Add
});

