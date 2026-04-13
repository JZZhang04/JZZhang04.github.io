import { useEffect, useMemo, useRef, useState, type WheelEvent } from "react";
import "./App.css";

type IconProps = { className?: string };

type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  live?: string;
  github?: string;
  accent: string;
  eyebrow: string;
};

type TimelineItem = {
  logo: string;
  alt: string;
  name: string;
  title: string;
  detail: string;
  period: string;
};

function IconFile({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 13h8M8 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconMail({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m22 8-10 7L2 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconGitHub({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.26.79-.57v-2.1c-3.2.72-3.88-1.4-3.88-1.4-.52-1.35-1.26-1.71-1.26-1.71-1.03-.73.08-.72.08-.72 1.14.08 1.74 1.19 1.74 1.19 1.01 1.78 2.65 1.26 3.3.96.1-.75.4-1.26.72-1.55-2.55-.3-5.23-1.32-5.23-5.86 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.53.11-3.2 0 0 .97-.32 3.18 1.21.92-.26 1.9-.4 2.88-.4.98 0 1.96.14 2.88.4 2.2-1.53 3.18-1.21 3.18-1.21.63 1.67.23 2.9.11 3.2.74.83 1.19 1.89 1.19 3.18 0 4.55-2.69 5.56-5.25 5.85.41.37.78 1.1.78 2.22v3.28c0 .31.21.68.8.57 4.56-1.53 7.85-5.85 7.85-10.95C23.25 5.6 18.27.5 12 .5z" />
    </svg>
  );
}

function IconLinkedIn({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.76-2.2 4.02 0 4.76 2.65 4.76 6.1V24h-4v-8.5c0-2.03-.04-4.63-2.82-4.63-2.82 0-3.25 2.2-3.25 4.48V24h-4V8z" />
    </svg>
  );
}

const projects: Project[] = [
  {
    eyebrow: "Commerce System",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A production-style shopping experience with secure auth, checkout flow, and a backend shaped around clear product operations.",
    stack: ["Angular", "Spring Boot", "MySQL", "Stripe"],
    image: "/ecommerce.png",
    live: "https://ecommerce-angular-jzzhang.netlify.app",
    github: "https://github.com/JZZhang04/angular-ecommerce",
    accent: "from-[#f97316] via-[#fb7185] to-[#facc15]",
  },
  {
    eyebrow: "Spatial Storytelling",
    title: "Cryptids Map of America",
    description:
      "An interactive geospatial interface with filters, animated transitions, and clustered points that keep dense map states readable.",
    stack: ["React", "TypeScript", "Leaflet", "Geospatial UI"],
    image: "/cryptids.png",
    live: "https://jzzhang04.github.io/cryptids-map",
    github: "https://github.com/JZZhang04/cryptids-map",
    accent: "from-[#0f766e] via-[#14b8a6] to-[#99f6e4]",
  },
  {
    eyebrow: "LLM Workflow",
    title: "Conversational Agent with Structured Memory",
    description:
      "A persona-driven assistant system with memory controls and evaluation scaffolding for longer, more consistent multi-turn conversations.",
    stack: ["Python", "FastAPI", "LLMs", "Evaluation"],
    image: "/Arthur.png",
    live: "https://huggingface.co/spaces/JZZhang04/GiddyUpGPT",
    github: "https://github.com/JZZhang04/GiddyUpGPT",
    accent: "from-[#2563eb] via-[#60a5fa] to-[#c4b5fd]",
  },
  {
    eyebrow: "Mobile Marketplace",
    title: "Student Marketplace Android App",
    description:
      "A campus trading product with authentication, listing management, and real-time sync for student-to-student buying and selling.",
    stack: ["Java", "Firebase", "Firestore", "Realtime"],
    image: "/android_app.png",
    live: "https://drive.google.com/file/d/1l8B1td1zjNWFX19xp8BBiTvVnWDWl8S9/view?usp=drive_link",
    github: "https://github.com/CS5520Spring2025Feinberg/project-group-13",
    accent: "from-[#7c3aed] via-[#a855f7] to-[#f0abfc]",
  },
  {
    eyebrow: "Course Platform",
    title: "Learning Management Web App",
    description:
      "A role-aware learning platform with content organization, quiz interactions, and dashboard patterns tuned for daily student workflows.",
    stack: ["React", "Redux", "Node.js", "MongoDB"],
    image: "/kanbas1.png",
    live: "https://a6--kanbas-react-web-cs5610-fa24.netlify.app/#/Kanbas/Dashboard",
    github: "https://github.com/JZZhang04/Kanbas-front-end",
    accent: "from-[#0f172a] via-[#334155] to-[#38bdf8]",
  },
];

const skillGroups = [
  {
    title: "Build",
    items: ["React", "Next.js", "Angular", "Spring Boot", "Node.js", "REST APIs"],
  },
  {
    title: "Data",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
  },
  {
    title: "AI",
    items: ["PyTorch", "pandas", "NumPy", "scikit-learn", "LLM Evaluation"],
  },
  {
    title: "Language",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C/C++", "R"],
  },
];

const timeline: TimelineItem[] = [
  {
    logo: "/logos/accenture.png",
    alt: "Accenture",
    name: "Accenture",
    title: "Technology Consultant · Enterprise Data Platforms",
    detail: "Worked across data integration, system workflows, specifications, and dashboard-facing product delivery.",
    period: "Shanghai · 2021 - 2022",
  },
  {
    logo: "/logos/neu.png",
    alt: "Northeastern University",
    name: "Northeastern University",
    title: "M.S. in Computer Science",
    detail: "Graduate work focused on software engineering, applied AI systems, and full-stack product development.",
    period: "Boston · 2024 - 2026",
  },
  {
    logo: "/logos/upenn.png",
    alt: "University of Pennsylvania",
    name: "University of Pennsylvania",
    title: "M.S. in Urban Spatial Analytics",
    detail: "Training in spatial computing, analytics, and data-led decision making for real-world systems.",
    period: "Philadelphia · 2018 - 2019",
  },
  {
    logo: "/logos/bfu.png",
    alt: "Beijing Forestry University",
    name: "Beijing Forestry University",
    title: "B.Eng. in Urban Planning",
    detail: "Built a foundation in systems thinking, modeling, and visual communication for complex environments.",
    period: "Beijing · 2013 - 2018",
  },
];

const navItems = [
  { label: "Projects", id: "projects" },
  { label: "Strengths", id: "strengths" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

function App() {
  const [headerCompact, setHeaderCompact] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const metrics = useMemo(
    () => [
      { label: "Focus", value: "AI + Product" },
      { label: "Mode", value: "Full Stack" },
      { label: "Strength", value: "Readable UX" },
    ],
    [],
  );

  useEffect(() => {
    const onScroll = () => setHeaderCompact(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".js-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-card]"));
      if (!cards.length) return;

      const containerRect = container.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;

      let nextIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - center);
        if (distance < minDistance) {
          minDistance = distance;
          nextIndex = index;
        }
      });

      setActiveIndex(nextIndex);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    container.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      container.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const centerCard = (index: number) => {
    const container = carouselRef.current;
    const card = container?.querySelectorAll<HTMLElement>("[data-card]")[index];
    if (!container || !card) return;

    const left = card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;
    container.scrollTo({ left, behavior: "smooth" });
  };

  const handleCarouselWheel = (event: WheelEvent<HTMLDivElement>) => {
    const container = carouselRef.current;
    if (!container) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      container.scrollBy({ left: event.deltaY * 1.1, behavior: "auto" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#08111f] text-stone-100 selection:bg-cyan-300/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_75%_20%,_rgba(244,114,182,0.14),_transparent_22%),linear-gradient(180deg,_#08111f_0%,_#07101a_45%,_#04070d_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.04)_100%)] opacity-60" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          headerCompact ? "px-3 py-3 sm:px-6" : "px-4 py-5 sm:px-8"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 backdrop-blur-xl transition-all duration-500 ${
            headerCompact
              ? "px-4 py-2 shadow-[0_14px_40px_rgba(2,8,23,0.46)]"
              : "px-5 py-3 shadow-[0_22px_70px_rgba(2,8,23,0.34)]"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-3 text-left"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold tracking-[0.28em] text-cyan-100">
              JZ
            </span>
            <span className="hidden sm:block">
              <span className="block font-[Instrument_Serif] text-2xl italic tracking-[0.03em] text-white">
                Jiazuo Zhang
              </span>
              <span className="block text-[10px] uppercase tracking-[0.34em] text-slate-400">
                Software Engineer
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300 transition duration-300 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href="/Resume_Jiazuo_Zhang.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-50 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/20"
          >
            <IconFile className="h-4 w-4" />
            Resume
          </a>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="js-reveal section-fade max-w-4xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-slate-300 backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
                Building AI automation and user-facing products
              </div>

              <h1 className="mt-8 max-w-5xl font-[Instrument_Serif] text-6xl leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-[7.8rem]">
                Product-minded engineering
                <span className="block pl-[0.08em] text-cyan-200/95 italic">with motion, clarity, and systems thinking.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I design and ship full-stack experiences that feel alive: AI-assisted workflows, clean interfaces,
                and product surfaces that make complex systems easier to trust and use.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(255,255,255,0.18)]"
                >
                  Explore Selected Work
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Start a Conversation
                </button>
              </div>
            </div>

            <div className="js-reveal section-fade relative lg:justify-self-end">
              <div className="hero-orbit rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_120px_rgba(8,15,30,0.6)] backdrop-blur-xl sm:p-7">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-6">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-slate-400">
                    <span>Current Focus</span>
                    <span>2026</span>
                  </div>

                  <div className="mt-8 space-y-5">
                    {metrics.map((metric, index) => (
                      <div
                        key={metric.label}
                        className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4"
                        style={{ animationDelay: `${index * 120}ms` }}
                      >
                        <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">{metric.label}</div>
                        <div className="mt-2 text-2xl font-semibold text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[1.4rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/15 via-white/5 to-fuchsia-300/10 p-5">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-100/70">Snapshot</div>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-slate-200">
                      MSCS at Northeastern, with prior consulting experience and a steady focus on turning technical
                      systems into clear, user-facing products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-10 top-12 hidden h-28 w-28 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-3xl lg:block" />
              <div className="pointer-events-none absolute -bottom-10 right-8 hidden h-24 w-24 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 blur-3xl lg:block" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="projects">
          <div className="js-reveal section-fade mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.34em] text-cyan-200/80">Selected Projects</div>
              <h2 className="mt-4 font-[Instrument_Serif] text-4xl italic text-white sm:text-5xl">
                A coverflow-style reel of systems I have shipped.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              This section uses native JavaScript to track scroll position, determine the active card, and apply 3D
              transforms so the center project feels pinned while surrounding work falls away in depth.
            </p>
          </div>

          <div className="js-reveal section-fade coverflow-shell rounded-[2rem] border border-white/10 bg-white/[0.04] px-0 py-8 shadow-[0_30px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl sm:px-2">
            <div
              ref={carouselRef}
              onWheel={handleCarouselWheel}
              className="coverflow-track flex gap-6 overflow-x-auto px-5 pb-4 pt-6 sm:px-8"
            >
              {projects.map((project, index) => {
                const distance = index - activeIndex;
                const absDistance = Math.abs(distance);
                const translateX = distance * 22;
                const rotateY = distance * -18;
                const translateY = absDistance === 0 ? -12 : absDistance * 14;
                const scale = absDistance === 0 ? 1 : Math.max(0.82, 1 - absDistance * 0.08);
                const opacity = absDistance > 2 ? 0.42 : 1 - absDistance * 0.18;

                return (
                  <article
                    key={project.title}
                    data-card
                    onClick={() => centerCard(index)}
                    className={`project-shell relative h-[34rem] w-[82vw] max-w-[26rem] shrink-0 cursor-pointer snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition-all duration-500 md:w-[26rem] ${
                      index === activeIndex ? "ring-1 ring-cyan-200/35" : ""
                    }`}
                    style={{
                      transform: `translate3d(${translateX}px, ${translateY}px, 0) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex: projects.length - absDistance,
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/12 to-transparent" />
                    <div className="relative flex h-full flex-col p-5 sm:p-6">
                      <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-56 w-full object-cover object-top transition duration-700 hover:scale-[1.04]"
                        />
                      </div>

                      <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-slate-300/70">{project.eyebrow}</div>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">{project.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex gap-3 pt-6">
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:-translate-y-0.5"
                          >
                            Live
                          </a>
                        ) : null}
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
                          >
                            GitHub
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 px-5 pb-2">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => centerCard(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-10 bg-white" : "w-2.5 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`Focus ${project.title}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" id="strengths">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="js-reveal section-fade max-w-xl">
              <div className="text-[11px] uppercase tracking-[0.34em] text-cyan-200/80">Strengths</div>
              <h2 className="mt-4 font-[Instrument_Serif] text-4xl italic text-white sm:text-5xl">
                What I tend to bring into a product team.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                I like work that sits between engineering depth and product clarity: systems that need solid foundations,
                but also need to feel intuitive, fast, and easy to explain.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="js-reveal section-fade rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{group.title}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-200/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" id="journey">
          <div className="js-reveal section-fade mb-10 max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.34em] text-cyan-200/80">Journey</div>
            <h2 className="mt-4 font-[Instrument_Serif] text-4xl italic text-white sm:text-5xl">
              Experience and education arranged like a running timeline.
            </h2>
          </div>

          <div className="relative space-y-5 before:absolute before:left-[1.4rem] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-200/0 before:via-cyan-200/40 before:to-cyan-200/0 md:before:left-1/2">
            {timeline.map((item, index) => (
              <article
                key={`${item.name}-${item.period}`}
                className={`js-reveal section-fade relative grid gap-4 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className={`hidden md:block ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`} />
                <div className={`relative ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                  <div className="absolute left-[1.4rem] top-8 h-3 w-3 -translate-x-1/2 rounded-full border border-cyan-100/50 bg-cyan-200 shadow-[0_0_26px_rgba(165,243,252,0.85)] md:left-auto md:right-auto md:top-10 md:-translate-x-0" />
                  <div className="ml-10 rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur md:ml-0">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80">
                        <img src={item.logo} alt={item.alt} className="h-7 w-7 object-contain" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">{item.name}</div>
                        <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.period}</div>
                      </div>
                    </div>
                    <div className="mt-5 text-base font-medium text-slate-100">{item.title}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" id="contact">
          <div className="js-reveal section-fade rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 py-10 shadow-[0_30px_100px_rgba(2,8,23,0.5)] backdrop-blur-xl sm:px-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.34em] text-cyan-200/80">Contact</div>
                <h2 className="mt-4 font-[Instrument_Serif] text-4xl italic text-white sm:text-5xl">
                  If you are building something thoughtful, I would love to hear about it.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                  Open to software engineering roles, product-minded collaborations, and work that blends engineering
                  rigor with a strong user experience point of view.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="mailto:jiazuozhang04@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
                >
                  <IconMail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="https://github.com/jzzhang04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <IconGitHub className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/jiazuozhang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <IconLinkedIn className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
