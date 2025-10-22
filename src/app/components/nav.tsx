"use client"
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import GSAPAnimations from '../utils/gsapAnimations';

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

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
        
        {/* Navigation Links */}
        <ul ref={linksRef} style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '3rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
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
      </div>
    </nav>
  );
}