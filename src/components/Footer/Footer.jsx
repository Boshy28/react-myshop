import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Footer.module.css';

import { ROUTES } from '../../utils/routes';
import logoImg from '../../images/logo.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logoImg} alt="logo"></img>
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Boshy28">
          Boshy28
        </a>
      </div>

      <div className={styles.socials}>
        <a href="http://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="http://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="http://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
