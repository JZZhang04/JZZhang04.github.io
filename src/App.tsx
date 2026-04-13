import "./App.css";
type IconProps = { className?: string };

function IconFile({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 13h8M8 17h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMail({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m22 8-10 7L2 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGitHub({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.26.79-.57v-2.1c-3.2.72-3.88-1.4-3.88-1.4-.52-1.35-1.26-1.71-1.26-1.71-1.03-.73.08-.72.08-.72 1.14.08 1.74 1.19 1.74 1.19 1.01 1.78 2.65 1.26 3.3.96.1-.75.4-1.26.72-1.55-2.55-.3-5.23-1.32-5.23-5.86 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.53.11-3.2 0 0 .97-.32 3.18 1.21.92-.26 1.9-.4 2.88-.4.98 0 1.96.14 2.88.4 2.2-1.53 3.18-1.21 3.18-1.21.63 1.67.23 2.9.11 3.2.74.83 1.19 1.89 1.19 3.18 0 4.55-2.69 5.56-5.25 5.85.41.37.78 1.1.78 2.22v3.28c0 .31.21.68.8.57 4.56-1.53 7.85-5.85 7.85-10.95C23.25 5.6 18.27.5 12 .5z" />
    </svg>
  );
}

function IconLinkedIn({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.76-2.2 4.02 0 4.76 2.65 4.76 6.1V24h-4v-8.5c0-2.03-.04-4.63-2.82-4.63-2.82 0-3.25 2.2-3.25 4.48V24h-4V8z" />
    </svg>
  );
}


function App() {
  return (
    <div className="container">
      <header className="header">

        <h1>Jiazuo Zhang</h1>
        <p className="tagline">Software Engineer building AI automation and user-facing products</p>
        <p className="about">
          MSCS at Northeastern University · Software Engineering Intern at Blinkle AI<br />
          Focused on full-stack web development, AI-powered workflows, and product-driven engineering.
        </p>

        <div className="links">
          <a href="/Resume_Jiazuo_Zhang.pdf" target="_blank" rel="noopener noreferrer">
            <IconFile className="link-icon" />
            Resume
          </a>
          <a href="https://github.com/jzzhang04" target="_blank" rel="noopener noreferrer">
            <IconGitHub className="link-icon" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/jiazuozhang" target="_blank" rel="noopener noreferrer">
            <IconLinkedIn className="link-icon" />
            LinkedIn
          </a>
          <a href="mailto:jiazuozhang04@gmail.com">
            <IconMail className="link-icon" />
            Email
          </a>
        </div>

      </header>

      <section className="projects">
        <h2>Selected Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <img src="/ecommerce.png" alt="E-commerce" />
            <h3>Full-Stack E-Commerce Platform</h3>
            <p>Built a full-stack shopping platform with Angular and Spring Boot, featuring 10+ REST APIs, secure authentication, and Stripe checkout.</p>
            <p className="stack">Angular · Spring Boot · MySQL · Stripe</p>
            <div className="buttons">
              <a href="https://ecommerce-angular-jzzhang.netlify.app" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/JZZhang04/angular-ecommerce" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/cryptids.png" alt="Cryptids" />
            <h3>Cryptids Map of America</h3>
            <p>Built an interactive geospatial web app with React, TypeScript, and Leaflet, featuring searchable locations, filters, clustering, and animated map transitions.</p>
            <p className="stack">React · TypeScript · Leaflet · Geospatial UI</p>
            <div className="buttons">
              <a href="https://jzzhang04.github.io/cryptids-map" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/JZZhang04/cryptids-map" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/Arthur.png" alt="Arthur" />
            <h3>LLM-Powered Conversational Agent</h3>
            <p>Developed a conversational AI system with persona control, memory management, and structured evaluation across 100+ multi-turn test scenarios.</p>
            <p className="stack">Python · FastAPI · LLMs · Evaluation</p>
            <div className="buttons">
              <a href="https://huggingface.co/spaces/JZZhang04/GiddyUpGPT" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/JZZhang04/GiddyUpGPT" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/android_app.png" alt="CampusTrade" />
            <h3>Student Marketplace Android App</h3>
            <p>Built an Android marketplace app with Java and Firebase, supporting authentication, product posting, secure CRUD workflows, and real-time listing updates.</p>
            <p className="stack">Java · Firebase · Firestore · Real-time Sync</p>
            <div className="buttons">
              <a href="https://drive.google.com/file/d/1l8B1td1zjNWFX19xp8BBiTvVnWDWl8S9/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/CS5520Spring2025Feinberg/project-group-13" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/kanbas1.png" alt="Kanbas" />
            <h3>Learning Management Web App</h3>
            <p>Developed a course platform with React, Redux, Node.js, and MongoDB, featuring role-based workflows, content organization, and quiz functionality.</p>
            <p className="stack">React · Redux · Node.js · MongoDB</p>
            <div className="buttons">
              <a href="https://a6--kanbas-react-web-cs5610-fa24.netlify.app/#/Kanbas/Dashboard" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/JZZhang04/Kanbas-front-end" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card project-card-placeholder">
            <div className="project-placeholder" aria-hidden="true">
              More projects
            </div>
            <h3>More Projects in Progress</h3>
            <p>More projects are currently in development and will be added here soon.</p>
            <p className="stack">Stay tuned for upcoming work</p>
          </div>

        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div>
            <h4>Languages</h4>
            <div className="tag-group">
              {["Python", "JavaScript", "TypeScript", "Java", "SQL", "C/C++", "R"].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>

          <div>
            <h4>Frontend & Backend</h4>
            <div className="tag-group">
              {["React", "Next.js", "Angular", "Redux", "Spring Boot", "Node.js", "REST APIs"].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>

          <div>
            <h4>Databases</h4>
            <div className="tag-group">
              {["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>

          <div>
            <h4>Machine Learning</h4>
            <div className="tag-group">
              {["PyTorch", "scikit-learn", "pandas", "NumPy"].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>

        </div>
      </section>

      <section className="education">
        <h2>Education Background</h2>

        <div className="exp-item">
          <div className="exp-header">
            <img src="/logos/neu.png" alt="Northeastern University" />
            <h4>Northeastern University</h4>
          </div>
          <p>M.S. in Computer Science</p>
          <span>Boston, MA · 2024 – 2026</span>
        </div>

        <div className="exp-item">
          <div className="exp-header">
            <img src="/logos/upenn.png" alt="University of Pennsylvania" />
            <h4>University of Pennsylvania</h4>
          </div>
          <p>M.S. in Urban Spatial Analytics</p>
          <span>Philadelphia, PA · 2018 – 2019</span>
        </div>

        <div className="exp-item">
          <div className="exp-header">
            <img src="/logos/bfu.png" alt="Beijing Forestry University" />
            <h4>Beijing Forestry University</h4>
          </div>
          <p>B.Eng. in Urban Planning</p>
          <span>Beijing, China · 2013 – 2018</span>
        </div>

      </section>

      <section className="experience">
        <h2>Experience</h2>

        <div className="exp-item">
          <div className="exp-header">
            <img src="/logos/accenture.png" alt="Accenture" />
            <h4>Accenture</h4>
          </div>
          <p>Technology Consultant · Enterprise Data Platforms</p>
          <span>Shanghai, China · 2021 – 2022</span>
          <p>Worked on data integration, platform specifications, dashboards, and business system workflows.</p>
        </div>
      </section>

    </div>
  );
}

export default App;
