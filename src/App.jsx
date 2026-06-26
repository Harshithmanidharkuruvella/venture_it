import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoScroll from './components/VideoScroll';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Leadership from './components/Leadership';
import Industries from './components/Industries';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lenis from 'lenis';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoScroll />
        <About />
        <Services />
        <TechStack />
        <Leadership />
        <Industries />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
