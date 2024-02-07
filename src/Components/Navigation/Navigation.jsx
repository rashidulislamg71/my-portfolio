import { Link } from "react-scroll";
import styles from "./Navigation.module.css";
import portfolio_logo from "../../assets/images/portfolio_logo.png"

const Navigation = () => {
  return (
    <div className={styles.nav_styles}>
      <nav className={styles.navigation_section}>
        <div className={styles.logo}>
          <Link
            to="hero_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            delay={0.8}
          >
            {/* <i>
              <span className={styles.r}>R</span>ASHIDUL{" "}
              <span className={styles.i}>I</span>SALAM
            </i> */}
            <img src={portfolio_logo} alt="" />
          </Link>
        </div>

        <div className={styles.menu}>
          <ul>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>

        <div className={styles.DarkOrLight}>
          <span>Dark</span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
