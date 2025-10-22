"use client"

import { useEffect, useRef } from 'react';
import GSAPAnimations from '../utils/gsapAnimations';
import ContactForm from './ContactForm';
import './footer.css';

export default function Footer() {
  const contactTitleRef = useRef<HTMLHeadingElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    { 
      icon: "📧", 
      label: "Email", 
      value: "vg3772285@gmail.com",
      link: "mailto:vg3772285@gmail.com"
    },
    { 
      icon: "📱", 
      label: "Phone", 
      value: "+91-9644423363",
      link: "tel:+919644423363"
    },
    { 
      icon: "📍", 
      label: "Location", 
      value: "Bhubaneswar, Odisha",
      link: null
    }
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: "💻", 
      url: "https://github.com/vg-king",
      color: "#333"
    },
    { 
      name: "LinkedIn", 
      icon: "💼", 
      url: "https://www.linkedin.com/in/vishnu-gupta-293864248/",
      color: "#0077b5"
    },
    { 
      name: "LeetCode", 
      icon: "🔥", 
      url: "https://leetcode.com/u/Vishnu7823123/",
      color: "#ffa116"
    },
    { 
      name: "Resume", 
      icon: "📄", 
      url: "https://drive.google.com/file/d/1FhOajzjOs7YttOvkXG97mql9taoQoOb-/view?usp=sharing",
      color: "#8b5cf6"
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate contact title
      if (contactTitleRef.current) {
        GSAPAnimations.fadeIn(contactTitleRef.current, { delay: 0.2 });
      }
      
      // Animate contact form
      if (contactFormRef.current) {
        GSAPAnimations.scaleIn(contactFormRef.current, { delay: 0.5 });
      }
      
      // Animate social links
      if (socialLinksRef.current) {
        const links = socialLinksRef.current.querySelectorAll('a');
        GSAPAnimations.staggerIn(Array.from(links), { delay: 0.8 });
      }
    }
  }, []);

  return (
    <footer id="contact" className="footer-section" style={{
      padding: '6rem 2rem 4rem',
      borderTop: '1px solid rgba(147, 51, 234, 0.3)',
      marginTop: '6rem',
      position: 'relative'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 ref={contactTitleRef} style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
          }}>
            Contact
          </h2>

          <p style={{
            color: '#d1d5db',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            I&apos;m currently looking to join a cross-functional team that values improving 
            people&apos;s lives through accessible design and scalable technology. 
            <br />
            <span style={{ color: '#a78bfa', fontWeight: '600' }}>
              Feel free to reach out!
            </span>
          </p>

          {/* Contact Information */}
          <div className="contact-info-grid" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
            {contactInfo.map((contact, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1rem 1.5rem',
                background: 'rgba(147, 51, 234, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (contact.link) {
                  e.currentTarget.style.background = 'rgba(147, 51, 234, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.cursor = 'pointer';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(147, 51, 234, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => contact.link && window.open(contact.link)}
              >
                <span style={{ fontSize: '1.5rem' }}>{contact.icon}</span>
                <div>
                  <p style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.85rem', 
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    {contact.label}
                  </p>
                  <p style={{ 
                    color: 'white', 
                    fontSize: '1rem', 
                    margin: 0,
                    fontWeight: '600'
                  }}>
                    {contact.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div ref={contactFormRef} style={{ marginBottom: '4rem' }}>
            <ContactForm />
          </div>

          {/* Social Links */}
          <div ref={socialLinksRef} className="social-links-grid" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            flexWrap: 'wrap'
          }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1rem 1.5rem',
                  background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2))',
                  border: '1px solid rgba(147, 51, 234, 0.4)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                title={link.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.boxShadow = `0 15px 40px rgba(147, 51, 234, 0.4)`;
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.3))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2))';
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(147, 51, 234, 0.2)',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: 'white',
              textShadow: '0 0 20px rgba(147, 51, 234, 0.8)'
            }}>
              V
            </div>
            <div style={{
              height: '2px',
              width: '60px',
              background: 'linear-gradient(90deg, #a78bfa, #9333ea)',
              borderRadius: '2px'
            }}></div>
          </div>
          
          <p style={{
            color: '#6b7280',
            fontSize: '0.9rem',
            marginBottom: '0.5rem'
          }}>
            © 2025 Vishnu Gupta. All rights reserved.
          </p>
          <p style={{
            color: '#6b7280',
            fontSize: '0.85rem'
          }}>
            Built with ❤️ using Next.js, React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}