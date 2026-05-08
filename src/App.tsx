import { useEffect, useRef, useState, type PointerEvent } from "react";
import "./App.css";

type IconProps = { className?: string };

type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  live?: string;
  github?: string;
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
  },
  {
    eyebrow: "Spatial Storytelling",
    title: "Cryptids Field Guide Map",
    description:
      "An interactive geospatial interface with filters, animated transitions, and clustered points that keep dense map states readable.",
    stack: ["React", "TypeScript", "Leaflet", "Geospatial UI"],
    image: "/cryptids.png",
    live: "https://jzzhang04.github.io/cryptids-map",
    github: "https://github.com/JZZhang04/cryptids-map",
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
  },
];

const skillGroups = [
  {
    title: "Frontend Systems",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "Redux"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "NestJS", "Spring Boot", "REST APIs", "Java", "Python"],
  },
  {
    title: "Data & Persistence",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQLite"],
  },
  {
    title: "Applied AI",
    items: ["LLM Workflows", "PyTorch", "scikit-learn", "pandas", "NumPy"],
  },
];

const timeline: TimelineItem[] = [
  {
    logo: "/logos/blinkle.png",
    alt: "Blinkle AI",
    name: "Blinkle AI",
    title: "Software Engineer Intern",
    detail: "Built full-stack product workflows across React, Next.js, NestJS, AWS, PostgreSQL, and Stripe.",
    period: "Boston · 2025 - 2026",
  },
  {
    logo: "/logos/neu.png",
    alt: "Northeastern University",
    name: "Northeastern University",
    title: "M.S. in Computer Science",
    detail: "Graduate work focused on software engineering, algorithms and data structures, and full-stack product development.",
    period: "Boston · 2024 - 2026",
  },
  {
    logo: "/logos/accenture.png",
    alt: "Accenture",
    name: "Accenture",
    title: "Technology Consultant · Enterprise Data Platforms",
    detail: "Worked across data integration, system workflows, specifications, and dashboard-facing product delivery.",
    period: "Shanghai · 2021 - 2022",
  },
  {
    logo: "/probeinfo.png",
    alt: "Probeinfo Technology",
    name: "Probeinfo Technology",
    title: "Technology Consultant · Urban Planning Data Systems",
    detail:
      "Supported the development and delivery of city-planning data software, including spatial data preparation, feature validation, and issue triage.",
    period: "Shanghai · 2020 - 2021",
  },
  {
    logo: "/logos/upenn.png",
    alt: "University of Pennsylvania",
    name: "University of Pennsylvania",
    title: "Master of Urban Spatial Analytics",
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
  { label: "About", id: "top" },
  { label: "Strengths", id: "strengths" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
];

function App() {
  const [headerCompact, setHeaderCompact] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cursorGlow, setCursorGlow] = useState({ x: -240, y: -240 });

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

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleWheel = (event: globalThis.WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        container.scrollBy({ left: event.deltaY * 1.1, behavior: "auto" });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
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

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    setCursorGlow({ x: event.clientX, y: event.clientY });
  };

  const handlePointerLeave = () => {
    setCursorGlow({ x: -240, y: -240 });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0C1220] text-[#F3F6FB] selection:bg-[#45D6FF]/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[#0C1220]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.035),_transparent_62%)] opacity-80" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          headerCompact ? "px-3 py-3 sm:px-6" : "px-4 py-5 sm:px-8"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-center rounded-full border border-white/10 bg-[rgba(12,18,32,0.72)] backdrop-blur-xl transition-all duration-500 ${
            headerCompact
              ? "px-4 py-2 shadow-[0_14px_40px_rgba(2,8,23,0.46)]"
              : "px-5 py-3 shadow-[0_22px_70px_rgba(2,8,23,0.34)]"
          }`}
        >
          <nav className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#AAB4C4] transition duration-300 hover:bg-white/8 hover:text-[#F3F6FB]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section
          className="mx-auto flex max-w-7xl flex-col justify-start px-4 pb-28 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div
            className="cursor-glow pointer-events-none absolute z-[1] hidden md:block"
            style={{
              left: `${cursorGlow.x}px`,
              top: `${cursorGlow.y}px`,
            }}
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_12rem] lg:items-end">
            <div className="js-reveal section-fade max-w-4xl">
              <h1 className="max-w-5xl font-[Instrument_Serif] text-6xl leading-[0.92] tracking-tight text-[#F3F6FB] sm:text-7xl lg:text-[6.1rem]">
                Jiazuo Zhang
              </h1>

              <div className="mt-5 max-w-3xl">
                <p className="font-[Instrument_Serif] text-[2.15rem] leading-[1.12] tracking-[0.01em] text-[#45D6FF] sm:text-[2.6rem] lg:text-[3.15rem]">
                  Software engineer building full-stack products and AI-driven systems.
                </p>
              </div>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#AAB4C4] sm:text-lg">
                Open to software engineering roles across front-end, full-stack, and AI-enabled product development.
              </p>
            </div>

            <div className="js-reveal section-fade flex flex-wrap gap-3 lg:flex-col lg:items-stretch lg:justify-end">
              <a
                href="/Resume_Jiazuo_Zhang.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-start gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-3 text-left text-sm font-semibold text-[#F3F6FB] transition duration-300 hover:-translate-y-1 hover:border-[#F3F6FB] hover:bg-[#F3F6FB] hover:text-[#0C1220] hover:shadow-[0_18px_50px_rgba(255,255,255,0.18)]"
              >
                <IconFile className="h-4 w-4" />
                Resume
              </a>
              <a
                href="mailto:jiazuozhang04@gmail.com"
                className="inline-flex items-center justify-start gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-3 text-left text-sm font-semibold text-[#F3F6FB] transition duration-300 hover:-translate-y-1 hover:border-[#F3F6FB] hover:bg-[#F3F6FB] hover:text-[#0C1220] hover:shadow-[0_18px_50px_rgba(255,255,255,0.18)]"
              >
                <IconMail className="h-4 w-4" />
                Email
              </a>
              <a
                href="https://github.com/jzzhang04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-start gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-3 text-left text-sm font-semibold text-[#F3F6FB] transition duration-300 hover:-translate-y-1 hover:border-[#F3F6FB] hover:bg-[#F3F6FB] hover:text-[#0C1220] hover:shadow-[0_18px_50px_rgba(255,255,255,0.18)]"
              >
                <IconGitHub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/jiazuozhang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-start gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-3 text-left text-sm font-semibold text-[#F3F6FB] transition duration-300 hover:-translate-y-1 hover:border-[#F3F6FB] hover:bg-[#F3F6FB] hover:text-[#0C1220] hover:shadow-[0_18px_50px_rgba(255,255,255,0.18)]"
              >
                <IconLinkedIn className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8" id="strengths">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="js-reveal section-fade max-w-xl">
              <div className="text-xs uppercase tracking-[0.34em] text-[#45D6FF]">Strengths</div>
              <h2 className="mt-4 font-[Instrument_Serif] text-[2.45rem] leading-[1.02] tracking-[0.01em] text-[#F3F6FB] sm:text-[3.05rem]">
                What I tend to bring into a product team.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#AAB4C4]">
                I have worked with React, TypeScript, Next.js, NestJS, PostgreSQL, AWS, and Stripe to develop production
                features across frontend workflows, backend APIs, data modeling, payment systems, and deployment
                environments.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="js-reveal section-fade rounded-[1.8rem] border border-white/10 bg-[#141C2B] p-6 backdrop-blur"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D1DE]">{group.title}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-medium text-[#D8E0EB]"
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

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" id="experience">
          <div className="js-reveal section-fade mb-10 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.34em] text-[#45D6FF]">Experience</div>
            <h2 className="mt-4 font-[Instrument_Serif] text-[2.45rem] leading-[1.02] tracking-[0.01em] text-[#F3F6FB] sm:text-[3.05rem]">Experience and Education</h2>
          </div>

          <div className="relative space-y-2 before:absolute before:left-[1.4rem] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-[#45D6FF]/0 before:via-[#45D6FF]/40 before:to-[#45D6FF]/0 md:before:left-1/2">
            {timeline.map((item, index) => (
              <article
                key={`${item.name}-${item.period}`}
                className={`js-reveal section-fade relative grid gap-4 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className={`hidden md:block ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`} />
                <div className={`relative ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                  <div className="absolute left-[1.4rem] top-8 h-3 w-3 -translate-x-1/2 rounded-full border border-[#45D6FF]/50 bg-[#45D6FF] shadow-[0_0_26px_rgba(69,214,255,0.7)] md:left-auto md:right-auto md:top-10 md:-translate-x-0" />
                  <div className="ml-10 rounded-[1.8rem] border border-white/10 bg-[#141C2B] p-6 backdrop-blur md:ml-0">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#101827]">
                        <img src={item.logo} alt={item.alt} className="h-7 w-7 object-contain" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-[#F3F6FB]">{item.name}</div>
                        <div className="text-xs uppercase tracking-[0.22em] text-[#AAB4C4]">{item.period}</div>
                      </div>
                    </div>
                    <div className="mt-5 text-base font-medium text-[#F3F6FB]">{item.title}</div>
                    <p className="mt-3 text-sm leading-7 text-[#AAB4C4]">{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" id="projects">
          <div className="js-reveal section-fade mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.34em] text-[#45D6FF]">Selected Projects</div>
              <h2 className="mt-4 font-[Instrument_Serif] text-[2.45rem] leading-[1.02] tracking-[0.01em] text-[#F3F6FB] sm:text-[3.05rem]">
                A coverflow-style reel of systems I have shipped.
              </h2>
            </div>
          </div>

          <div className="js-reveal section-fade coverflow-shell rounded-[2rem] border border-white/10 bg-[#101827] px-0 py-8 shadow-[0_30px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl sm:px-2">
            <div ref={carouselRef} className="coverflow-track flex gap-6 overflow-x-auto px-5 pb-4 pt-6 sm:px-8">
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
                    className={`project-shell relative h-[34rem] w-[82vw] max-w-[26rem] shrink-0 cursor-pointer snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#141C2B_0%,#12192A_100%)] transition-all duration-500 md:w-[26rem] ${
                      index === activeIndex ? "ring-1 ring-[#45D6FF]/35" : ""
                    }`}
                    style={{
                      transform: `translate3d(${translateX}px, ${translateY}px, 0) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex: projects.length - absDistance,
                    }}
                  >
                    <div className="absolute inset-0 bg-[#141C2B]" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/8 to-transparent" />
                    <div className="relative flex h-full flex-col p-5 sm:p-6">
                      <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-56 w-full object-cover object-top transition duration-700 hover:scale-[1.04]"
                        />
                      </div>

                      <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#AAB4C4]/75">{project.eyebrow}</div>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#F3F6FB]">{project.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[#AAB4C4]">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#AAB4C4]"
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
                            className="inline-flex items-center rounded-full bg-[#F3F6FB] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0C1220] transition duration-300 hover:-translate-y-0.5"
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
                            className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F3F6FB] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
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
                    index === activeIndex ? "w-10 bg-[#45D6FF]" : "w-2.5 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`Focus ${project.title}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
