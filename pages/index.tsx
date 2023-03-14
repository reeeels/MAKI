// import styles from '@/styles/Home.module.css'

import React from 'react';
import styles from '@/styles/index.module.css';


const LandingPage: React.FC = () => {
  return (
    <div className={styles.landing_page_container}>
      <h1 className={styles.landing_page_header}>Maki</h1>
      <p className={styles.landing_page_tagline}>
        ...Your smart solution for highlighting safety narratives
      </p>
      <p className={styles.landing_page_description}>
        With our AI-powered app, you can review patient case notes quickly and accurately, identifying and classifying potential safety concerns before they become critical.
      </p>
      <button className={styles.landing_page_button}><a href = "results" className={styles.link}>Get Started</a></button>
    </div>
  );
};

export default LandingPage;



// export default function Home() {
//   return (
//     <main className=''>
//         <h1 className=''>HELLO</h1>
//         <a href="page2.html">Go to Page 2</a>
//     </main>
//   )
// }
