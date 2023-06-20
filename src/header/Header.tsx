import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import Nav from './nav/Nav';
import BurgerNav from './burgerNav/BurgerNav';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        isOpen && (document.body.style.overflow = 'hidden');
        !isOpen && (document.body.style.overflow = 'unset');
    }, [isOpen]);

    return (
        <header className={`${styles.header} ${isOpen ? styles.headerOpen : ''}`}>
            <div className={styles.headerContainer}>
                <Nav/>
                <BurgerNav isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </header>
    );
};

export default Header;