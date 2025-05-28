import React, { useState } from "react";
import styles from "./Certification.module.css";
import certifications from "../../data/certifications.json";

export const Certification = () => {
    const [preview, setPreview] = useState(null);

    return (
        <section className={styles.container} id="certification">
            <h2 className={styles.title}>Certifications</h2>
            <br />
            <div className={styles.certificates}>
                {certifications.map((cert, idx) => (
                    <div key={idx} className={styles.certificate}>
                        <img
                            src={cert.imageSrc}
                            alt={cert.title}
                            className={styles.certificateImage}
                            onClick={() => setPreview(cert.imageSrc)}
                            style={{ cursor: "pointer" }}
                        />
                        <p className={styles.certTitle}>{cert.title}</p>
                        <p className={styles.certSource}>{cert.source}</p>
                    </div>
                ))}
            </div>
            {preview && (
                <div className={styles.modal} onClick={() => setPreview(null)}>
                    <img src={preview} alt="Certificate Preview" className={styles.previewImage} />
                </div>
            )}
        </section>
    );
};