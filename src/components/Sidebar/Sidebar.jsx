import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import styles from '../../styles/Sidebar.module.css';
import { ROUTES } from '../../utils/routes';

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section>
      <div className={styles.sidebar}>
        <div className={styles.title}>CATEGORIES</div>
        <nav>
          <ul className={styles.menu}>
            {list
              .filter(({ id }) => id < 8)
              .map(({ id, name }) => (
                <li key={id}>
                  <NavLink
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                    to={`/categories/${id}`}>
                    {name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          <Link to={ROUTES.HELP} className={styles.link}>
            Help
          </Link>

          <Link to={ROUTES.ABOUT} className={styles.link} style={{ textDecoration: 'underline' }}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
