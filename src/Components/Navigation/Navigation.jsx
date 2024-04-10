/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// import { Link } from "react-scroll";
// import styles from "./Navigation.module.css";
// import portfolio_logo from "../../assets/images/portfolio_logo.png";

// import { FiList, FiX } from "react-icons/fi";

// const Navigation = () => {
//   return (
//     <header className={styles.nav_styles}>
//       <nav className={styles.navigation_section}>
//         <div className={styles.logo}>
//           <Link
//             to="hero_section"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={400}
//             delay={0.8}
//           >
//             <img src={portfolio_logo} alt="" />
//           </Link>
//         </div>

//         <div className={styles.menu}>
//           <ul>
//             <li>
//               <Link
//                 to="hero_section"
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 duration={400}
//                 delay={0.8}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="about_section"
//                 spy={true}
//                 smooth={true}
//                 offset={-74}
//                 duration={400}
//                 delay={0.8}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="projects_section"
//                 spy={true}
//                 smooth={true}
//                 offset={-74}
//                 duration={400}
//                 delay={0.8}
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="skills_section"
//                 spy={true}
//                 smooth={true}
//                 offset={-74}
//                 duration={400}
//                 delay={0.8}
//               >
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="contact_section"
//                 spy={true}
//                 smooth={true}
//                 offset={-74}
//                 duration={400}
//                 delay={0.8}
//               >
//                 Contact me
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* <div className={styles.DarkOrLight}>
//           <span>Dark</span>
//         </div> */}
//       </nav>

//       {/* {showMenu ? (
//           <button
//             className={`${styles.nav_btn} ${styles.nav_close_btn}`}

//           >
//             <FiX />
//           </button>
//         ) : (
//           <button className={styles.nav_btn}>
//             <FiList />
//           </button>
//         )} */}
//     </header>
//   );
// };

// export default Navigation;





import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navigation.module.css";
import portfolio_logo from "../../assets/images/portfolio_logo.png";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header className={styles.nav_styles}>
        <div className={styles.logo}>
          <Link
            to="hero_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            delay={0.8}
          >
            {/* <img src={portfolio_logo} alt="" /> */}
            <h5>Rashidul</h5>
            <h4>Islam</h4>
          </Link>
        </div>
        <nav ref={navRef} className={styles.navigation_section}>
          <Link
            to="hero_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            delay={0.8}
          >
            Home
          </Link>

          <Link
            to="about_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
          >
            About
          </Link>

          <Link
            to="projects_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
          >
            Projects
          </Link>

          <Link
            to="skills_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
          >
            Skills
          </Link>

          <Link
            to="contact_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
          >
            Contact me
          </Link>
        </nav>

        {showMenu ? (
          <button
            className={`${styles.nav_btn} ${styles.nav_close_btn}`}
            onClick={showNavbar}
          >
            <FiX />
          </button>
        ) : (
          <button className={styles.nav_btn} onClick={showNavbar}>
            <RxHamburgerMenu />
          </button>
        )}
      </header>
    </div>
  );
};

export default Navigation;
