"use client"
import { useState, useEffect, useRef } from 'react';
import GSAPAnimations from '../utils/gsapAnimations';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % 3);
    }, 3000);

    // GSAP Animations
    if (typeof window !== 'undefined') {
      // Hero title animation
      if (titleRef.current) {
        GSAPAnimations.heroTitle(titleRef.current, { delay: 0.5 });
      }
      
      // Subtitle fade in
      if (subtitleRef.current) {
        GSAPAnimations.fadeIn(subtitleRef.current, { delay: 1 });
      }
      
      // Buttons slide in
      if (buttonsRef.current) {
        GSAPAnimations.slideInLeft(buttonsRef.current, { delay: 1.5 });
      }
    }

    return () => clearInterval(interval);
  }, []);

  const roles = ['Software Engineer', 'Java Developer', 'React Developer'];
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      paddingTop: '8rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              background: `rgba(147, 51, 234, ${Math.random() * 0.5 + 0.2})`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      <div style={{
        maxWidth: '1280px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '4rem',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Left Side - Enhanced Character */}
        <div 
          style={{
            position: 'relative',
            flex: '0 0 auto',
            minWidth: '380px',
            transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Multiple Glow Layers */}
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(147, 51, 234, 0.3) 30%, transparent 70%)',
            filter: 'blur(100px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 60%)',
            filter: 'blur(60px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            animation: 'pulse 3s ease-in-out infinite reverse'
          }}></div>
          
          {/* Character Container with Modern Design */}
          <div 
            style={{
              position: 'relative',
              zIndex: 2,
              width: '380px',
              height: '380px',
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(79, 70, 229, 0.15), rgba(168, 85, 247, 0.1))',
              borderRadius: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              boxShadow: `
                0 32px 90px rgba(147, 51, 234, 0.35),
                0 8px 32px rgba(147, 51, 234, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.08)
              `,
              backdropFilter: 'blur(24px)',
              animation: 'float 8s ease-in-out infinite',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = `
                0 40px 100px rgba(147, 51, 234, 0.5),
                0 12px 40px rgba(147, 51, 234, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.12)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = `
                0 32px 90px rgba(147, 51, 234, 0.35),
                0 8px 32px rgba(147, 51, 234, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.08)
              `;
            }}
          >
            {/* Laptop with Person */}
            <div style={{
              fontSize: '200px',
              filter: 'drop-shadow(0 0 40px rgba(147, 51, 234, 0.9))',
              animation: 'bounce 3s ease-in-out infinite',
              transition: 'all 0.3s ease'
            }}>
              👨‍💻
            </div>
            
            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '2rem',
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '0.5s'
            }}>
              ⚡
            </div>
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '20px',
              fontSize: '1.5rem',
              animation: 'float 4s ease-in-out infinite',
              animationDelay: '1s'
            }}>
              💻
            </div>
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '30px',
              fontSize: '1.2rem',
              animation: 'float 3.5s ease-in-out infinite',
              animationDelay: '1.5s'
            }}>
              🚀
            </div>
          </div>
        </div>

        {/* Right Side - Enhanced Content */}
        <div style={{ 
          flex: 1,
          minWidth: '450px',
          transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        }}>
          {/* Animated Greeting */}
          <div style={{
            fontSize: '1.4rem',
            marginBottom: '2.5rem',
            color: '#e5e7eb',
            animation: 'fadeInUp 1.2s ease-out 0.4s both'
          }}>
            <span style={{ 
              display: 'inline-block',
              animation: 'wave 2s ease-in-out infinite'
            }}>👋</span> Hello! I Am{' '}
            <span style={{ 
              color: '#a78bfa', 
              fontWeight: '700',
              textShadow: '0 0 20px rgba(167, 139, 250, 0.6)',
              background: 'linear-gradient(45deg, #a78bfa, #c084fc)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.4rem'
            }}>Vishnu Gupta</span>
            
            {/* Animated Purple Line */}
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #a78bfa, #9333ea, #7c3aed)',
              marginTop: '1rem',
              borderRadius: '2px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                animation: 'shimmer 2s ease-in-out infinite'
              }}></div>
            </div>
          </div>

          {/* Main Headline with Better Typography */}
          <div ref={titleRef}>
            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '800',
              lineHeight: '1.02',
              marginBottom: '2.2rem',
              color: 'white',
              textShadow: '0 6px 12px rgba(0,0,0,0.5)',
              letterSpacing: '-0.02em'
            }}>
            <span style={{
              background: 'linear-gradient(135deg, #ffffff, #e5e7eb)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              A Designer who<br />
              Judges a book<br />
              by its{' '}
            </span>
            <span style={{
              position: 'relative',
              display: 'inline-block',
              background: 'linear-gradient(135deg, #a78bfa, #c084fc, #e879f9)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'glow 2s ease-in-out infinite alternate'
            }}>
              cover
              {/* Enhanced Wavy Underline */}
              <svg
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '0',
                  width: '100%',
                  height: '12px'
                }}
                viewBox="0 0 200 12"
              >
                <path
                  d="M0,6 Q50,2 100,6 T200,6"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    animation: 'draw 3s ease-in-out infinite'
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#e879f9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #ffffff, #e5e7eb)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              ...
            </span>
          </h1>
          </div>

          <p ref={subtitleRef} style={{
            fontSize: '1.15rem',
            color: '#a1a1aa',
            marginBottom: '4rem',
            fontStyle: 'italic',
            opacity: 0.95,
            animation: 'fadeInUp 1.2s ease-out 0.8s both',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Because if the cover does not impress you what else can?
          </p>

          {/* Enhanced Software Engineer Section */}
          <div style={{ animation: 'fadeInUp 1.2s ease-out 1s both' }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: '600',
              marginBottom: '1.4rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              letterSpacing: '-0.01em'
            }}>
              I'm a{' '}
              <span style={{
                color: '#a78bfa',
                minWidth: '280px',
                animation: 'colorChange 3s ease-in-out infinite'
              }}>
                {roles[textIndex]}
              </span>
              <span style={{
                color: '#a78bfa',
                animation: 'blink 1s step-end infinite'
              }}>|</span>
            </h2>

            <p style={{
              fontSize: '1.25rem',
              color: '#e5e7eb',
              marginBottom: '2.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              flexWrap: 'wrap'
            }}>
              Currently, I'm a B.Tech Student at{' '}
              <span style={{ 
                color: '#60a5fa',
                fontWeight: '700',
                padding: '0.2rem 0.8rem',
                background: 'rgba(96, 165, 250, 0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'glow 3s ease-in-out infinite alternate'
              }}>
                🎓 KIIT Bhubaneswar
              </span>
            </p>

            <p style={{
              fontSize: '1.1rem',
              color: '#a1a1aa',
              lineHeight: '2',
              maxWidth: '720px',
              fontWeight: '400'
            }}>
              A self-taught Java Full Stack Developer with hands-on experience in building 
              secure, scalable applications using Spring Boot and React. I make meaningful 
              and delightful digital products that create an equilibrium between user needs 
              and business goals.
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} style={{
              display: 'flex',
              gap: '1.8rem',
              marginTop: '3rem',
              flexWrap: 'wrap'
            }}>
              <button
                style={{
                  padding: '1.2rem 2.5rem',
                  background: 'linear-gradient(135deg, #9333ea, #7c3aed, #8b5cf6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '14px',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 12px 35px rgba(147, 51, 234, 0.45)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  letterSpacing: '0.01em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(147, 51, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(147, 51, 234, 0.4)';
                }}
              >
                📧 Get In Touch
              </button>
              
              <button
                style={{
                  padding: '1.2rem 2.5rem',
                  background: 'rgba(167, 139, 250, 0.08)',
                  color: '#a78bfa',
                  border: '2px solid rgba(167, 139, 250, 0.6)',
                  borderRadius: '14px',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backdropFilter: 'blur(10px)',
                  letterSpacing: '0.01em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(167, 139, 250, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(167, 139, 250, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(167, 139, 250, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.6)';
                }}
              >
                📄 View Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-15px) rotate(2deg); 
          }
          66% { 
            transform: translateY(-10px) rotate(-1deg); 
          }
        }

        @keyframes bounce {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
          }
          25% { 
            transform: scale(1.02) rotate(1deg); 
          }
          50% { 
            transform: scale(1.05) rotate(0deg); 
          }
          75% { 
            transform: scale(1.02) rotate(-1deg); 
          }
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes glow {
          0% { text-shadow: 0 0 20px rgba(167, 139, 250, 0.5); }
          100% { text-shadow: 0 0 30px rgba(167, 139, 250, 0.8), 0 0 40px rgba(167, 139, 250, 0.6); }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes colorChange {
          0%, 33% { color: #a78bfa; }
          34%, 66% { color: #60a5fa; }
          67%, 100% { color: #34d399; }
        }

        @keyframes draw {
          0% { stroke-dasharray: 0 200; }
          50% { stroke-dasharray: 200 200; }
          100% { stroke-dasharray: 200 0; }
        }
      `}</style>
    </section>
  );
}