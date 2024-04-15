/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import styles from "./About.module.css";
import about_img_Rashidul_Islam from "../../assets/images/Rashed.png";
import coding from "../../assets/images/about img/coding.png";
import programming from "../../assets/images/about img/programming.png";
import responsive from "../../assets/images/about img/responsive devices.png";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_content}>
        <h4 className={styles.title}>About Myself</h4>
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
          <h3 className={styles.title}>Why Work Wiht Me:</h3>
          <div className={styles.why_work_with_me_content}>
            <div className={styles.work_styles}>
              <img src={coding} alt="passion" />
              <h5>Passion for Coding</h5>
              <p>
                Coding isn't just a job for me; it's my passion. I take pride in
                my work and am constantly seeking ways to improve and innovate.
              </p>
            </div>

            <div className={styles.work_styles}>
              <img src={programming} alt="Coding" />
              <h5>Clean & Efficient Code</h5>
              <p>
                I adhere to best coding practices and standards, ensuring that
                my code is not only functional but also maintainable and
                scalable.
              </p>
            </div>

            <div className={styles.work_styles}>
              <img src={responsive} alt="Responsive" />
              <h5>Pixel-Perfect Design</h5>
              <p>
                I ensure pixel-perfect designs, optimizing layouts, typography,
                and animations for stunning cross-device performance.
              </p>
            </div>
          </div>
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
  );
};

export default About;
