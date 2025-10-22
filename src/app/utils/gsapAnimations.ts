"use client";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export class GSAPAnimations {
  
  // Initialize scroll animations
  static initScrollAnimations() {
    if (typeof window === 'undefined') return;
    
    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }

  // Fade in animation
  static fadeIn(element: string | Element, options: gsap.TweenVars = {}) {
    return gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        ...options
      }
    );
  }

  // Slide in from left
  static slideInLeft(element: string | Element, options: gsap.TweenVars = {}) {
    return gsap.fromTo(element,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        ...options
      }
    );
  }

  // Slide in from right
  static slideInRight(element: string | Element, options: gsap.TweenVars = {}) {
    return gsap.fromTo(element,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        ...options
      }
    );
  }

  // Scale animation
  static scaleIn(element: string | Element, options: gsap.TweenVars = {}) {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        ...options
      }
    );
  }

  // Stagger animation for multiple elements
  static staggerIn(elements: string | Element[], options: gsap.TweenVars = {}) {
    return gsap.fromTo(elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: elements,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        ...options
      }
    );
  }

  // Typing text animation
  static typeText(element: string | Element, text: string, options: gsap.TweenVars = {}) {
    return gsap.to(element, {
      duration: 2,
      text: text,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      ...options
    });
  }

  // Parallax effect
  static parallax(element: string | Element, yPercent: number = -50) {
    return gsap.fromTo(element,
      { yPercent: 0 },
      {
        yPercent: yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      }
    );
  }

  // Rotate animation
  static rotate(element: string | Element, options: gsap.TweenVars = {}) {
    return gsap.fromTo(element,
      { rotation: -10, opacity: 0 },
      {
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        ...options
      }
    );
  }

  // Floating animation
  static float(element: string | Element) {
    return gsap.to(element, {
      y: -15,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  }

  // Hero title animation
  static heroTitle(element: string | Element, options: gsap.TweenVars = {}) {
    return gsap.fromTo(element,
      { 
        opacity: 0, 
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
        ...options
      }
    );
  }

  // Card hover animation
  static cardHover(element: string | Element) {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(element, {
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });

    return {
      play: () => tl.play(),
      reverse: () => tl.reverse()
    };
  }

  // Navigation animation
  static navSlideIn(elements: string | Element[]) {
    return gsap.fromTo(elements,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.5
      }
    );
  }

  // Project gallery 3D effect
  static projectGallery3D(element: string | Element) {
    return gsap.fromTo(element,
      { 
        opacity: 0,
        rotationY: 45,
        z: -200
      },
      {
        opacity: 1,
        rotationY: 0,
        z: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }

  // Clean up all ScrollTriggers
  static cleanup() {
    if (typeof window !== 'undefined') {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }
}

export default GSAPAnimations;