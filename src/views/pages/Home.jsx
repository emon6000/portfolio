import React, { useState } from "react";
import { usePortfolio } from "../../controllers/usePortfolio";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectModal from "../components/ProjectModal";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import "./Home.css";

const Home = () => {
  const { getProjects, getCPProfiles } = usePortfolio();
  const projects = getProjects();
  const cpProfiles = getCPProfiles();

  // State for toggling between Carousel and List view, and handling the Modal
  const [viewMode, setViewMode] = useState("carousel");
  const [selectedProject, setSelectedProject] = useState(null);
  // Add this right below your viewMode and selectedProject states
  const [formStatus, setFormStatus] = useState("SEND TRANSMISSION");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("TRANSMITTING...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvzwbbnz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("MESSAGE RECEIVED");
        form.reset(); // Clears the form inputs
        setTimeout(() => setFormStatus("SEND TRANSMISSION"), 3000); // Resets button text after 3 seconds
      } else {
        setFormStatus("ERROR - TRY AGAIN");
        setTimeout(() => setFormStatus("SEND TRANSMISSION"), 3000);
      }
    } catch (error) {
      setFormStatus("ERROR - TRY AGAIN");
      setTimeout(() => setFormStatus("SEND TRANSMISSION"), 3000);
    }
  };
  const renderCPIcon = (platform) => {
    if (platform === "LeetCode")
      return <SiLeetcode className="cp-icon leetcode-icon" />;
    if (platform === "Codeforces")
      return <SiCodeforces className="cp-icon cf-icon" />;
    return null;
  };

  return (
    <div className="home-container">
      {/* 00 // HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-greeting">HELLO, WORLD. I AM</p>
          <h1 className="hero-name">ABDULLAH AL MAHMUD EMON</h1>
          <h1 className="hero-role gradient-text">
            WEB
            <br />
            DEVELOPER
          </h1>
          <h1 className="hero-role-secondary">
            PROGRAMMER&
            <br />
            GAMER
          </h1>

          <p className="hero-description">
            Learning New technologies and exploring the world . I am a
            passionate web developer. My journey in web development has been
            fueled by a love for problem-solving and a desire to bring
            innovative ideas to life on the web.
          </p>
        </div>

        <div className="hero-image-container">
          <div className="image-wrapper">
            {/* Path points to public/profile.jpg */}
            <img src="/profile.jpg" alt="Profile" className="profile-img" />
            {/* This overlay adds the subtle tint over the photo corners */}
            <div className="neon-overlay"></div>
          </div>
        </div>
      </section>

      {/* 01 // PROJECTS SECTION */}
      <section className="projects-section">
        <div className="section-header">
          <h2 className="section-number">/ MY PROJECTS</h2>
          <p className="section-subtitle">!!</p>
        </div>

        {/* Dynamic View Toggle: Carousel vs List View */}
        {viewMode === "carousel" ? (
          <>
            <ProjectCarousel projects={projects} />
            <div className="view-toggle-container">
              <button
                className="view-toggle-btn"
                onClick={() => setViewMode("list")}
              >
                VIEW ALL PROJECTS ▤
              </button>
            </div>
          </>
        ) : (
          <div className="project-list-view">
            <div className="view-toggle-container top-toggle">
              <button
                className="view-toggle-btn"
                onClick={() => setViewMode("carousel")}
              >
                ⟵ BACK TO CAROUSEL
              </button>
            </div>

            <div className="list-grid">
              {projects.map((proj) => (
                <div key={proj.id} className="list-card">
                  <div className="list-card-content">
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                    <div className="list-tech">
                      {proj.tech.split(",").map((t, i) => (
                        <span key={i}>{t.trim()}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="explore-list-btn"
                    onClick={() => setSelectedProject(proj)}
                  >
                    EXPLORE ↗
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 02 // CP SECTION */}
      <section className="cp-section">
        <div className="section-header">
          <h2 className="section-number">/ PROBLEM SOLVING</h2>
          <p className="section-subtitle">
            Algorithmic Foundation & Data Structures
          </p>
        </div>
        <div className="cp-grid">
          {cpProfiles.map((profile) => (
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={profile.id}
              className="cp-card"
            >
              <div className="cp-card-header">
                {renderCPIcon(profile.platform)}
                <h3 style={{ color: profile.color }}>{profile.platform}</h3>
              </div>
              <p className="cp-handle">@{profile.handle}</p>
              <div className="cp-divider"></div>
              <p className="cp-stats">{profile.stats}</p>
              <div className="cp-focus">
                <span>Focus:</span> {profile.focusTopics}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 03 // SKILLS SECTION */}
      <section className="skills-section">
        <div className="section-header">
          <h2 className="section-number">/ Skills</h2>
          <p className="section-subtitle">Languages & Frameworks</p>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML/CSS, Tailwind CSS, Bootstrap</p>
          </div>
          <div className="skill-card">
            <h3>Backend Basics</h3>
            <p>Node.js, Express, Django, Firebase</p>
          </div>
          <div className="skill-card">
            <h3>Core Languages</h3>
            <p>C, C++, Java, Python, PHP</p>
          </div>
          <div className="skill-card">
            <h3>Databases</h3>
            <p>MySQL, MongoDB, PostgreSQL</p>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git & GitHub</p>
          </div>
        </div>
      </section>

      {/* 04 // CONTACT SECTION */}
      <section className="contact-section">
        <div className="section-header">
          <h2 className="section-number">/ CONTACT</h2>
          <p className="section-subtitle">Let's build something</p>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            {formStatus}
          </button>
        </form>
      </section>

      {/* MODAL OVERLAY - Only renders when selectedProject is not null */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;
