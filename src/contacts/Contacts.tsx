import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';


const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Title>Contacts</Title>
                <form className={styles.form} id={'contactsForm'} action=".">
                    <Fade duration={600} triggerOnce>
                        <input type="text" placeholder={'Name'}/>
                    </Fade>
                    <Fade duration={1400} triggerOnce>
                        <input type="email" placeholder={'E-mail'}/>
                    </Fade>
                    <Fade duration={2000} triggerOnce>
                        <textarea placeholder={'Your message'}></textarea>
                    </Fade>
                    <button className={styles.button} form={'contactsForm'}>Send message</button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;