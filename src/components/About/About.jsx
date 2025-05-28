import React from "react";

import styles from "./About.module.css";
import cursor from '../../../assets/about/cursorIcon.png'
import serverIcon from '../../../assets/about/serverIcon.png'
import database from '../../../assets/about/database-storage.png'
import truptcar from '../../../assets/hero/truptcar.png'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src= {truptcar}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src = {cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3> <br />
              <p>
                Experienced in building responsive and dynamic user interfaces with HTML, CSS, JavaScript,Next.js and React.js. 
              </p> <br />
              <p>
                Skilled in creating seamless UI/UX using Tailwind CSS and modern frontend tools.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src= {serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Skilled in developing scalable server-side applications and RESTful APIs using Node.js and Express.js..
              </p> <br />
              <p>
                Hands-on experience with authentication, database integration, and performance optimization
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src = {database} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3> <br />
              <p>
                Proficient in designing, optimizing, and managing relational and NoSQL databases. 
              </p> <br />
              <p>
                Hands-on experience with MySQL, and MongoDB
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
