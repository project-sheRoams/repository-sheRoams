// components/TrendingTopics.js
import React, { useState, useEffect } from 'react';

const TrendingTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/api/trending-topics')
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching trending topics:', error));
  }, []);

  return (
    <div className="trending-topics">
      <h2>Trending Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
