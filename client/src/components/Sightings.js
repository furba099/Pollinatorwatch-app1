import React, { useEffect, useState } from 'react';

function Sightings() {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/api/sightings')
      .then(res => res.json())
      .then(data => setSightings(data));
  }, []);

  return (
    <div>
      <h2>All Bee Sightings 🐝</h2>
      {sightings.length === 0 && <p>No sightings yet.</p>}
      <ul>
        {sightings.map((sighting, index) => (
          <li key={index}>
            <p><strong>Species:</strong> {sighting.species}</p>
            <p><strong>Location:</strong> {sighting.location}</p>
            <p><strong>Image:</strong> <a href={sighting.imageUrl} target="_blank" rel="noreferrer">View</a></p>
            <p><strong>Time:</strong> {new Date(sighting.timestamp).toLocaleString()}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sightings;
