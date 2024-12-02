import React, { useState } from 'react';
import Logo from './components/Logo';
import MagazineGallery from './components/MagazineGallery';
import PDFViewer from './components/PDFViewer';

const magazines = [
  { id: 1, title: 'Autumn / Winter 2013', image: '/assets/magazine1.png', pdf: '/assets/magazine1.pdf' },
  { id: 2, title: 'Summer 2013', image: '/assets/magazine2.png', pdf: '/assets/magazine2.pdf' },
  { id: 3, title: 'Spring 2013', image: '/assets/magazine3.png', pdf: '/assets/magazine3.pdf' },
  { id: 4, title: 'Autumn / Winter 2012', image: '/assets/magazine4.png', pdf: '/assets/magazine4.pdf' },
  { id: 5, title: 'Summer 2012', image: '/assets/magazine5.png', pdf: '/assets/magazine5.pdf' },
  { id: 6, title: 'Spring 2012', image: '/assets/magazine6.png', pdf: '/assets/magazine6.pdf' },
];

const App = () => {
  const [selectedMagazine, setSelectedMagazine] = useState(null);

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
    </div>
  );
};

export default App;
