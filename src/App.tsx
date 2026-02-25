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
        <p className="subtitle">
          Software Engineer | AI-Driven Platforms | Frontend Systems
        </p>

        <div className="links">
          <a href="/Jiazuo_Zhang_Resume.pdf" target="_blank" rel="noopener noreferrer">
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
        <h2>Featured Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <img src="/ecommerce.png" alt="E-commerce" />
            <h3>Full Stack E-Commerce Platform</h3>
            <p>
              Angular + Spring Boot marketplace with Stripe integration and REST API architecture.
            </p>
            <div className="buttons">
              <a href="LIVE_LINK" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/JZZhang04/angular-ecommerce" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/kanbas1.png" alt="Kanbas" />
            <h3>Canvas-style Learning Platform</h3>
            <p>
              React + TypeScript web app supporting course modules and assignment workflows.
            </p>
            <div className="buttons">
              <a href="https://a6--kanbas-react-web-cs5610-fa24.netlify.app/#/Kanbas/Dashboard" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/JZZhang04/Kanbas-front-end" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/Arthur.png" alt="Arthur" />
            <h3>Character-based AI Chatbot </h3>
            <p>
              LLM-powered conversational character-based agent.
            </p>
            <div className="buttons">
              <a href="LIVE_LINK" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/JZZhang04/GiddyUpGPT" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/android_app.png" alt="CampusTrade" />
            <h3>Student Marketplace Android App </h3>
            <p>
              A data-driven marketplace platform using Java, Firebase Realtime Database, and Firestore.
            </p>
            <div className="buttons">
              <a href="LIVE_LINK" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="GITHUB_LINK" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/cryptids.png" alt="Cryptids" />
            <h3>Cryptids Map of America</h3>
            <p>
              Map of cryptids in America, with React, TypeScript, Vite, and React-Leaflet.
            </p>
            <div className="buttons">
              <a href="LIVE_LINK" target="_blank" rel="noopener noreferrer">Live</a>
              <a href="https://github.com/JZZhang04/cryptids-map" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          

        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div>
            <h4>Languages</h4>
            <p>Python, JavaScript, TypeScript, Java, SQL, C/C++, R</p>
          </div>

          <div>
            <h4>Frontend & Backend</h4>
            <p>React, Next.js, Angular, Redux, Spring Boot, Node.js, REST APIs</p>
          </div>

          <div>
            <h4>Databases</h4>
            <p>MySQL, PostgreSQL, MongoDB, Firebase, SQLite</p>
          </div>

          <div>
            <h4>Machine Learning</h4>
            <p>PyTorch, scikit-learn, pandas, NumPy</p>
          </div>

        </div>
      </section>

      <section className="education">
        <h2>Background</h2>

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
          <p>Business Analyst · Enterprise Data Platforms</p>
          <span>Shanghai, China · 2021 – 2022</span>
        </div>
      </section>

    </div>
  );
}

export default App;