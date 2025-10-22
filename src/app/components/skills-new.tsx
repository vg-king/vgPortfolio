"use client"

export default function Skills() {
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
    { name: "Java", icon: "☕", color: "#f59e0b", orbit: 180, speed: 20 },
    { name: "JavaScript", icon: "🟨", color: "#eab308", orbit: 220, speed: 25 },
    { name: "Kotlin", icon: "🟣", color: "#7f52ff", orbit: 260, speed: 30 },
    { name: "React", icon: "⚛️", color: "#3b82f6", orbit: 300, speed: 35 },
    { name: "Spring Boot", icon: "🍃", color: "#10b981", orbit: 340, speed: 40 },
    { name: "TypeScript", icon: "🔷", color: "#3178c6", orbit: 380, speed: 45 },
    { name: "HTML", icon: "🌐", color: "#e34c26", orbit: 420, speed: 50 },
    { name: "CSS", icon: "🎨", color: "#1572b6", orbit: 460, speed: 55 },
    { name: "SQL", icon: "🗄️", color: "#336791", orbit: 500, speed: 60 },
    { name: "JPA", icon: "📊", color: "#59666c", orbit: 540, speed: 65 }
  ];

  return (
    <section id="about" style={{
      padding: '8rem 2rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Work Experience */}
        <div style={{ marginBottom: '8rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '4rem',
            textAlign: 'center',
            textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
          }}>
            Work Experience
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
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

        {/* Looking for Team with Solar System Tech Stack */}
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
            I&apos;m currently looking to join a <span style={{ 
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
            that values improving people&apos;s lives through accessible design and scalable technology
          </p>

          {/* Top Row Tech Stack with Connecting Lines */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            marginBottom: '6rem',
            position: 'relative'
          }}>
            {techStack.slice(0, 6).map((tech, index) => (
              <div key={index} style={{ position: 'relative' }}>
                {/* Connecting Lines */}
                {index < 5 && (
                  <svg
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '100%',
                      width: '3rem',
                      height: '2px',
                      zIndex: 0
                    }}
                    viewBox="0 0 48 2"
                  >
                    <line
                      x1="0"
                      y1="1"
                      x2="48"
                      y2="1"
                      stroke="rgba(147, 51, 234, 0.4)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      style={{
                        animation: `dash 2s linear infinite`,
                        animationDelay: `${index * 0.3}s`
                      }}
                    />
                  </svg>
                )}
                
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: `2px solid ${tech.color}60`,
                    boxShadow: `0 8px 32px ${tech.color}30`,
                    position: 'relative',
                    zIndex: 1,
                    animation: `float 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`
                  }}
                  title={tech.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2) translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 12px 48px ${tech.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = `0 8px 32px ${tech.color}30`;
                  }}
                >
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solar System Logo with Orbiting Tech Stack */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '8rem',
          position: 'relative',
          height: '1200px',
          width: '100%'
        }}>
          {/* Orbital Rings */}
          {[180, 220, 260, 300, 340, 380, 420, 460, 500, 540].map((radius, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: `${radius}px`,
                height: `${radius}px`,
                border: '1px solid rgba(147, 51, 234, 0.1)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                animation: `rotate ${60 + index * 5}s linear infinite reverse`
              }}
            />
          ))}

          {/* Multiple Glow Layers for Center */}
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.2) 30%, transparent 70%)',
            filter: 'blur(120px)',
            zIndex: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.6) 0%, transparent 60%)',
            filter: 'blur(80px)',
            zIndex: 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}></div>
          
          {/* Central Logo */}
          <div style={{
            position: 'absolute',
            zIndex: 10,
            fontSize: '10rem',
            fontWeight: '800',
            fontStyle: 'italic',
            color: 'white',
            textShadow: '0 0 80px rgba(147, 51, 234, 1), 0 0 120px rgba(167, 139, 250, 0.8)',
            animation: 'pulse 4s ease-in-out infinite',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            userSelect: 'none'
          }}>
            V
          </div>

          {/* Orbiting Tech Icons */}
          {solarSystemTech.map((tech, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${tech.orbit}px`,
                height: `${tech.orbit}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: 5,
                animation: `rotate ${tech.speed}s linear infinite`
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70px',
                  height: '70px',
                  background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}50)`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.2rem',
                  border: `2px solid ${tech.color}70`,
                  boxShadow: `
                    0 8px 32px ${tech.color}40,
                    0 0 60px ${tech.color}20,
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  animation: `counterRotate ${tech.speed}s linear infinite reverse, float 4s ease-in-out infinite`,
                  animationDelay: `0s, ${index * 0.5}s`
                }}
                title={tech.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1.3)';
                  e.currentTarget.style.boxShadow = `
                    0 12px 48px ${tech.color}60,
                    0 0 80px ${tech.color}40,
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px ${tech.color}40,
                    0 0 60px ${tech.color}20,
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `;
                }}
              >
                {tech.icon}
                
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
                }}>
                  {tech.name}
                </div>
              </div>
            </div>
          ))}

          {/* Connecting Particle Lines */}
          {solarSystemTech.map((_, index) => (
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
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0)" />
                  <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </linearGradient>
              </defs>
              <circle
                cx="50%"
                cy="50%"
                r={solarSystemTech[index]?.orbit / 2}
                fill="none"
                stroke={`url(#gradient-${index})`}
                strokeWidth="1"
                strokeDasharray="5 10"
                style={{
                  animation: `dash 3s linear infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-8px) rotate(2deg); 
          }
          66% { 
            transform: translateY(-4px) rotate(-1deg); 
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes counterRotate {
          from {
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) rotate(-360deg);
          }
        }

        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 30;
          }
        }
      `}</style>
    </section>
  );
}