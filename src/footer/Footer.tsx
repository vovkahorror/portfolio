import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import FooterContacts from './footerContacts/FooterContacts';
import {v1} from 'uuid';

const Footer = () => {
    const footerContacts = [
        {
            link: '',
            imgSrc: '',
            alt: 'GitHub',
        },
        {
            link: '',
            imgSrc: '',
            alt: 'LinkedIn',
        },
        {
            link: '',
            imgSrc: '',
            alt: 'mail',
        },
        {
            link: '',
            imgSrc: '',
            alt: 'phone',
        },
    ];

    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.footerTitle}>Volodymyr Yaremchak</h2>
                <div className={styles.contacts}>
                    {footerContacts.map(contact => <FooterContacts key={v1()} link={contact.link}
                                                                   imgSrc={contact.imgSrc} alt={contact.alt}/>)}
                </div>
                <span>2023</span>
            </div>
        </div>
    );
};

export default Footer;