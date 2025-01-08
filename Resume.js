import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Yalamati Sri Harshini Geethika</h1>
      <h2>B.Tech 3rd Year, Sasi</h2>
      <h3>Computer Science Student & Aspiring Fullstack Developer</h3>
      
      <section className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: harshini.yalamati@sasi.ac.in</p>
        <p>Phone: +91 6309751979</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yshgeethika">linkedin.com/in/yshgeethika</a></p>
      </section>

      <section className="education">
        <h3>Education</h3>
        <p><strong>Sasi Institute of Technology & Engineering</strong> - B.Tech in Computer Science</p>
        <p>Expected Graduation: [2026]</p>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        <div className="job">
          <h4>Intern - [Codsoft]</h4>
          <p>1 month experience</p>
          <p>Job responsibilities and achievements...</p>
        </div>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          <li>...other skills...</li>
        </ul>
      </section>

      <section className="projects">
        <h3>Projects</h3>
        <div className="project">
          <h4>Tictactoe</h4>
          <p>Brief description of the project and your role...</p>
          <p>GitHub: <a href="https://github.com/geethika138/CODSOFTINTERNSHIPTASK1"></a>github.com/geethika138/CODSOFTINTERNSHIPTASK1</p>
        </div>
        <div className="project">
          <h4>Recommendation system</h4>
          <p>Brief description of the project and your role...</p>
          <p>GitHub: <a href="https://github.com/geethika138/CODSOFTINTERNSHIPTASK2"></a>github.com/geethika138/CODSOFTINTERNSHIPTASK2</p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
