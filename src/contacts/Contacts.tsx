import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Zoom} from 'react-awesome-reveal';


const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Zoom triggerOnce>
                    <Title>Contacts</Title>
                </Zoom>
                <form className={styles.form} id={'contactsForm'} action=".">
                    <Zoom triggerOnce>
                        <input type="text" placeholder={'Name'}/>
                        <input type="email" placeholder={'E-mail'}/>
                        <textarea placeholder={'Your message'}></textarea>
                        <button className={styles.button} form={'contactsForm'}>Send message</button>
                    </Zoom>
                </form>
            </div>
        </section>
    );
};

export default Contacts;