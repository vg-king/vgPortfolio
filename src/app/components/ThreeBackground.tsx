"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  intensity?: number;
  particleCount?: number;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ 
  intensity = 1, 
  particleCount = 1000 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  
  // Mobile detection
  const isMobile = () => {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Mobile detection for performance optimization
    const mobile = isMobile();

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;

    // Renderer setup with mobile optimization
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !mobile, // Disable antialiasing on mobile for performance
      powerPreference: mobile ? 'low-power' : 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Set pixel ratio for mobile performance
    renderer.setPixelRatio(mobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Adjust performance for mobile
    const adjustedParticleCount = mobile ? Math.min(particleCount * 0.3, 300) : particleCount;
    const adjustedIntensity = mobile ? intensity * 0.5 : intensity;

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(adjustedParticleCount * 3);
    const colors = new Float32Array(adjustedParticleCount * 3);

    for (let i = 0; i < adjustedParticleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Purple color variations
      const colorVariation = Math.random() * 0.5 + 0.5;
      colors[i * 3] = 0.6 * colorVariation; // R
      colors[i * 3 + 1] = 0.3 * colorVariation; // G  
      colors[i * 3 + 2] = 0.9 * colorVariation; // B
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create particle system
    const particles = new THREE.Points(geometry, material);
    particlesRef.current = particles;
    scene.add(particles);

    // Add floating geometric shapes (reduce count on mobile)
    const shapes: THREE.Mesh[] = [];
    const shapeCount = mobile ? 8 : 20;
    const shapeGeometries = [
      new THREE.BoxGeometry(0.1, 0.1, 0.1),
      new THREE.SphereGeometry(0.05, mobile ? 4 : 8, mobile ? 3 : 6), // Lower geometry detail on mobile
      new THREE.ConeGeometry(0.05, 0.15, mobile ? 4 : 6),
    ];

    for (let i = 0; i < shapeCount; i++) {
      const geometry = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0.6, 0.3, 0.9),
        transparent: true,
        opacity: 0.1,
        wireframe: true,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      shapes.push(mesh);
      scene.add(mesh);
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate particles (use adjusted intensity)
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0005 * adjustedIntensity;
        particlesRef.current.rotation.y += 0.001 * adjustedIntensity;
      }

      // Animate shapes (reduce animation complexity on mobile)
      shapes.forEach((shape, index) => {
        const animationSpeed = mobile ? 0.5 : 1;
        shape.rotation.x += 0.002 * animationSpeed * (index % 2 === 0 ? 1 : -1);
        shape.rotation.y += 0.003 * animationSpeed * (index % 3 === 0 ? 1 : -1);
        shape.rotation.z += 0.001 * animationSpeed * (index % 4 === 0 ? 1 : -1);
      });

      // Mouse interaction (disable on mobile for performance)
      if (!mobile) {
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (event: MouseEvent) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          
          if (particlesRef.current) {
            particlesRef.current.rotation.x = mouse.y * 0.1;
            particlesRef.current.rotation.y = mouse.x * 0.1;
          }
        };

        window.addEventListener('mousemove', handleMouseMove);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [intensity, particleCount]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ThreeBackground;