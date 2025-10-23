"use client"
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import GSAPAnimations from '../utils/gsapAnimations';

export default function Nav() {
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate logo
      if (logoRef.current) {
        GSAPAnimations.slideInLeft(logoRef.current, { delay: 0.2 });
      }
      
      // Animate nav links
      if (linksRef.current) {
        const links = linksRef.current.querySelectorAll('li');
        GSAPAnimations.navSlideIn(Array.from(links));
      }
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{ 
      backgroundColor: 'rgba(26, 11, 46, 0.9)', 
      color: 'white',
      padding: '1.5rem 2rem',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(147, 51, 234, 0.2)'
    }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div ref={logoRef}>
          <Link 
            href="/" 
            style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: 'white',
              textDecoration: 'none',
              textShadow: '0 0 10px rgba(147, 51, 234, 0.8)'
            }}
          >
            V
          </Link>
        </div>
        
        {/* Desktop Navigation Links */}
        <ul ref={linksRef} style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '3rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}
        className="desktop-nav">
          <li>
            <Link 
              href="#home" 
              style={{ 
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontSize: '1rem',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="#about" 
              style={{ 
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontSize: '1rem',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#projects" 
              style={{ 
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontSize: '1rem',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              Lab
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-navigation"
          className="mobile-nav"
          role="navigation"
          aria-hidden={!isMobileMenuOpen}
          style={{
            display: 'block',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(26, 11, 46, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(147, 51, 234, 0.3)',
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isMobileMenuOpen ? 1 : 0,
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 999,
            maxHeight: isMobileMenuOpen ? '300px' : '0',
            overflow: 'hidden'
          }}
        >
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            padding: '2rem 0',
            listStyle: 'none',
            margin: 0
          }}>
            <li>
              <Link 
                href="#home" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                Lab
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Default styles - desktop */
        .mobile-menu-btn {
          display: none;
        }
        
        .mobile-nav {
          display: none;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        /* Ensure mobile nav is hidden on desktop */
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}