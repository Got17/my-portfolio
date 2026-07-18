import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Button } from './components/Button';
import { ProjectCard } from './components/ProjectCard';
import { TimelineItem } from './components/TimelineItem';
import './styles/App.css';

// Visual assets
import heroImage from './assets/hero.png';
import projectEcommerce from './assets/project-ecommerce.jpg';
import projectDashboard from './assets/project-dashboard.jpg';
import projectTask from './assets/project-task.jpg';

// Project constants
interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "AI Code Review Extension",
    description: "A VS Code extension that integrates advanced AI capabilities to perform automated, context-aware code reviews directly in the editor.",
    tags: ['TypeScript', 'VS Code API', 'Node.js', 'AI APIs'],
    githubUrl: "https://github.com/Got17/ai-code-review-vscode",
    imageUrl: projectTask
  },
  {
    title: "Reactive Web Application Platform",
    description: "A full-stack reactive web portal built with F# and WebSharper, utilizing functional programming paradigms for server-client communication and state management.",
    tags: ['F#', 'WebSharper', 'MSSQL', 'HTML5/CSS'],
    githubUrl: "https://github.com/Got17",
    imageUrl: projectEcommerce
  },
  {
    title: "Distributed System Integration Gateway",
    description: "A full-stack administration and monitoring dashboard for microservices, coordinating data streams between remote postal systems and secure government APIs.",
    tags: ['NestJS', 'Go', 'React', 'PostgreSQL', 'Redis'],
    githubUrl: "https://github.com/Got17",
    imageUrl: projectDashboard
  }
];

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const EXPERIENCE_DATA: Experience[] = [
  {
    year: "March 2026 - Present",
    title: "Backend Developer",
    company: "AIF Group (Laos)",
    description: "Maintain and integrate national-scale backend applications including LaoPost and the Government Data Exchange (GDX) platform. Connect multi-party distributed sites and optimize integration flows.",
    tags: ['NestJS', 'Go', 'PostgreSQL', 'Redis', 'GDX']
  },
  {
    year: "August 2024 - December 2025",
    title: "F# Developer (Internship)",
    company: "IntelliFactory (Hungary)",
    description: "Developed full-stack features and maintained IntelliFactory's core technology framework, WebSharper (reactive F# web framework). Maintained relational databases.",
    tags: ['F#', 'WebSharper', 'MSSQL', 'HTML5/CSS']
  },
  {
    year: "September 2022 - January 2026",
    title: "B.Sc. in Computer Engineering",
    company: "University in Hungary",
    description: "Completed specialized degree in Computer Engineering, focusing on software design, systems, and algorithms.",
    tags: ['Computer Science', 'Systems', 'Algorithms', 'Hardware/Software']
  }
];

const SKILLS_DATA = [
  "Go & NestJS",
  "F# & WebSharper",
  "PostgreSQL & Redis & MSSQL",
  "System Integration (GDX)",
  "REST APIs & WebSockets",
  "Docker & Cloudflare Tunnels"
];

const App: React.FC = () => {
  // Smooth scroll handler taking scrolled header height into account
  const handleScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 64; // matches var(--space-16) scrolled navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-shell">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content animate-slide-up">
              <p className="hero-subtitle">Hi, my name is</p>
              <h1 className="hero-title">
                Souvanxay <span>Luangsouvannavong</span>
              </h1>
              <p className="hero-description">
                I build robust, scalable server architectures and secure system integrations.
                Specialized in NestJS, Go, and F#, with experience bridging government-scale data exchange (GDX) platforms and postal services (LaoPost).
              </p>
              <div className="hero-cta">
                <Button variant="primary" onClick={() => handleScrollTo('projects')}>
                  View My Work
                </Button>
                <Button variant="outline" onClick={() => handleScrollTo('contact')}>
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="hero-visual animate-fade-in">
              <div className="hero-blob"></div>
              <div className="hero-image-container">
                <img src={heroImage} alt="Souvanxay Luangsouvannavong Graphic" className="hero-image" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section section-padding">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h2 className="section-title">About Me</h2>
                <p className="about-text">
                  I am a backend-focused Software Engineer with a passion for designing reliable system architectures and connecting distributed systems. 
                  I hold a Bachelor's degree in Computer Engineering from Hungary (graduated January 2026), where I worked as a part-time F# Developer at IntelliFactory, 
                  contributing to WebSharper (a full-stack F# reactive web framework).
                </p>
                <p className="about-text">
                  Currently, I am working at AIF Group in Laos as a Backend Developer, maintaining and integrating critical national infrastructure projects 
                  like LaoPost and the Government Data Exchange (GDX) platform.
                </p>
                <div className="about-skills">
                  <h3 className="skills-title">Core Skills</h3>
                  <div className="skills-list">
                    {SKILLS_DATA.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="about-illustration-container">
                <div className="about-illustration-box glass-panel glow-effect">
                  <div className="illustration-icon">🚀</div>
                  <h4>Interactive & Dynamic</h4>
                  <p>Fostering interactive motion, layout integrations, and secure backend communication systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Featured Projects</h2>
            <p className="section-subtitle text-center">
              A selection of recent projects demonstrating technical proficiency and visual excellence.
            </p>
            <div className="projects-grid">
              {PROJECTS_DATA.map((project) => (
                <ProjectCard 
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Work Experience</h2>
            <p className="section-subtitle text-center">
              My professional history as a software engineer and front-end developer.
            </p>
            <div className="timeline">
              {EXPERIENCE_DATA.map((exp) => (
                <TimelineItem 
                  key={exp.title + exp.company}
                  year={exp.year}
                  title={exp.title}
                  company={exp.company}
                  description={exp.description}
                  tags={exp.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section section-padding">
          <div className="container">
            <div className="contact-card glass-panel glow-effect">
              <h2 className="section-title text-center">Get In Touch</h2>
              <p className="contact-description text-center">
                Have an exciting project, job opening, or want to discuss system architectures? Drop me a line, and let's build something awesome together.
              </p>
              <div className="contact-actions">
                <Button 
                  variant="primary" 
                  onClick={() => window.location.href = 'mailto:souvanxay38@gmail.com'}
                >
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://www.linkedin.com/in/souvanxay-luangsouvannavong/', '_blank', 'noopener,noreferrer')}
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
