import React from 'react';
import './PDFViewer.css';

const PDFViewer = ({ pdfSrc, title, onClose }) => {
  return (
    <div className="pdf-viewer">
      <button className="back-button" onClick={onClose}>Back</button>
      {/* Název magazínu zůstává, ale odstraníme název stránky */}
      <h1>{title}</h1>
      <div className="pdf-container">
        <embed
          src={pdfSrc}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default PDFViewer;
