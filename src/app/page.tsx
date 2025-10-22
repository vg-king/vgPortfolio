import Nav from './components/nav';
import Hero from './components/hero';
import Skills from './components/skills';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/footer';
import ThreeBackground from './components/ThreeBackground';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0118 0%, #1a0b2e 50%, #2d1b4e 100%)',
      color: 'white',
      position: 'relative'
    }}>
      <ThreeBackground intensity={1} particleCount={1200} />
      <Nav />
      <Hero />
      <Skills />
      <ProjectGallery />
      <Footer />
    </div>
  );
}