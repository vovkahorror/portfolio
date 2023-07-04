import React from 'react';
import styles from './Nav.module.scss';
import {Link} from 'react-scroll';

const Nav = () => {
    const linkParams = {
        activeClass: styles.active,
        spy: true,
        smooth: true,
        offset: -2,
        duration: 500,
        delay: 0,
    };

    return (
        <nav>
            <ul className={styles.navList}>
                <li><Link to="main" {...linkParams}>Main</Link></li>
                <li><Link to="skills" {...linkParams}>Skills</Link></li>
                <li><Link to="projects" {...linkParams}>Projects</Link></li>
                <li><Link to="contacts" {...linkParams}>Contacts</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;