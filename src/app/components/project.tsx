"use client"

export default function Projects() {
  const projects = [
    {
      title: "KIIT Finder",
      subtitle: "Lost & Found Portal",
      description: "A full-stack campus portal with JWT-secured login, image upload for item tracking, and user/admin roles. Implemented REST APIs, DTO-layered architecture, and integrated frontend search/filter features for faster item retrieval.",
      tech: "Spring Boot + React + JWT + PostgreSQL",
      image: "🔍",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      links: {
        frontend: "https://github.com/vishnu/kiit-finder-frontend",
        backend: "https://github.com/vishnu/kiit-finder-backend"
      },
      align: "right"
    },
    {
      title: "Health AI",
      subtitle: "Smart Healthcare Assistant",
      description: "Comprehensive healthcare app with AI-powered chat, multilingual support, file/voice upload, and vaccination tracking. Integrated ML backend with FastAPI, LangChain, Llama 3.2, and ChromaDB for real-time diagnosis assistance.",
      tech: "Spring Boot + React + FastAPI + LangChain + Llama 3.2",
      image: "🏥",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      links: {
        frontend: "https://github.com/vishnu/health-ai-frontend",
        backend: "https://github.com/vishnu/health-ai-backend"
      },
      align: "left"
    },
    {
      title: "Project Management System",
      subtitle: "Jira-like Collaboration Tool",
      description: "Jira-like app with JWT-secured login, project boards, role-based access, live chat, issue tracking, and team collaboration tools. Features real-time updates, drag-and-drop functionality, and comprehensive project analytics.",
      tech: "Spring Boot + React + WebSocket + Redis + Docker",
      image: "📊",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      links: {
        frontend: "https://github.com/vishnu/project-mgmt-frontend",
        backend: "https://github.com/vishnu/project-mgmt-backend"
      },
      align: "right"
    }
  ];

  return (
    <section id="projects" style={{
      padding: '8rem 2rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: 'white',
          marginBottom: '6rem',
          textAlign: 'center',
          textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
        }}>
          Example Project
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4rem',
              marginBottom: '8rem',
              flexDirection: project.align === 'left' ? 'row-reverse' : 'row',
              flexWrap: 'wrap'
            }}
          >
            {/* Project Image/Mockup */}
            <div style={{
              flex: '1',
              minWidth: '400px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.1))',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                borderRadius: '20px',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '350px',
                boxShadow: '0 20px 60px rgba(147, 51, 234, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(147, 51, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(147, 51, 234, 0.2)';
              }}
              >
                {/* Background Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: project.gradient,
                  opacity: 0.1,
                  borderRadius: '20px'
                }}></div>
                
                {/* Project Icon */}
                <div style={{
                  fontSize: '8rem',
                  marginBottom: '1rem',
                  filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {project.image}
                </div>
                
                {/* Mock Browser Window */}
                <div style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: '180px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}>
                  {/* Browser Header */}
                  <div style={{
                    height: '30px',
                    background: '#f5f5f5',
                    borderRadius: '8px 8px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                    borderBottom: '1px solid #ddd'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '6px'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#ff5f57'
                      }}></div>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#ffbd2e'
                      }}></div>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#28ca42'
                      }}></div>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div style={{
                    padding: '15px',
                    height: 'calc(100% - 30px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <div style={{
                      height: '8px',
                      background: project.gradient,
                      borderRadius: '4px',
                      width: '80%'
                    }}></div>
                    <div style={{
                      height: '6px',
                      background: '#e5e7eb',
                      borderRadius: '3px',
                      width: '60%'
                    }}></div>
                    <div style={{
                      height: '6px',
                      background: '#e5e7eb',
                      borderRadius: '3px',
                      width: '90%'
                    }}></div>
                    <div style={{
                      height: '6px',
                      background: '#e5e7eb',
                      borderRadius: '3px',
                      width: '70%'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div style={{
              flex: '1',
              minWidth: '400px'
            }}>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '0.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                color: '#a78bfa',
                fontSize: '1.3rem',
                marginBottom: '1.5rem',
                fontWeight: '500'
              }}>
                {project.subtitle}
              </p>
              
              <div style={{
                marginBottom: '1.5rem'
              }}>
                <span style={{ 
                  color: '#9ca3af',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>Tech Stack: </span>
                <span style={{ 
                  color: '#a78bfa',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>{project.tech}</span>
              </div>
              
              <p style={{
                color: '#d1d5db',
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                {project.description}
              </p>

              {/* Project Links */}
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <a
                  href={project.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2))',
                    border: '1px solid rgba(147, 51, 234, 0.5)',
                    color: '#a78bfa',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.3))';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(147, 51, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2))';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  🌐 Frontend
                </a>
                <a
                  href={project.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2))',
                    border: '1px solid rgba(147, 51, 234, 0.5)',
                    color: '#a78bfa',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.3))';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(147, 51, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2))';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  ⚙️ Backend
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}