import React from 'react';

import styles from '../../styles/Home.module.css';

import bgImg from '../../images/computer.png';

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE 20%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the bestseller of 2022</div>
        <h1 className={styles.head}>SUPER PC 2023 TI ULTRA TECHNOLOGY</h1>
        <button className={styles.button}>Shop Now</button>
      </div>

      <div className={styles.image}>
        <img src={bgImg} alt="AMMDD" />
      </div>
    </div>
  </section>
);

export default Poster;
