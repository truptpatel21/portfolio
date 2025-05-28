import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        
        <li className={styles.link}>
          <img src= "../../../assets/contact/email.png" alt="Email icon" />
          <a href="mailto:trupt.work21@email.com">trupt.work21@email.com</a>
        </li>
        <li className={styles.link}>
          <img src="../../../assets/contact/phone-call.png" alt="Call icon" />
          <a >+918849737999</a>
        </li>
        <li className={styles.link}>
          <img
            src = "../../../assets/contact/linkedin.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/truptpatel21/" target="_blank">linkedin.com/in/truptpatel21/</a>
        </li>
        <li className={styles.link}>
          <img src= "../../../assets/contact/github (1).png" alt="Github icon" />
          <a href="https://github.com/truptpatel21" target="_blank">github.com/truptpatel21</a>
        </li>
        <li className={styles.link}>
          <img src= "../../../assets/contact/instagram.png" alt="Instagram icon" />
          <a href="https://www.instagram.com/trupt._21/" target="_blank">trupt._21/</a>
        </li>
        <li className={styles.link}>
          <img src="../../../assets/contact/twitter.png" alt="Twitter icon" />
          <a href="https://x.com/TruptPatel8" target="_blank">TruptPatel8</a>
        </li>
        
      </ul>
    </div>
  );
};
