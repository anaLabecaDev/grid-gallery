import React from 'react';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Frame } from '../../assets/frame.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';

const menuItems = [
  {
    name: 'Home',
    icon: <Frame title="list" />,
    to: '/',
  },
  {
    name: 'Favorites',
    icon: <Heart title="favorites" />,
    to: '/favorites',
  },
];

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <Logo className={styles.logo} title="logo" />

      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.name} className={styles.menuItem}>
            <NavLink to={item.to} className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
              {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
