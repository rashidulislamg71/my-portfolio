/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import styles from "./Hero.module.css";
import { useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const speed = 150; // Typing speed in milliseconds

  const fullText = ` Hello, This is Rashidul Islam as a Front-End  Developer ....!`;

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Update displayed text when 'text' changes
    setDisplayedText(text);
  }, [text]);
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_text}>
        <div>{displayedText}</div>
       
      </div>
      <div className={styles.download_resumeBtn}>
       <a href="https://drive.google.com/file/d/1N2q28n1klhV8A1dJkLw9gsWUqf251wP9/view?usp=sharing" target="_blank"><button>Download Resume</button></a>
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
