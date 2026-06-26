import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './VideoScroll.css';

const FRAME_COUNT = 85;

export default function VideoScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

  // Track scroll progress of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0-1) to frame index (1-85)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Premium text parallax effects
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/frames/frame_${i.toString().padStart(4, '0')}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const render = (index) => {
      const imgIndex = Math.floor(index) - 1;
      const img = images[imgIndex];
      
      if (img && img.complete) {
        // Draw image covering the canvas (object-fit: cover equivalent)
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        } else {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        // Scale up by 8% to crop out the Gemini watermark on the edges
        const scaleFactor = 1.08;
        const finalWidth = drawWidth * scaleFactor;
        const finalHeight = drawHeight * scaleFactor;
        
        // Adjust offsets to keep it centered
        const finalOffsetX = offsetX - (finalWidth - drawWidth) / 2;
        const finalOffsetY = offsetY - (finalHeight - drawHeight) / 2;

        ctx.drawImage(img, finalOffsetX, finalOffsetY, finalWidth, finalHeight);
      }
    };

    // Handle resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(frameIndex.get());
    };
    
    window.addEventListener('resize', resize);
    resize(); // initial setup

    // Listen for scroll changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => render(latest));
    });

    return () => {
      unsubscribe();
      window.removeEventListener('resize', resize);
    };
  }, [images, frameIndex]);

  return (
    <div id="videoscroll" ref={containerRef} className="video-scroll-container">
      <div className="video-scroll-sticky">
        <motion.canvas 
          ref={canvasRef} 
          className="video-scroll-canvas" 
          style={{ scale }}
        />
        <div className="video-scroll-overlay">
          <motion.h2 
            className="video-scroll-text"
            style={{ opacity: textOpacity, y: textY }}
          >
            Immersive Experience
          </motion.h2>
          <motion.p
            className="video-scroll-subtext"
            style={{ opacity: textOpacity, y: textY }}
          >
            Scroll to explore the digital fabric of our solutions.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
