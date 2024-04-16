// import React, { useState, useEffect } from "react";
// import styles from "./Skills.module.css";
// import figma from "../../assets/images/figma.png";
// import git from "../../assets/images/git.png";
// import firebase from "../../assets/images/firebase.png";

// const Skills = () => {
//   const [progressValues, setProgressValues] = useState({
//     HTML: 0,
//     CSS: 0,
//     "Tailwind CSS": 0,
//     JavaScript: 0,
//     "React.js": 0,
//   });

//   useEffect(() => {
//     const speed = 40;

//     const progressEndValues = {
//       HTML: 80,
//       CSS: 75,
//       "Tailwind CSS": 60,
//       JavaScript: 60,
//       "React.js": 50,
//     };

//     const progress = setInterval(() => {
//       setProgressValues((prevValues) => {
//         const newValues = {};
//         for (const key in prevValues) {
//           newValues[key] =
//             prevValues[key] < progressEndValues[key]
//               ? prevValues[key] + 1
//               : progressEndValues[key];
//         }
//         return newValues;
//       });
//     }, speed);

//     return () => clearInterval(progress);
//   }, []); // Empty dependency array ensures this effect runs only once after component mount

//   return (
//     <div className={styles.skills_section}>
//       <h3 className={styles.title}>Skills And Tools</h3>
//       <div className={styles.skills_content}>
//         {Object.keys(progressValues).map((skill) => (
//           <div className={styles.inner_content} key={skill}>
//             <div
//               className={styles.circular_progress}
//               style={{
//                 background: `conic-gradient(#7d2ae8 ${
//                   progressValues[skill] * 3.6
//                 }deg, #ededed 0deg)`,
//               }}
//             >
//               <span className={styles.progress_value}>
//                 {progressValues[skill]}%
//               </span>
//             </div>
//             <span className={styles.skill_name}>{skill}</span>
//           </div>
//         ))}
//       </div>

//       <div className={styles.tools}>
//         <div className={styles.tools_content}>
//           <div>
//             <img src={figma} alt="Figma" /> <span>Figma</span>
//           </div>

//           <div>
//             <img src={git} alt="Git" /> <span>Git</span>
//           </div>
//           <div>
//             <img src={firebase} alt="Firebase" /> <span>Firebase</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import styles from "./Skills.module.css";
import figma from "../../assets/images/figma.png";
import git from "../../assets/images/git.png";
import firebase from "../../assets/images/firebase.png";

//*Skills Logo */
import { PiFileHtmlBold } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  return (
    <div className={styles.skills_section}>
      <h3 className={styles.title}>Skills And Tools</h3>
      <div className={styles.skills_names}>
        <div className={`${styles.skill_logo} ${styles.html_logo}`}>
          <div>
            <span>
              <PiFileHtmlBold />
            </span>
          </div>
          <h5>HTML</h5>
        </div>
        <div className={`${styles.skill_logo} ${styles.css_logo}`}>
          <div>
            <span>
              <PiFileCssBold />
            </span>
          </div>{" "}
          <h5>CSS</h5>
        </div>
        <div className={`${styles.skill_logo} ${styles.tailwind_logo}`}>
          <div>
            <span>
              <SiTailwindcss />{" "}
            </span>
          </div>
          <h5>TailwindCSS</h5>
        </div>
        <div className={`${styles.skill_logo} ${styles.javaScript_logo}`}>
          <div>
            <span>
              <IoLogoJavascript />
            </span>
          </div>
          <h5>JavaScript</h5>
        </div>
        <div className={`${styles.skill_logo} ${styles.react_logo}`}>
          <div>
            <span>
              <TbBrandReactNative />
            </span>
          </div>
          <h5>React.js</h5>
        </div>
      </div>

      <div className={styles.tools}>
        <div className={styles.tools_name}>
          <div>
            <img src={figma} alt="Figma" /> <span>VS Code</span>
          </div>
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
