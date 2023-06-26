import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {useInView} from 'react-intersection-observer';


const Contacts = () => {
    const {ref, inView} = useInView({threshold: 1});

    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Title>Contacts</Title>
                <form ref={ref} className={`${styles.form} ${inView ? styles.inView : ''}`} id={'contactsForm'}
                      action=".">
                    <Fade duration={1000} delay={500} triggerOnce>
                        <input type={'text'} placeholder={'Name'}/>
                    </Fade>
                    <Fade duration={1800} delay={500} triggerOnce>
                        <input type={'email'} placeholder={'E-mail'}/>
                    </Fade>
                    <Fade duration={2600} delay={500} triggerOnce>
                        <textarea placeholder={'Your message'}></textarea>
                    </Fade>
                    <Fade triggerOnce>
                        <button className={styles.button} form={'contactsForm'}>
                            Send message
                        </button>
                    </Fade>
                </form>
            </div>
        </section>
    );
};

export default Contacts;