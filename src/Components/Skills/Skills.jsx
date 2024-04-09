


// import styles from "./Skills.module.css";

// const Skills = () => {
//   return (
//     <div className={styles.skills_section}>
//       <h3>Skills And Tools</h3>
//       <div className={styles.skills_content}>
//         <div className={styles.inner_content}>
//           <div className={styles.circul_progress}>
//             <span className={styles.progress_value}>0%</span>
//           </div>
//           <span className={styles.skill_name}>HTML</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React, { useState, useEffect } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const progressEndValue = 90;
    const speed = 40;

    const progress = setInterval(() => {
      setProgressValue(prevValue => {
        const newValue = prevValue + 1;
        return newValue <= progressEndValue ? newValue : prevValue;
      });
    }, speed);

    return () => clearInterval(progress);
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <div className={styles.skills_section}>
      <h3 className={styles.title}>Skills And Tools</h3>
      <div className={styles.skills_content}>
        <div className={styles.inner_content}>
          <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
            <span className={styles.progress_value}>{progressValue}%</span>
          </div>
          <span className={styles.skill_name}>HTML</span>
        </div>

        <div className={styles.inner_content}>
          <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
            <span className={styles.progress_value}>{progressValue}%</span>
          </div>
          <span className={styles.skill_name}>CSS</span>
        </div>

        <div className={styles.inner_content}>
          <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
            <span className={styles.progress_value}>{progressValue}%</span>
          </div>
          <span className={styles.skill_name}>Tailwind CSS</span>
        </div>

        <div className={styles.inner_content}>
          <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
            <span className={styles.progress_value}>{progressValue}%</span>
          </div>
          <span className={styles.skill_name}>JavaScript</span>
        </div>

        <div className={styles.inner_content}>
          <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
            <span className={styles.progress_value}>{progressValue}%</span>
          </div>
          <span className={styles.skill_name}>React.js</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;