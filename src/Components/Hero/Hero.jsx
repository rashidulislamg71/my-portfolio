/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import styles from "./Hero.module.css";
import { useState } from "react";
import hero_img from "../../assets/images/Hero img.png";
import { Link } from 'react-scroll';

import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";


const Hero = () => {
  // const [text, setText] = useState("");
  // const [displayedText, setDisplayedText] = useState("");
  // const speed = 150; // Typing speed in milliseconds

  // const fullText = `This is Rashidul Islam as a Front-End  Developer ....!`;

  // useEffect(() => {
  //   let currentIndex = 0;
  //   const intervalId = setInterval(() => {
  //     if (currentIndex < fullText.length) {
  //       setText(fullText.slice(0, currentIndex + 1));
  //       currentIndex += 1;
  //     } else {
  //       clearInterval(intervalId);
  //     }
  //   }, speed);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once

  // useEffect(() => {
  //   // Update displayed text when 'text' changes
  //   setDisplayedText(text);
  // }, [text]);
  return (
    <div className={styles.hero_section}>
      <div>
        <div className={styles.hero_text}>
          {/* <div>{displayedText}</div> */}
          <div className={styles.greetings}>Hello, It's Me !</div>
          <div className={styles.addressing}>
            <h1>Rashidul Islam,</h1>
            <p>
              {" "}
              And I'm a <span>Front-end Web Developer</span>
            </p>
            <small>
              As a passionate Front-end Web Developer,I'm committed to
              delivering excellence in every project. With clean, efficient code
              and pixel-perfect designs, I ensure exceptional results.
              <Link
            to="about_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
          >
           <br /> <button className={styles.read_more_btn}>Read More...</button>
            
          </Link>
              
            </small>
            <div className={styles.hero_social_btn}>
              <a className={styles.linkedin_btn} target="_blank" title="Linkedin" href="https://www.linkedin.com/in/rashidulislam71/"><FaLinkedin /></a>
              <a  className={styles.GitHub_btn} target="_blank" title="Github" href="https://github.com/rashidulislamg71" ><FaSquareGithub /></a>
            </div>
          </div>
        </div>
        <div className={styles.download_resumeBtn}>
          <a
            href="https://drive.google.com/file/d/1N2q28n1klhV8A1dJkLw9gsWUqf251wP9/view?usp=sharing"
            target="_blank"
          >
            <button>Download Resume</button>
          </a>
        </div>
      </div>

      <div className={styles.hero_img}>
        <img src={hero_img} alt="Flower" />
      </div>

      <div className={styles.animation}>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
        <div className={styles.animation_box}></div>
      </div>
    </div>
  );
};

export default Hero;
