import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => (
    <footer className={styles.footer} >
        <div className={styles.content}>
            <span>© {new Date().getFullYear()} Trupt Patel. All rights reserved.</span>
            
        </div>
    </footer>
);