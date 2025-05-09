import React, { useEffect, useState } from 'react';
import beeImage from '../assets/bee.jpg';
import viewImage from '../assets/view.jpg'; // Add a second image (map or view)
import './ViewSighting.css';

function ViewSighting() {
  const [sightings, setSightings] = useState([]);

  // Simulate fetching sightings from backend
  useEffect(() => {
    const sampleSightings = [
      {
        imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
        location: 'Brisbane Garden',
        species: 'Apis mellifera'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1603126856072-df5cde8a1c52',
        location: 'City Park',
        species: 'Bombus terrestris'
      }
    ];

    setSightings(sampleSightings);
  }, []);

  return (
    <div className="view-container">
      <div className="view-header">
        <img src={beeImage} alt="Bee" className="view-icon" />
        <img src={viewImage} alt="Map" className="view-icon" />
      </div>

      <h2>🐝 Recent Bee Sightings</h2>

      <div className="sighting-list">
        {sightings.map((sighting, index) => (
          <div className="sighting-card" key={index}>
            <img src={sighting.imageUrl} alt="Bee" className="sighting-img" />
            <div>
              <p><strong>Location:</strong> {sighting.location}</p>
              <p><strong>Species:</strong> {sighting.species}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSighting;
