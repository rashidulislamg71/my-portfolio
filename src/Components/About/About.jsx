/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import styles from "./About.module.css";
import about_img_Rashidul_Islam from "../../assets/images/Rashidul_islam.png";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_content}>
        <div className={styles.image_and_about_me_and_what_i_do}>
          <div className={styles.myabout_image}>
            <img src={about_img_Rashidul_Islam} alt="Rashidul Islam" />
          </div>
          <div className={styles.about_me_and_what_i_do}>
            <div className={styles.about_me}>
              <h3>About me:</h3>
              <p>
                Hello, I'm Md: Rashidul Islam, a dedicated Front-end Web
                Developer with a genuine passion for coding. With every line of
                code, I find joy in the process and am committed to delivering
                excellence in every project I undertake. My focus is on
                providing clean, efficient code and achieving pixel-perfect,
                responsive designs.{" "}
              </p>
            </div>
            <div className={styles.what_i_do}>
              <h3>What I Do:</h3>
              <p>
                As a Front-end Web Developer, my primary goal is to create
                user-friendly and visually appealing interfaces that adapt
                seamlessly across all devices. I believe in the importance of
                responsive design, ensuring that every user has a consistent and
                optimal experience regardless of their device or screen size.
              </p>
            </div>
            <div className={styles.approach}>
             <h3> My Approach:</h3> 
              <p>
                I approach each project with meticulous attention to detail,
                striving for perfection in every aspect of front-end
                development. From conceptualization to implementation, I work
                tirelessly to translate ideas into intuitive and engaging user
                experiences.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.why_work_with_me}>
          <div>
            <h3>Why Work Wiht Me:</h3>
            <li>
              <span>
                <b>Passion for Coding.</b>
              </span>
            </li>

            <li>
              <span>
                <b>Clean Code.</b>
              </span>
            </li>

            <li>
              <span>
                <b>Pixel-Perfect Design.</b>
              </span>
            </li>
          </div>

        </div>

        {/* <div className={styles.collaborate}>
          <h3>Let's Collaborate:</h3>
          <span>
            If you're looking for a Front-end Web Developer who is dedicated to
            delivering responsive, user-friendly interfaces, then look no
            further. I'm here to turn your vision into reality and create
            exceptional digital experiences.
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default About;
