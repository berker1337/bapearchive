import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const MagazineGallery = ({ magazines, onSelect }) => {
  const [seasonFilters, setSeasonFilters] = useState([]);
  const [yearFilters, setYearFilters] = useState([]);

  const handleSeasonChange = (season) => {
    setSeasonFilters((prev) =>
      prev.includes(season)
        ? prev.filter((item) => item !== season)
        : [...prev, season]
    );
  };

  const handleYearChange = (year) => {
    setYearFilters((prev) =>
      prev.includes(year)
        ? prev.filter((item) => item !== year)
        : [...prev, year]
    );
  };

  const filteredMagazines = magazines.filter((magazine) => {
    const matchesSeason =
      seasonFilters.length === 0 ||
      seasonFilters.some((season) =>
        magazine.title.toLowerCase().includes(season.toLowerCase())
      );
    const matchesYear =
      yearFilters.length === 0 || yearFilters.includes(magazine.title.slice(-4));
    return matchesSeason && matchesYear;
  });

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div
        style={{
          width: '250px',
          padding: '20px',
          backgroundColor: '#f4f4f4',
          borderRadius: '8px',
          position: 'sticky',
          top: 0,
          height: 'fit-content',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Filters</h3>
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px' }}>Season</h4>
          {['Spring', 'Summer', 'Autumn', 'Winter'].map((season) => (
            <div key={season} style={{ marginBottom: '5px' }}>
              <label>
                <input
                  type="checkbox"
                  value={season}
                  checked={seasonFilters.includes(season)}
                  onChange={() => handleSeasonChange(season)}
                  style={{ marginRight: '8px' }}
                />
                {season}
              </label>
            </div>
          ))}
        </div>

     
        <div>
          <h4 style={{ marginBottom: '10px' }}>Year</h4>
          {Array.from({ length: 9 }, (_, i) => 2005 + i).map((year) => (
            <div key={year} style={{ marginBottom: '5px' }}>
              <label>
                <input
                  type="checkbox"
                  value={year}
                  checked={yearFilters.includes(String(year))}
                  onChange={() => handleYearChange(String(year))}
                  style={{ marginRight: '8px' }}
                />
                {year}
              </label>
            </div>
          ))}
        </div>
      </div>

  
      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            display: 'grid',
            gap: '15px',
            gridTemplateColumns: 'repeat(4, 1fr)', 
            justifyContent: 'center',
          }}
        >
          {filteredMagazines.length > 0 ? (
            filteredMagazines.map((magazine) => (
              <div
                key={magazine.id}
                style={{
                  cursor: 'pointer',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  height: '400px', 
                }}
                onClick={() => onSelect(magazine)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={magazine.image}
                  alt={magazine.title}
                  style={{ width: '100%', height: '70%', objectFit: 'cover' }}
                />
                <div style={{ padding: '8px', textAlign: 'center' }}>
                  <h4 style={{ margin: '0', fontSize: '0.9em' }}>{magazine.title}</h4>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', marginTop: '20px' }}>No magazines found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagazineGallery;
