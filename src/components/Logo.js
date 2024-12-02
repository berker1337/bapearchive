import React, { useEffect } from 'react';
import { gsap } from 'gsap';  // Import GSAP
import './Logo.css';  // Pokud používáš externí CSS pro logo

const Logo = () => {
  useEffect(() => {
    // Animace pohybu textu loga zleva doprava
    gsap.fromTo(
      '.logo-text', 
      { x: -200, opacity: 0 }, // Počáteční hodnoty (text začíná mimo obrazovku a je neviditelný)
      { x: 0, opacity: 1, duration: 2, ease: 'power2.out' } // Konečné hodnoty (text se pohybuje na místo a stává se viditelný)
    );
  }, []);  // Pustí se pouze při prvním renderování komponenty

  return (
    <div className="logo">
      <h1 className="logo-text">Bapearchive</h1>
    </div>
  );
};

export default Logo;
