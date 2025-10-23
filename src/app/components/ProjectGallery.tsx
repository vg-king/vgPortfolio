"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import GSAPAnimations from '../utils/gsapAnimations';
import './project-gallery.css';

// Import project images
import project1 from '../../assets/Screenshot 2025-10-21 205816.png';
import project2 from '../../assets/Screenshot 2025-10-21 205649.png';
import project3 from '../../assets/meistertask-capt-img-small.webp';

const ProjectGallery: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const cubeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cubeContainerRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    if (isRotating) return;
    setIsRotating(true);
    setCurrentProject((prev) => (prev + 1) % 3);
    setTimeout(() => setIsRotating(false), 800);
  };

  const prevProject = () => {
    if (isRotating) return;
    setIsRotating(true);
    setCurrentProject((prev) => (prev - 1 + 3) % 3);
    setTimeout(() => setIsRotating(false), 800);
  };

  // Project data for the cube carousel
  const projectData = [
    {
      title: "KIIT Finder",
      subtitle: "Lost & Found Portal",
      description: "A full-stack campus portal with JWT-secured login, image upload for item tracking, and user/admin roles. Implemented REST APIs, DTO-layered architecture, and integrated frontend search/filter features for faster item retrieval.",
      techStack: "Spring Boot + React + JWT + PostgreSQL",
      image: project1,
      category: "Full Stack",
      color: "from-blue-500 to-purple-600",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Health AI",
      subtitle: "Smart Healthcare Assistant",
      description: "Comprehensive healthcare app with AI-powered chat, multilingual support, file/voice upload, and vaccination tracking. Integrated ML backend with FastAPI, LangChain, Llama 3.2, and ChromaDB for real-time diagnosis assistance.",
      techStack: "Spring Boot + React + FastAPI + LangChain + Llama 3.2",
      image: project2,
      category: "AI/ML",
      color: "from-green-500 to-teal-600",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project Management System",
      subtitle: "Jira-like Collaboration Tool",
      description: "Jira-like app with JWT-secured login, project boards, role-based access, live chat, issue tracking, and team collaboration tools. Features real-time updates, drag-and-drop functionality, and comprehensive project analytics.",
      techStack: "Spring Boot + React + WebSocket + Redis + Docker",
      image: project3,
      category: "Collaboration",
      color: "from-purple-500 to-pink-600",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate title
      if (titleRef.current) {
        GSAPAnimations.fadeIn(titleRef.current, { delay: 0.3 });
      }
      
      // Animate cube with 3D effect
      if (cubeContainerRef.current) {
        GSAPAnimations.projectGallery3D(cubeContainerRef.current);
      }
    }
  }, []);

  return (
    <section className="project-gallery-section responsive-gallery">
      <div className="container mx-auto px-6 py-20 mobile-container">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work combining innovative design with cutting-edge technology
          </p>
        </div>

        {/* 3D Cube Carousel */}
        <div ref={cubeContainerRef} className="cube-carousel-container">
          <div className="cube-scene">
            <div 
              ref={cubeRef}
              className={`cube ${isRotating ? 'cube-rotating' : ''}`}
              style={{
                transform: `rotateY(${currentProject * -120}deg)`
              }}
              onMouseEnter={() => {
                if (cubeRef.current) {
                  cubeRef.current.style.animationPlayState = 'paused';
                }
              }}
              onMouseLeave={() => {
                if (cubeRef.current) {
                  cubeRef.current.style.animationPlayState = 'running';
                }
              }}
            >
              {projectData.map((project, index) => (
                <div 
                  key={index}
                  className={`cube-face cube-face-${index}`}
                >
                  <div className="project-card-cube">
                    <div className="project-image-container">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="project-image"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      <div className={`project-overlay bg-gradient-to-br ${project.color}`}>
                        <div className="project-category">{project.category}</div>
                      </div>
                      <div className="project-glow"></div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">{project.techStack}</div>
                      <div className="project-buttons">
                        <a 
                          href={project.demoLink}
                          className="btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>🌐</span> Live Demo
                        </a>
                        <a 
                          href={project.codeLink}
                          className="btn-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>⚙️</span> View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="cube-navigation">
            <button 
              className="nav-btn nav-prev"
              onClick={prevProject}
              disabled={isRotating}
              aria-label="Previous project"
            >
              <span>←</span>
            </button>
            
            <div className="project-indicators">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentProject ? 'active' : ''}`}
                  onClick={() => {
                    if (!isRotating) {
                      setIsRotating(true);
                      setCurrentProject(index);
                      setTimeout(() => setIsRotating(false), 800);
                    }
                  }}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-btn nav-next"
              onClick={nextProject}
              disabled={isRotating}
              aria-label="Next project"
            >
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Project Info */}
        <div className="project-title-display">
          <div className="featured-projects-subtitle">
            Featuring: KIIT Finder • Health AI • Project Management System
          </div>
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/vg-king/vgPortfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <span>👨‍💻</span> View Portfolio Code on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;