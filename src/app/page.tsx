"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import ErrorBoundary from './components/ErrorBoundary';
import { usePerformanceMonitoring } from './utils/performance';

// Lazy load components that are below the fold
const Skills = dynamic(() => import('./components/skills'), {
  loading: () => <div style={{ height: '100vh', background: 'transparent' }}>Loading...</div>
});

const ProjectGallery = dynamic(() => import('./components/ProjectGallery'), {
  loading: () => <div style={{ height: '100vh', background: 'transparent' }}>Loading...</div>
});

const Footer = dynamic(() => import('./components/footer'), {
  loading: () => <div style={{ height: '50vh', background: 'transparent' }}>Loading...</div>
});

const ThreeBackground = dynamic(() => import('./components/ThreeBackground'), {
  loading: () => null,
  ssr: false // Three.js should only run on client side
});

export default function App() {
  // Initialize performance monitoring in production
  const performanceCleanup = usePerformanceMonitoring();
  
  useEffect(() => {
    return performanceCleanup;
  }, [performanceCleanup]);

  return (
        <ErrorBoundary>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0118 0%, #1a0b2e 50%, #2d1b4e 100%)',
        color: 'white',
        position: 'relative'
      }}>
        <ErrorBoundary fallback={null}>
          <ThreeBackground intensity={1} particleCount={800} />
        </ErrorBoundary>
        <Nav />
        <Hero />
        <ErrorBoundary>
          <Skills />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProjectGallery />
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}