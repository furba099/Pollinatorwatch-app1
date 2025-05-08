import React, { useState } from 'react';

function UploadSighting() {
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState('');
  const [species, setSpecies] = useState('Apis mellifera');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5500/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl, location, species }),
    });

    const data = await response.json();
    setMessage(data.message);
    setImageUrl('');
    setLocation('');
  };

  return (
    <div>
      <h2>Upload Bee Sighting</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        /><br />

        <select value={species} onChange={(e) => setSpecies(e.target.value)}>
          <option value="Apis mellifera">Apis mellifera</option>
          <option value="Bombus terrestris">Bombus terrestris</option>
          <option value="Other">Other</option>
        </select><br />

        <button type="submit">Submit Sighting</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadSighting;
