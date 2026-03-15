import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Home from './views/pages/Home';
import Archives from './views/pages/Archives';
import ProjectDetails from './views/pages/ProjectDetails';
import Footer from './views/components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* Top Navbar */}
        <nav className="global-nav">
          <div className="nav-links-left">
            <Link to="/">HOME</Link>
            <Link to="/archives">ARCHIVES</Link>
          </div>
          <div className="nav-links-right">
            <a href="https://github.com/emon6000" target="_blank" rel="noopener noreferrer" className="nav-icon-link">
              <FaGithub className="nav-icon" /> GITHUB
            </a>
            <a href="https://www.linkedin.com/in/abdem0n/" target="_blank" rel="noopener noreferrer" className="nav-icon-link">
              <FaLinkedin className="nav-icon" /> LINKEDIN
            </a>
          </div>
        </nav>

        {/* Dynamic Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;