import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Logo from './components/Logo';
import MagazineGallery from './components/MagazineGallery';
import PDFViewer from './components/PDFViewer';
import { FaInstagram, FaTimes } from 'react-icons/fa'; 

const magazines = [
  { id: 1, title: 'Autumn / Winter 2013', image: '/assets/magazine1.png', pdf: '/assets/magazine1.pdf' },
  { id: 2, title: 'Summer 2013', image: '/assets/magazine2.png', pdf: '/assets/magazine2.pdf' },
  { id: 3, title: 'Spring 2013', image: '/assets/magazine3.png', pdf: '/assets/magazine3.pdf' },
  { id: 4, title: 'Autumn / Winter 2012', image: '/assets/magazine4.png', pdf: '/assets/magazine4.pdf' },
  { id: 5, title: 'Summer 2012', image: '/assets/magazine5.png', pdf: '/assets/magazine5.pdf' },
  { id: 6, title: 'Spring 2012', image: '/assets/magazine6.png', pdf: '/assets/magazine6.pdf' },
  { id: 7, title: 'Winter 2011', image: '/assets/magazine7.png', pdf: '/assets/magazine7.pdf' },
  { id: 8, title: 'Autumn 2011', image: '/assets/magazine8.png', pdf: '/assets/magazine8.pdf' },
  { id: 9, title: 'Summer 2011', image: '/assets/magazine9.png', pdf: '/assets/magazine9.pdf' },
  { id: 10, title: 'Spring 2011', image: '/assets/magazine10.png', pdf: '/assets/magazine10.pdf' },
  { id: 11, title: 'Winter 2010', image: '/assets/magazine11.png', pdf: '/assets/magazine11.pdf' },
  { id: 12, title: 'Autumn 2010', image: '/assets/magazine12.png', pdf: '/assets/magazine12.pdf' },
  { id: 13, title: 'Summer 2010', image: '/assets/magazine13.png', pdf: '/assets/magazine13.pdf' },
  { id: 14, title: 'Spring 2010', image: '/assets/magazine14.png', pdf: '/assets/magazine14.pdf' },
  { id: 15, title: 'Winter 2009', image: '/assets/magazine15.png', pdf: '/assets/magazine15.pdf' },
  { id: 16, title: 'Autumn 2009', image: '/assets/magazine16.png', pdf: '/assets/magazine16.pdf' },
  { id: 17, title: 'Summer 2009', image: '/assets/magazine17.png', pdf: '/assets/magazine17.pdf' },
  { id: 18, title: 'Spring 2009', image: '/assets/magazine18.png', pdf: '/assets/magazine18.pdf' },
  { id: 19, title: 'Winter 2008', image: '/assets/magazine19.png', pdf: '/assets/magazine19.pdf' },
  { id: 20, title: 'Autumn 2008', image: '/assets/magazine20.png', pdf: '/assets/magazine20.pdf' },
  { id: 21, title: 'Spring 2008', image: '/assets/magazine21.png', pdf: '/assets/magazine21.pdf' },
  { id: 22, title: 'Spring / Summer 2008', image: '/assets/magazine22.png', pdf: '/assets/magazine22.pdf' },
  { id: 23, title: 'Autumn / Winter 2007', image: '/assets/magazine23.png', pdf: '/assets/magazine23.pdf' },
  { id: 24, title: 'Autumn / Winter 2007', image: '/assets/magazine24.png', pdf: '/assets/magazine24.pdf' },
  { id: 25, title: 'Spring / Summer 2007', image: '/assets/magazine25.png', pdf: '/assets/magazine25.pdf' },
  { id: 26, title: 'Spring / Summer 2007', image: '/assets/magazine26.png', pdf: '/assets/magazine26.pdf' },
  { id: 27, title: 'Autumn / Winter 2006', image: '/assets/magazine27.png', pdf: '/assets/magazine27.pdf' },
  { id: 28, title: 'Autumn / Winter 2006', image: '/assets/magazine28.png', pdf: '/assets/magazine28.pdf' },
  { id: 29, title: 'Spring / Summer 2006', image: '/assets/magazine29.png', pdf: '/assets/magazine29.pdf' },
  { id: 30, title: 'Spring / Summer 2006', image: '/assets/magazine30.png', pdf: '/assets/magazine30.pdf' },
  { id: 31, title: 'Autumn / Winter 2005', image: '/assets/magazine31.png', pdf: '/assets/magazine31.pdf' },
  { id: 32, title: 'Autumn / Winter 2005', image: '/assets/magazine32.png', pdf: '/assets/magazine32.pdf' },
  { id: 33, title: 'Spring / Summer 2005', image: '/assets/magazine33.png', pdf: '/assets/magazine33.pdf' },
  { id: 34, title: 'Spring / Summer 2005', image: '/assets/magazine34.png', pdf: '/assets/magazine34.pdf' },
];

const App = () => {
  const [selectedMagazine, setSelectedMagazine] = useState(null);
  const [showFollowContainer, setShowFollowContainer] = useState(true); // Stav pro zobrazení/zavření follow containeru

  useEffect(() => {
    gsap.fromTo(
      '.follow-container', 
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 2, delay: 1 } 
    );
  }, []);

  return (
    <div>
      <Logo />
      {selectedMagazine ? (
        <PDFViewer 
          pdfSrc={selectedMagazine.pdf} 
          title={selectedMagazine.title} 
          onClose={() => setSelectedMagazine(null)} 
        />
      ) : (
        <MagazineGallery magazines={magazines} onSelect={setSelectedMagazine} />
      )}

      {showFollowContainer && (
        <div className="follow-container"
             style={{
               position: 'fixed',
               bottom: '20px',
               left: '20px',
               backgroundColor: '#fff',
               padding: '10px',
               borderRadius: '8px',
               boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
               textAlign: 'center',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               opacity: 0, 
             }}>
          <FaTimes 
            onClick={() => setShowFollowContainer(false)}  
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              fontSize: '20px',
              color: '#333',
              cursor: 'pointer',
            }}
          />
          <FaInstagram style={{ fontSize: '40px', color: '#E1306C', marginBottom: '10px' }} />
          <p style={{ marginBottom: '10px', fontSize: '14px', color: '#333' }}>Follow me on Instagram!</p>
          <a
            href="https://www.instagram.com/taleofmemories/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#E1306C',
              color: '#fff',
              padding: '8px 15px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            flw
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
