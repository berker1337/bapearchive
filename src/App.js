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
  { id: 7, title: 'Winter 2011', image: '/assets/magazine7.png', pdf: '/assets/magazine7.pdf' },
  { id: 8, title: 'Autumn 2011', image: '/assets/magazine8.png', pdf: '/assets/magazine8.pdf' },
  { id: 9, title: 'Summer 2011', image: '/assets/magazine9.png', pdf: '/assets/magazine9.pdf' },
  { id: 10, title: 'Spring 2011', image: '/assets/magazine10.png', pdf: '/assets/magazine10.pdf' },
  { id: 11, title: 'Winter 2010', image: '/assets/magazine11.png', pdf: '/assets/magazine11.pdf' },
  { id: 12, title: 'Autumn 2010', image: '/assets/magazine12.png', pdf: '/assets/magazine12.pdf' },
  { id: 13, title: 'Summer 2010', image: '/assets/magazine13.png', pdf: '/assets/magazine13.pdf' },
  { id: 14, title: 'Spring 2010', image: '/assets/magazine14.png', pdf: '/assets/magazine14.pdf' },
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
