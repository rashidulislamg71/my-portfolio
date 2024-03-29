/* eslint-disable no-unused-vars */
import styles from "./Contact.module.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";

import { MdMarkEmailUnread } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

import { IoShareSocialSharp } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { MdContactless } from "react-icons/md";

const Contact = () => {
  return (
    <div className={styles.contact_section}>
      <h2>Contact Me</h2>
      <div className={styles.contact_info}>
        <div className={styles.social}>
          <div className={styles.title}>
            <sapn>
              <IoShareSocialSharp />
            </sapn>
            <h3>Social -:</h3>
          </div>

          <div className={styles.socialIcons}>
            <a href="#" title="Linkedin" className={styles.linkedin}>
              <FaLinkedin />
            </a>
            <a href="#" title="Facebook" className={styles.facebook}>
              <ImFacebook2 />
            </a>
            <a href="#" title="Twitter" className={styles.twittr}>
              <FaXTwitter />
            </a>

            <a href="#" title="WhatsApp" className={styles.whatsApp}>
              <FaWhatsappSquare />
            </a>
            <a href="#" title="Github" className={styles.github}>
              <FaSquareGithub />
            </a>
          </div>
        </div>

        <div className={styles.emailAndPhone}>
          <div className={styles.title}>
            <sapn>
              <MdContactless />
            </sapn>
            <h3>Email or Phone -:</h3>
          </div>
          <a href="#">
            <MdMarkEmailUnread /> jrashidulislam0103@gmail.com
          </a>{" "}
          <br />
          <a href="#">
            <FaSquarePhone /> +880 1782-241671 <br /> +880 1849267660
          </a>
        </div>

        <div className={styles.address}>
          <div className={styles.title}>
            <sapn>
              {" "}
              <MdAddLocationAlt />{" "}
            </sapn>
            <h3>Address -:</h3>
          </div>

          <address>
            Binnabari, Baghabari <br />
            Shahzadpur, Sirajganj <br />
            Rajshahi, Dhaka
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;
