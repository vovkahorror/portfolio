import React, {FC} from 'react';
import styles from './BurgerNav.module.scss';
import {Link} from 'react-scroll';
import {Rotate} from 'react-awesome-reveal';

const BurgerNav: FC<BurgerNavPropsType> = ({isOpen, setIsOpen}) => {
    const linkParams = {
        activeClass: styles.active,
        spy: true,
        smooth: true,
        offset: 0,
        duration: 500,
        delay: 0,
    };

    const toggleBurgerNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.burgerNav}>
            <div className={`${styles.burgerNavBtn} ${isOpen ? styles.open : ''}`} onClick={toggleBurgerNav}></div>
            {isOpen &&
                <Rotate direction={'bottom-right'} duration={400} triggerOnce cascade damping={0.3}>
                    <ul className={styles.navList}>
                        <li><Link to="main" {...linkParams}>Main</Link></li>
                        <li><Link to="skills" {...linkParams}>Skills</Link></li>
                        <li><Link to="projects" {...linkParams}>Projects</Link></li>
                        <li><Link to="contacts" {...linkParams}>Contacts</Link></li>
                    </ul>
                </Rotate>
            }
        </nav>
    );
};

type BurgerNavPropsType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default BurgerNav;