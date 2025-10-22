"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import GSAPAnimations from '../utils/gsapAnimations';
import './animations.css';
import reactLogo from '../../assets/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png';
import jsLogo from '../../assets/png-clipart-javascript-logo-computer-icons-vue-js-angle-text.png';
import tsLogo from '../../assets/png-transparent-angularjs-typescript-javascript-vue-js-others-blue-angle-text-thumbnail.png';
import htmlLogo from '../../assets/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png';
import javaLogo from '../../assets/images.png';
import springLogo from '../../assets/images (1).png';
import kotlinLogo from '../../assets/images (2).png';

export default function Skills() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      company: "USC KIIT",
      role: "Web Development Member",
      period: "2024 - Present",
      icon: "💻",
      color: "#8b5cf6",
      description: "Full Stack Development with Spring Boot & React"
    },
    {
      company: "LeetCode",
      role: "50 Days Badge Challenge",
      period: "2024",
      icon: "🏆",
      color: "#3b82f6",
      description: "Daily DSA Practice & Problem Solving"
    },
    {
      company: "KIIT University",
      role: "B.Tech CSE Student",
      period: "2023 - 2027",
      icon: "🎓",
      color: "#a78bfa",
      description: "CGPA: 8.67/10 - Data Structures, Java, DBMS"
    },
    {
      company: "Open Source",
      role: "Project Contributor",
      period: "2024 - Present",
      icon: "🚀",
      color: "#ec4899",
      description: "Building scalable full-stack applications"
    }
  ];

  const techStack = [
    { name: "Java", icon: "☕", color: "#f59e0b" },
    { name: "JavaScript", icon: "🟨", color: "#eab308" },
    { name: "React", icon: "⚛️", color: "#3b82f6" },
    { name: "Spring Boot", icon: "🍃", color: "#10b981" },
    { name: "TypeScript", icon: "🔷", color: "#3178c6" },
    { name: "Kotlin", icon: "🟣", color: "#7f52ff" }
  ];

  const solarSystemTech = [
    { name: "React", icon: reactLogo, color: "#61dafb", orbit: 180, speed: 6, angle: 0 },
    { name: "Spring Boot", icon: springLogo, color: "#6db33f", orbit: 240, speed: 8, angle: 60 },
    { name: "Java", icon: javaLogo, color: "#f89820", orbit: 300, speed: 10, angle: 120 },
    { name: "TypeScript", icon: tsLogo, color: "#3178c6", orbit: 360, speed: 12, angle: 180 },
    { name: "JavaScript", icon: jsLogo, color: "#f7df1e", orbit: 420, speed: 14, angle: 240 },
    { name: "Kotlin", icon: kotlinLogo, color: "#7f52ff", orbit: 480, speed: 16, angle: 300 }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate work experience title
      if (titleRef.current) {
        GSAPAnimations.fadeIn(titleRef.current, { delay: 0.2 });
      }
      
      // Animate experience cards
      if (experiencesRef.current) {
        const cards = experiencesRef.current.querySelectorAll('[data-experience-card]');
        GSAPAnimations.staggerIn(Array.from(cards), { delay: 0.5 });
      }
      
      // Animate skills section
      if (skillsRef.current) {
        GSAPAnimations.scaleIn(skillsRef.current, { delay: 1 });
      }
    }
  }, []);

  return (
    <section id="about" className="skills-section" style={{
      padding: '6rem 2rem 8rem 2rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Work Experience */}
        <div style={{ marginBottom: '8rem' }}>
          <h2 ref={titleRef} style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '4rem',
            textAlign: 'center',
            textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
          }}>
            Work Experience
          </h2>

          <div ref={experiencesRef} className="experience-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-experience-card
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 22, 54, 0.8), rgba(41, 37, 75, 0.6))',
                  border: '1px solid rgba(147, 51, 234, 0.2)',
                  borderRadius: '20px',
                  padding: '2.8rem 2.2rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    0 20px 80px rgba(147, 51, 234, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `
                    0 25px 50px rgba(0, 0, 0, 0.4),
                    0 40px 120px rgba(147, 51, 234, 0.25),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    0 20px 80px rgba(147, 51, 234, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.2)';
                }}
              >
                {/* Enhanced Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-40%',
                  right: '-40%',
                  width: '180%',
                  height: '180%',
                  background: `
                    radial-gradient(
                      ellipse at 70% 30%, 
                      ${exp.color}12 0%, 
                      ${exp.color}08 35%, 
                      transparent 70%
                    )
                  `,
                  zIndex: 0,
                  filter: 'blur(40px)'
                }}></div>

                {/* Decorative Elements */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '60px',
                  height: '60px',
                  background: `radial-gradient(circle, ${exp.color}20, transparent)`,
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Icon with enhanced styling */}
                  <div style={{
                    fontSize: '3.5rem',
                    marginBottom: '2rem',
                    filter: `drop-shadow(0 4px 20px ${exp.color}60)`,
                    animation: 'float 4s ease-in-out infinite',
                    animationDelay: `${index * 0.2}s`
                  }}>
                    {exp.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '0.8rem',
                    letterSpacing: '-0.01em'
                  }}>
                    {exp.company}
                  </h3>
                  
                  <p style={{
                    color: '#a78bfa',
                    fontSize: '1.1rem',
                    marginBottom: '0.6rem',
                    fontWeight: '600'
                  }}>
                    {exp.role}
                  </p>
                  
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem',
                    fontWeight: '500'
                  }}>
                    {exp.period}
                  </p>
                  
                  <p style={{
                    color: '#d1d5db',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '2rem'
                  }}>
                    {exp.description}
                  </p>

                  {/* Learn More Button */}
                  <button
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.6), rgba(79, 70, 229, 0.4))',
                      border: '1px solid rgba(147, 51, 234, 0.5)',
                      color: 'white',
                      padding: '0.8rem 1.8rem',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backdropFilter: 'blur(10px)',
                      width: 'fit-content'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(79, 70, 229, 0.6))';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(147, 51, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.6), rgba(79, 70, 229, 0.4))';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Learn More
                    <span style={{
                      fontSize: '0.8rem',
                      transition: 'transform 0.3s ease'
                    }}>
                      →
                    </span>
                  </button>
                </div>

                {/* Subtle animated border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '20px',
                  padding: '1px',
                  background: `linear-gradient(135deg, ${exp.color}30, transparent, ${exp.color}20)`,
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'exclude',
                  zIndex: -1
                }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Looking for Team Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '8rem',
          position: 'relative'
        }}>
          <p style={{
            color: '#d1d5db',
            fontSize: '1.2rem',
            marginBottom: '1.5rem',
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            I'm currently looking to join a <span style={{ 
              color: '#a78bfa', 
              fontWeight: '600',
              textShadow: '0 0 10px rgba(167, 139, 250, 0.5)'
            }}>cross-functional</span> team
          </p>
          <p style={{
            color: '#9ca3af',
            fontSize: '1rem',
            marginBottom: '4rem'
          }}>
            that values improving people's lives through accessible design and scalable technology
          </p>

          {/* Top Row Tech Stack Exactly Like Figma */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0',
            marginBottom: '4rem',
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto 4rem'
          }}>
            {[
              { name: "Java", icon: javaLogo, color: "#f59e0b" },
              { name: "JavaScript", icon: jsLogo, color: "#eab308" },
              { name: "React", icon: reactLogo, color: "#3b82f6" },
              { name: "Spring Boot", icon: springLogo, color: "#10b981" },
              { name: "TypeScript", icon: tsLogo, color: "#3178c6" },
              { name: "Kotlin", icon: kotlinLogo, color: "#7f52ff" }
            ].map((tech, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center',
                position: 'relative'
              }}>
                {/* Tech Icon */}
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}50)`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    border: `2px solid ${tech.color}60`,
                    boxShadow: `0 8px 32px ${tech.color}40`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    animation: `float 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`
                  }}
                  title={tech.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15) translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 12px 48px ${tech.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = `0 8px 32px ${tech.color}40`;
                  }}
                >
                  <Image 
                    src={tech.icon} 
                    alt={tech.name}
                    width={32}
                    height={32}
                    style={{
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* Connecting Dashed Line */}
                {index < 5 && (
                  <div style={{
                    width: '60px',
                    height: '2px',
                    margin: '0 10px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(90deg, ${tech.color}60 0%, rgba(147, 51, 234, 0.6) 50%, ${[
                        { name: "Java", icon: "☕", color: "#f59e0b" },
                        { name: "JavaScript", icon: "🟨", color: "#eab308" },
                        { name: "React", icon: "⚛️", color: "#3b82f6" },
                        { name: "Spring Boot", icon: "🍃", color: "#10b981" },
                        { name: "TypeScript", icon: "🔷", color: "#3178c6" },
                        { name: "Kotlin", icon: "🟣", color: "#7f52ff" }
                      ][index + 1]?.color}60 100%)`,
                      maskImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 3px, black 3px, black 6px)',
                      WebkitMaskImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 3px, black 3px, black 6px)',
                      animation: 'dash 2s linear infinite'
                    }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Solar System Logo with Orbiting Tech Stack - Figma Style */}
        <div ref={skillsRef} className="solar-system-container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
          marginBottom: '2rem',
          position: 'relative',
          height: '600px',
          width: '100%'
        }}>
          {/* Static Orbital Rings - Like Figma */}
          {[180, 240, 300, 360, 420, 480].map((radius, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: `${radius}px`,
                height: `${radius}px`,
                border: '1px solid rgba(147, 51, 234, 0.15)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0
              }}
            />
          ))}

          {/* Central Glow - Figma Style */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(147, 51, 234, 0.4) 30%, rgba(147, 51, 234, 0.1) 60%, transparent 80%)',
            filter: 'blur(50px)',
            zIndex: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
          
          {/* Inner Glow */}
          <div style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 1) 0%, rgba(167, 139, 250, 0.6) 40%, transparent 70%)',
            filter: 'blur(25px)',
            zIndex: 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}></div>
          
          {/* Central Logo - Figma Style */}
          <div style={{
            position: 'absolute',
            zIndex: 10,
            fontSize: '4rem',
            fontWeight: '900',
            color: 'white',
            textShadow: '0 0 40px rgba(147, 51, 234, 1), 0 0 80px rgba(167, 139, 250, 1)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            userSelect: 'none',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(167, 139, 250, 0.6)',
            backdropFilter: 'blur(10px)'
          }}>
            V
          </div>

          {/* Orbiting Tech Icons - Fixed Orientation */}
          {solarSystemTech.map((tech, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '50px',
                height: '50px',
                margin: 'auto',
                zIndex: 5,
                '--orbit-radius': `${tech.orbit / 2}px`,
                transform: `rotate(0deg) translate(${tech.orbit / 2}px) rotate(0deg)`,
                animation: `orbitFixed ${tech.speed}s linear infinite`
              } as React.CSSProperties & { '--orbit-radius': string }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  background: `linear-gradient(135deg, ${tech.color}60, ${tech.color}80)`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  border: `2px solid ${tech.color}`,
                  boxShadow: `
                    0 8px 32px ${tech.color}60,
                    0 0 40px ${tech.color}40,
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `,
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                title={tech.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.3)';
                  e.currentTarget.style.boxShadow = `
                    0 12px 48px ${tech.color}60,
                    0 0 80px ${tech.color}40,
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px ${tech.color}60,
                    0 0 40px ${tech.color}40,
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `;
                }}
              >
                <Image 
                  src={tech.icon} 
                  alt={tech.name}
                  width={28}
                  height={28}
                  style={{
                    objectFit: 'contain'
                  }}
                />
                
                {/* Tech Name Label */}
                <div style={{
                  position: 'absolute',
                  bottom: '-35px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}
                className="tech-label"
                >
                  {tech.name}
                </div>
              </div>
            </div>
          ))}

          {/* Connecting Dotted Lines - Figma Style */}
          {solarSystemTech.map((tech, index) => (
            <svg
              key={index}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                zIndex: 3,
                pointerEvents: 'none'
              }}
            >
              <circle
                cx="50%"
                cy="50%"
                r={tech.orbit / 2}
                fill="none"
                stroke="rgba(147, 51, 234, 0.3)"
                strokeWidth="1"
                strokeDasharray="3 7"
                style={{
                  animation: `dash 8s linear infinite`,
                  animationDelay: `${index * 1}s`
                }}
              />
            </svg>
          ))}
        </div>

        {/* More Details Tech Stack Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '6rem',
          marginBottom: '4rem'
        }}>
          <button
            onClick={() => {
              const detailsSection = document.getElementById('tech-details');
              const button = document.querySelector('[data-details-button]') as HTMLButtonElement;
              
              if (detailsSection) {
                const isHidden = detailsSection.style.maxHeight === '0px' || detailsSection.style.display === 'none';
                
                if (isHidden) {
                  // Show with animations
                  detailsSection.style.display = 'block';
                  detailsSection.style.opacity = '0';
                  detailsSection.style.transform = 'translateY(-20px)';
                  
                  setTimeout(() => {
                    detailsSection.style.maxHeight = '3000px';
                    detailsSection.style.opacity = '1';
                    detailsSection.style.transform = 'translateY(0)';
                  }, 10);
                  
                  // Smooth scroll to the section
                  setTimeout(() => {
                    detailsSection.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start',
                      inline: 'nearest'
                    });
                  }, 300);
                  
                  // Update button text and arrow
                  if (button) button.innerHTML = 'Hide Tech Stack Details <span style="font-size: 1.2rem; transition: transform 0.3s ease;">↑</span>';
                  
                } else {
                  // Hide with animations
                  detailsSection.style.opacity = '0';
                  detailsSection.style.transform = 'translateY(-20px)';
                  detailsSection.style.maxHeight = '0px';
                  
                  setTimeout(() => {
                    detailsSection.style.display = 'none';
                  }, 500);
                  
                  // Scroll back to button
                  button?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'nearest'
                  });
                  
                  // Update button text and arrow
                  if (button) button.innerHTML = 'More Details About My Tech Stack <span style="font-size: 1.2rem; transition: transform 0.3s ease;">↓</span>';
                }
              }
            }}
            data-details-button
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(79, 70, 229, 0.6))',
              border: '2px solid rgba(147, 51, 234, 0.6)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '16px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '0 auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 1), rgba(79, 70, 229, 0.8))';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(147, 51, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(79, 70, 229, 0.6))';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.3)';
            }}
          >
            More Details About My Tech Stack
            <span style={{ fontSize: '1.2rem' }}>↓</span>
          </button>
        </div>

        {/* Detailed Tech Stack */}
        <div 
          id="tech-details" 
          style={{
            display: 'none',
            maxHeight: '0px',
            overflow: 'hidden',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: '0 2rem',
            opacity: '0',
            transform: 'translateY(-20px)'
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 22, 54, 0.9), rgba(41, 37, 75, 0.7))',
            border: '1px solid rgba(147, 51, 234, 0.3)',
            borderRadius: '24px',
            padding: '3rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            
            {/* Languages */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{
                color: '#a78bfa',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Programming Languages
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1.5rem',
                justifyItems: 'center'
              }}>
                {[
                  { name: 'Java', icon: javaLogo, color: '#f89820' },
                  { name: 'JavaScript', icon: jsLogo, color: '#f7df1e' },
                  { name: 'Kotlin', icon: kotlinLogo, color: '#7f52ff' },
                  { name: 'TypeScript', icon: tsLogo, color: '#3178c6' },
                  { name: 'HTML', icon: htmlLogo, color: '#e34c26' },
                  { name: 'CSS', color: '#1572b6' },
                  { name: 'SQL', color: '#336791' },
                  { name: 'C', color: '#a8b9cc' }
                ].map((tech, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1.2rem',
                    background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}25)`,
                    borderRadius: '16px',
                    border: `1px solid ${tech.color}40`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    animation: `slideInUp 0.6s ease forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: '0',
                    transform: 'translateY(20px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 8px 32px ${tech.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    {tech.icon ? (
                      <Image 
                        src={tech.icon} 
                        alt={tech.name}
                        width={40}
                        height={40}
                        style={{
                          objectFit: 'contain'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: `${tech.color}`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: 'white'
                      }}>
                        {tech.name}
                      </div>
                    )}
                    <span style={{
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{
                color: '#a78bfa',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Frameworks & Libraries
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1.5rem',
                justifyItems: 'center'
              }}>
                {[
                  { name: 'Spring Boot', icon: springLogo, color: '#6db33f' },
                  { name: 'Core Spring', icon: springLogo, color: '#6db33f' },
                  { name: 'React.js', icon: reactLogo, color: '#61dafb' },
                  { name: 'JPA', color: '#f89820' },
                  { name: 'Jetpack Compose', color: '#4285f4' },
                  { name: 'Microservices', color: '#ff6b6b' }
                ].map((tech, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1.2rem',
                    background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}25)`,
                    borderRadius: '16px',
                    border: `1px solid ${tech.color}40`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 8px 32px ${tech.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    {tech.icon ? (
                      <Image 
                        src={tech.icon} 
                        alt={tech.name}
                        width={40}
                        height={40}
                        style={{
                          objectFit: 'contain'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: `${tech.color}`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: 'white',
                        textAlign: 'center'
                      }}>
                        {tech.name.length > 6 ? tech.name.charAt(0) + tech.name.charAt(tech.name.indexOf(' ') + 1) : tech.name}
                      </div>
                    )}
                    <span style={{
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Technologies */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{
                color: '#a78bfa',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Web Technologies
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1.5rem',
                justifyItems: 'center'
              }}>
                {[
                  { name: 'REST API', color: '#00d2d3' },
                  { name: 'WebSocket', color: '#4caf50' },
                  { name: 'JWT', color: '#000000' },
                  { name: 'Kafka', color: '#231f20' },
                  { name: 'Redis', color: '#dc382d' }
                ].map((tech, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1.2rem',
                    background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}25)`,
                    borderRadius: '16px',
                    border: `1px solid ${tech.color}40`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 8px 32px ${tech.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: `${tech.color}`,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: 'white',
                      textAlign: 'center'
                    }}>
                      {tech.name.length > 6 ? tech.name.substring(0, 3) : tech.name}
                    </div>
                    <span style={{
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                color: '#a78bfa',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Tools & Others
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1.5rem',
                justifyItems: 'center'
              }}>
                {[
                  { name: 'Git', color: '#f05032' },
                  { name: 'GitHub', color: '#181717' },
                  { name: 'Postman', color: '#ff6c37' },
                  { name: 'Docker', color: '#2496ed' },
                  { name: 'Kubernetes', color: '#326ce5' },
                  { name: 'VS Code', color: '#007acc' },
                  { name: 'Figma', color: '#f24e1e' },
                  { name: 'DSA', color: '#9c27b0' },
                  { name: 'API Integration', color: '#4caf50' },
                  { name: 'UI/UX Design', color: '#e91e63' }
                ].map((tech, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1.2rem',
                    background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}25)`,
                    borderRadius: '16px',
                    border: `1px solid ${tech.color}40`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 8px 32px ${tech.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: `${tech.color}`,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: 'white',
                      textAlign: 'center'
                    }}>
                      {tech.name.length > 8 ? tech.name.substring(0, 3) : tech.name.charAt(0)}
                    </div>
                    <span style={{
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .skills-section {
            padding: 4rem 1rem 6rem 1rem !important;
          }
          
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .solar-system-container {
            height: 400px !important;
            margin: 1rem 0 !important;
          }
        }

        @media (max-width: 480px) {
          .skills-section {
            padding: 3rem 0.5rem 4rem 0.5rem !important;
          }
          
          .solar-system-container {
            height: 300px !important;
          }
        }
      `}</style>

    </section>
  );
}