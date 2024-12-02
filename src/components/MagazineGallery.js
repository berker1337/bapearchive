import React, { useState } from 'react';

const MagazineGallery = ({ magazines, onSelect }) => {
  // Stav pro filtraci podle sezóny a roku
  const [seasonFilter, setSeasonFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  // Filtrujeme magazíny podle sezóny a roku
  const filteredMagazines = magazines.filter(magazine => {
    const matchesSeason = seasonFilter ? magazine.title.toLowerCase().includes(seasonFilter.toLowerCase()) : true;
    const matchesYear = yearFilter ? magazine.title.includes(yearFilter) : true;
    return matchesSeason && matchesYear;
  });

  return (
    <div style={{ display: 'flex' }}>
      {/* Filtrační panel */}
      <div style={{ width: '250px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', marginRight: '20px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Filters</h3>

        {/* Filtr pro sezónu */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="season" style={{ display: 'block', marginBottom: '5px' }}>Season</label>
          <select
            id="season"
            onChange={(e) => setSeasonFilter(e.target.value)}
            value={seasonFilter}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          >
            <option value="">All</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        {/* Filtr pro rok */}
        <div>
          <label htmlFor="year" style={{ display: 'block', marginBottom: '5px' }}>Year</label>
          <select
            id="year"
            onChange={(e) => setYearFilter(e.target.value)}
            value={yearFilter}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          >
            <option value="">All</option>
            {Array.from({ length: 9 }, (_, i) => 2005 + i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Galerie magazínů */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        flexGrow: 1,
      }}>
        {filteredMagazines.map((magazine) => (
          <div
            key={magazine.id}
            onClick={() => onSelect(magazine)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '10px',
              borderRadius: '8px',
              display: 'inline-block',
              flexBasis: 'calc(33.33% - 20px)', // Zajištění max 3 položek na řádku s mezerou
              boxSizing: 'border-box', // Aby se zahrnovala mezera do šířky
            }}
          >
            <div
              style={{
                width: '200px',   // Nastavení pevné šířky pro všechny obrázky
                height: '300px',  // Zvětšení výšky obrázku
                overflow: 'hidden', // Skrytí přetékajících částí obrázku
                borderRadius: '4px', // Zaoblení rohů
                margin: '0 auto', // Vycentrování obrázku
              }}
            >
              <img
                src={magazine.image}
                alt={magazine.title}
                style={{
                  width: '100%',  // Šířka obrázku se přizpůsobí velikosti kontejneru
                  height: '100%', // Výška obrázku se přizpůsobí velikosti kontejneru
                  objectFit: 'cover', // Pokrytí celého kontejneru bez deformace
                }}
              />
            </div>
            <h3 style={{ marginTop: '10px', fontSize: '16px' }}>{magazine.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazineGallery;
