import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Button } from './components/Button';
import { Card } from './components/Card';
import './styles/App.css';

const App: React.FC = () => {
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
                <Button variant="primary" onClick={() => window.location.href = '#projects'}>
                  View My Work
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '#contact'}>
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

        {/* Projects Section */}
        <section id="projects" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
              Featured Projects
            </h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              A selection of recent projects demonstrating technical proficiency and visual excellence.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <Card title="E-Commerce Interface">
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  A highly responsive glassmorphic checkout app featuring complex state management and micro-interactions.
                </p>
                <Button variant="secondary" style={{ width: '100%' }}>Explore Project</Button>
              </Card>
              <Card title="Analytics Dashboard">
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Interactive data visualization charts built using SVG and canvas with real-time WebSocket connection.
                </p>
                <Button variant="secondary" style={{ width: '100%' }}>Explore Project</Button>
              </Card>
              <Card title="Task Orchestrator">
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  A lightweight kanban-style management workflow tool built with Drag and Drop and offline support.
                </p>
                <Button variant="secondary" style={{ width: '100%' }}>Explore Project</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
