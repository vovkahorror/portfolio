import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.navBlock}>
            <ul className={styles.navList}>
                <li><a href="#main">Main</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </nav>
    );
};

export default Nav;