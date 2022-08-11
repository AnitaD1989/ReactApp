import React from 'react';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.container}>
          <span className={styles.icon + ' fa fa-tasks'}></span>
          <ul className={styles.links}>
            <li>
              <NavLink className={({isActive}) => styles.link + (isActive ? ' ' + styles.linkActive : '')} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => styles.link + (isActive ? ' ' + styles.linkActive : '')} to="/favorite">
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => styles.link + (isActive ? ' ' + styles.linkActive : '')} to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;