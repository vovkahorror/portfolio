import React from 'react';
import styles from './Header.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Nav from '../nav/Nav';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;