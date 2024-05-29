import React from 'react';
import styles from './categories.module.css';

const CategorySelector = ({ onSelectCategory }) => {
  const categories = [
    'Very safe',
    'Forest',
    'Religious',
    'LGBT friendly',
    'Van life',
    'Beach',
    'Close to police station'
  ];

  return (
    <div className={styles.container}>
      <h2>Choose category</h2>
      <div className={styles.categoryButtons}>
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => onSelectCategory(category)} 
            className={styles.categoryButton}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;

