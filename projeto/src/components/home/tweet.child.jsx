import React from 'react';
import styles from '../home/tweetChild.module.css'

const Tweet = ({ children }) => {
  return <div className={styles.tweet}>{children}</div>;
};

export default Tweet;
