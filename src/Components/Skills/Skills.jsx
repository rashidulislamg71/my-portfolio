/* eslint-disable no-unused-vars */

// // import styles from "./Skills.module.css";

// // const Skills = () => {
// //   return (
// //     <div className={styles.skills_section}>
// //       <h3>Skills And Tools</h3>
// //       <div className={styles.skills_content}>
// //         <div className={styles.inner_content}>
// //           <div className={styles.circul_progress}>
// //             <span className={styles.progress_value}>0%</span>
// //           </div>
// //           <span className={styles.skill_name}>HTML</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skills;

// import React, { useState, useEffect } from 'react';
// import styles from './Skills.module.css';

// const Skills = () => {
//   const [progressValue, setProgressValue] = useState(0);

//   useEffect(() => {
//     const progressEndValue = 90;
//     const speed = 40;

//     const progress = setInterval(() => {
//       setProgressValue(prevValue => {
//         const newValue = prevValue + 1;
//         return newValue <= progressEndValue ? newValue : prevValue;
//       });
//     }, speed);

//     return () => clearInterval(progress);
//   }, []); // Empty dependency array ensures this effect runs only once after component mount

//   return (
//     <div className={styles.skills_section}>
//       <h3 className={styles.title}>Skills</h3>
//       <div className={styles.skills_content}>
//         <div className={styles.inner_content}>
//           <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
//             <span className={styles.progress_value}>{progressValue}%</span>
//           </div>
//           <span className={styles.skill_name}>HTML</span>
//         </div>

//         <div className={styles.inner_content}>
//           <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
//             <span className={styles.progress_value}>{progressValue}%</span>
//           </div>
//           <span className={styles.skill_name}>CSS</span>
//         </div>

//         <div className={styles.inner_content}>
//           <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
//             <span className={styles.progress_value}>{progressValue}%</span>
//           </div>
//           <span className={styles.skill_name}>Tailwind CSS</span>
//         </div>

//         <div className={styles.inner_content}>
//           <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
//             <span className={styles.progress_value}>{progressValue}%</span>
//           </div>
//           <span className={styles.skill_name}>JavaScript</span>
//         </div>

//         <div className={styles.inner_content}>
//           <div className={styles.circular_progress} style={{ background: `conic-gradient(#7d2ae8 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
//             <span className={styles.progress_value}>{progressValue}%</span>
//           </div>
//           <span className={styles.skill_name}>React.js</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import figma from "../../assets/images/figma.png";
import git from "../../assets/images/git.png";
import firebase from "../../assets/images/firebase.png";

const Skills = () => {
  const [progressValues, setProgressValues] = useState({
    HTML: 0,
    CSS: 0,
    "Tailwind CSS": 0,
    JavaScript: 0,
    "React.js": 0,
  });

  useEffect(() => {
    const speed = 40;

    const progressEndValues = {
      HTML: 80,
      CSS: 75,
      "Tailwind CSS": 60,
      JavaScript: 60,
      "React.js": 50,
    };

    const progress = setInterval(() => {
      setProgressValues((prevValues) => {
        const newValues = {};
        for (const key in prevValues) {
          newValues[key] =
            prevValues[key] < progressEndValues[key]
              ? prevValues[key] + 1
              : progressEndValues[key];
        }
        return newValues;
      });
    }, speed);

    return () => clearInterval(progress);
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <div className={styles.skills_section}>
      <h3 className={styles.title}>Skills And Tools</h3>
      <div className={styles.skills_content}>
        {Object.keys(progressValues).map((skill) => (
          <div className={styles.inner_content} key={skill}>
            <div
              className={styles.circular_progress}
              style={{
                background: `conic-gradient(#7d2ae8 ${
                  progressValues[skill] * 3.6
                }deg, #ededed 0deg)`,
              }}
            >
              <span className={styles.progress_value}>
                {progressValues[skill]}%
              </span>
            </div>
            <span className={styles.skill_name}>{skill}</span>
          </div>
        ))}
      </div>

      <div className={styles.tools}>
        <div className={styles.tools_content}>
          <div>
            <img src={figma} alt="Figma" /> <span>Figma</span>
          </div>

          <div>
            <img src={git} alt="Git" /> <span>Git</span>
          </div>
          <div>
            <img src={firebase} alt="Firebase" /> <span>Firebase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
