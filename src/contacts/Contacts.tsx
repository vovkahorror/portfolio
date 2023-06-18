import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';


const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Title>Contacts</Title>
                <form className={styles.form} id={'contactsForm'} action=".">
                    <input type="text" placeholder={'Name'}/>
                    <input type="email" placeholder={'E-mail'}/>
                    <textarea placeholder={'Your message'}></textarea>
                    <button className={styles.button} form={'contactsForm'}>Send message</button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;