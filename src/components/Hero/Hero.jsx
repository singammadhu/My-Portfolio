import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madhu</h1>
        <p className={styles.description}>
         Aspiring Frontend Developer specializing in React, HTML, CSS, and JavaScript. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:singhammaddhu97@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
   
    </section>
  );
};
