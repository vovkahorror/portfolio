import React from 'react';
import styles from './Footer.module.scss';
import FooterContacts from './footerContacts/FooterContacts';
import {v1} from 'uuid';
import {footerContacts} from '../data/footerContacts';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <h2 className={styles.footerTitle}>Volodymyr Yaremchak</h2>
                <div className={styles.contacts}>
                    {footerContacts.map(contact => <FooterContacts key={v1()} link={contact.link}
                                                                   icon={contact.icon}/>)}
                </div>
                <time className={styles.year} dateTime={String(currentYear)}>{currentYear}</time>
            </div>
        </footer>
    );
};

export default Footer;