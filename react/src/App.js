import React, { useState } from "react";
import { Sun, Moon, Mail, Github, Linkedin, Code } from "lucide-react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const projects = [
    { id: 1, title: "Portfolio Website", desc: "A personal React portfolio site.", tags: ["React", "CSS"], repo: "#" },
    { id: 2, title: "Task Manager", desc: "A full-stack task management app.", tags: ["Laravel", "MySQL"], repo: "#" },
    { id: 3, title: "API Dashboard", desc: "A dashboard visualizing REST API data.", tags: ["Vite", "Tailwind"], repo: "#" },
  ];

  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <header className="header">
        <h1>My Portfolio</h1>
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <section className="hero">
        <h2>Hello, I’m <span className="highlight">Navera jake</span></h2>
        <p>I’m a React developer who builds clean, responsive, and functional web apps.</p>
        <div className="socials">
          <a href="#"><Github /></a>
          <a href="#"><Linkedin /></a>
          <a href="mailto:naverajake07@gmail"><Mail /></a>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <a href={p.repo} className="repo-link">View Repo</a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Interested in working together? Let’s talk!</p>
        <a href="mailto:naverajake07@gmail.com" className="contact-btn">
          <Mail size={16} /> Send Email
        </a>
      </section>

      <footer>
        © {new Date().getFullYear()} Navera jake  — Built with React
      </footer>
    </div>
  );
}

export default App;