import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><a href="">Main</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </nav>
    );
};

export default Nav;