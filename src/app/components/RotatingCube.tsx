"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./rotating-cube.css";

// Import project images
import project1 from '../../assets/Screenshot 2025-10-21 205816.png';
import project2 from '../../assets/Screenshot 2025-10-21 205649.png';
import project3 from '../../assets/meistertask-capt-img-small.webp';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  techStack: string;
  image: string | typeof project1;
  category: string;
  color: string;
  demoLink: string;
  codeLink: string;
}

export default function RotatingCube() {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects: Project[] = [
    {
      title: "KIIT Finder",
      subtitle: "Lost & Found Portal",
      description: "A full-stack campus portal with JWT-secured login, image upload for item tracking, and user/admin roles.",
      techStack: "Spring Boot + React + JWT + PostgreSQL",
      image: project1,
      category: "Full Stack",
      color: "from-purple-500 to-indigo-600",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Health AI",
      subtitle: "Smart Healthcare Assistant",
      description: "AI-powered healthcare app with multilingual support, file/voice upload, and vaccination tracking.",
      techStack: "Spring Boot + React + FastAPI + LangChain",
      image: project2,
      category: "AI/ML",
      color: "from-blue-500 to-cyan-600",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project Management System",
      subtitle: "Jira-like Collaboration Tool",
      description: "Comprehensive project management with real-time updates, team collaboration, and analytics.",
      techStack: "Spring Boot + React + WebSocket + Redis",
      image: project3,
      category: "Collaboration",
      color: "from-pink-500 to-red-600",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev - 120); // Rotate 120 degrees for 3 faces
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualRotation = (direction: 'prev' | 'next') => {
    const rotationAmount = direction === 'next' ? -120 : 120;
    setRotation((prev) => prev + rotationAmount);
  };

  return (
    <div className="rotating-cube-container">
      <div className="cube-wrapper">
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="cube-3d"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cube-face-3d face-${index}`}
              style={{
                transform: `rotateY(${index * 120}deg) translateZ(280px)`
              }}
            >
              <div className={`project-card-3d bg-gradient-to-br ${project.color}`}>
                <div className="project-image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-image-3d"
                  />
                  <div className="image-overlay">
                    <span className="category-badge">{project.category}</span>
                  </div>
                </div>
                
                <div className="project-content-3d">
                  <h3 className="project-title-3d">{project.title}</h3>
                  <p className="project-subtitle-3d">{project.subtitle}</p>
                  <p className="project-description-3d">{project.description}</p>
                  
                  <div className="tech-stack-3d">
                    {project.techStack}
                  </div>
                  
                  <div className="project-buttons-3d">
                    <a 
                      href={project.demoLink}
                      className="btn-3d btn-primary-3d"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>🌐</span> Live Demo
                    </a>
                    <a 
                      href={project.codeLink}
                      className="btn-3d btn-secondary-3d"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>⚙️</span> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Manual Navigation */}
      <div className="cube-controls">
        <button 
          className="control-btn prev-btn"
          onClick={() => handleManualRotation('prev')}
          aria-label="Previous project"
        >
          ←
        </button>
        
        <div className="rotation-indicator-3d">
          <span className="indicator-icon">🔄</span>
          <span className="indicator-text">
            {isPaused ? 'Paused' : 'Auto-rotating'}
          </span>
        </div>
        
        <button 
          className="control-btn next-btn"
          onClick={() => handleManualRotation('next')}
          aria-label="Next project"
        >
          →
        </button>
      </div>

      {/* Project Counter */}
      <div className="project-counter-3d">
        <span>Featured Projects: {projects.length}</span>
      </div>
    </div>
  );
}