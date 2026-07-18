import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Button } from './components/Button';
import { ProjectCard } from './components/ProjectCard';
import { TimelineItem } from './components/TimelineItem';
import './styles/App.css';

// Project constants
interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "E-Commerce Interface",
    description: "A highly responsive glassmorphic checkout application featuring complex state management and micro-interactions.",
    tags: ['React', 'TypeScript', 'CSS modules'],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization charts built using SVG and canvas with real-time WebSocket connection.",
    tags: ['Next.js', 'Chart.js', 'WebSockets'],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Task Orchestrator",
    description: "A lightweight kanban-style management workflow tool built with Drag and Drop and offline support.",
    tags: ['React', 'Vite', 'IndexedDB'],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
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
    year: "2024 - Present",
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    description: "Lead frontend development for enterprise analytics platform. Established modular design systems, reducing styling bundle size by 40% and accelerating page assembly speed.",
    tags: ['React', 'TypeScript', 'Tailwind', 'Webpack']
  },
  {
    year: "2022 - 2024",
    title: "Frontend Developer",
    company: "Creative Web Labs",
    description: "Designed and deployed high-performance responsive marketing websites and single-page apps. Collaborated closely with designers to build bespoke interactive features and custom layouts.",
    tags: ['Vue.js', 'Vite', 'Sass', 'Figma']
  },
  {
    year: "2020 - 2022",
    title: "Junior Web Engineer",
    company: "Pixel Studio",
    description: "Maintained client websites and configured modern content management systems. Implemented SEO improvements and streamlined accessibility standards.",
    tags: ['HTML5', 'Vanilla JS', 'CSS Grid', 'WordPress']
  }
];

const SKILLS_DATA = [
  "React & Next.js",
  "TypeScript",
  "CSS Systems",
  "UI/UX Prototyping",
  "State Management",
  "Performance Audit"
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
                Creative <span>Software Engineer</span>
              </h1>
              <p className="hero-description">
                I build clean, accessible, and high-performance web applications.
                Specialized in React, TypeScript, and crafting interactive modern user experiences.
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
                <div className="hero-image-placeholder">
                  💻
                </div>
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
                  I am a passionate developer focused on building interactive, user-centered digital products.
                  With a solid background in software design systems, UI architectures, and performance optimization, 
                  I aim to bridge the gap between design and engineering.
                </p>
                <p className="about-text">
                  My design philosophy revolves around simplicity, accessibility, and subtle micro-interactions that 
                  elevate the user experience.
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
                  <p>Fostering interactive motion, layout animations, and premium custom styling conventions.</p>
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
                Have an exciting project, job opening, or want to discuss design systems? Drop me a line, and let's build something awesome together.
              </p>
              <div className="contact-actions">
                <Button 
                  variant="primary" 
                  onClick={() => window.location.href = 'mailto:hello@example.com'}
                >
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://linkedin.com', '_blank', 'noopener,noreferrer')}
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
