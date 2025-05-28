import React, { useState } from "react";
import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";
import trupt from '../../../assets/hero/trupt.png'

export const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Trupt!!</h1>
        <p className={styles.description}>
          Dedicated Software Engineer with a passion for building robust and scalable solutions.
        </p>
        <p className={styles.description}>
          With a strong foundation in full-stack development, Experienced working with technologies like React, Node.js, as well as hands-on expertise in cloud platform like AWS.
        </p>
        <a
          href="../../../assets/TRUPT_PATEL_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          View Resume
        </a>
      </div>
      <img
        src={trupt}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      {showResume && (
        <div className={styles.resumeModal} onClick={() => setShowResume(false)}>
          <div className={styles.resumeContent} onClick={e => e.stopPropagation()}>
            <iframe
              src="../../../assets/TRUPT_PATEL_RESUME.pdf"
              title="Resume"
              className={styles.resumeFrame}
            />
            {/* Removed the download button */}
            <button className={styles.closeBtn} onClick={() => setShowResume(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};