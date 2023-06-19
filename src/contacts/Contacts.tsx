import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';


const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Fade direction={'up'} triggerOnce>
                    <Title>Contacts</Title>
                </Fade>
                <form className={styles.form} id={'contactsForm'} action=".">
                    <Fade direction={'left'} triggerOnce>
                        <input type="text" placeholder={'Name'}/>
                    </Fade>
                    <Fade direction={'right'} triggerOnce>
                        <input type="email" placeholder={'E-mail'}/>
                    </Fade>
                    <Fade direction={'left'} triggerOnce>
                        <textarea placeholder={'Your message'}></textarea>
                    </Fade>
                    <Fade direction={'down'} triggerOnce>
                        <button className={styles.button} form={'contactsForm'}>Send message</button>
                    </Fade>
                </form>
            </div>
        </section>
    );
};

export default Contacts;