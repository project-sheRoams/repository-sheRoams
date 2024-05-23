import React, { useState, useEffect } from 'react';

const SuggestedDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('/api/suggested-destinations')
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error('Error fetching suggested destinations:', error));
  }, []);

  return (
    <div className="suggested-destinations">
      <h2>Suggested Destinations</h2>
      <div>
        <img src="" alt="" />
          <ul>
            {destinations.map((destination, index) => (
              <li key={index}>{destination.name}</li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default SuggestedDestinations;
