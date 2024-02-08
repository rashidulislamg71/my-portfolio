/* eslint-disable react/no-unescaped-entities */

import styles from "./About.module.css"
const About = () => {
    return (
        <div className={styles.about}> 
            <div className={styles.about_content}>
                <div className={styles.about_me}>
                    <h3>About me:</h3>
                    <p>Dedicated front-end developer skilled in HTML, CSS, JavaScript, and React.js. I specialize in crafting visually appealing and user-friendly web experiences. Committed to detail and innovation, I'm ready to contribute my expertise to your projects.</p>
                </div>
                <div className={styles.myabout_image}>
                    <span><img src="" alt="Rashidul Islam" /></span>
                </div>
            </div>
        </div>
    );
};

export default About;   