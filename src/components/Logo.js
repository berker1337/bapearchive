import React, { useEffect } from 'react';
import { gsap } from 'gsap';  
import './Logo.css';  

const Logo = () => {
  useEffect(() => {
    
    gsap.fromTo(
      '.logo-text', 
      { x: -200, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 2, ease: 'power2.out' } 
    );
  }, []);  
  return (
    <div className="logo">
      <h1 className="logo-text">tale of memories</h1>
    </div>
  );
};

export default Logo;
