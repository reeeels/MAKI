import React from 'react';
import styles from '@/styles/index.module.css';


const LandingPage: React.FC = () => {
  return (
    <div className={styles.landing_page_container}>
      <h1 className={styles.landing_page_header}>MAKI</h1>
      <p className={styles.landing_page_tagline}>
        ...your smart solution for highlighting safety narratives
      </p>
      <p className={styles.landing_page_description}>
        With our AI-powered app, you can review patient case notes quickly and accurately, identifying and classifying potential safety concerns before they become critical.
      </p>
      <a href="results"><button className={styles.landing_page_button}>Get Started</button></a>
    </div>
  );
};

export default LandingPage;
