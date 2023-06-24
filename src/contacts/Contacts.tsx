import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {useInView} from 'react-intersection-observer';


const Contacts = () => {
    const {ref, inView} = useInView({threshold: 1});

    return (
        <section className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <Title id={'contacts'}>Contacts</Title>
                <form ref={ref} className={`${styles.form} ${inView ? styles.inView : ''}`} id={'contactsForm'}
                      action=".">
                    <Fade duration={600} triggerOnce>
                        <input type={'text'} placeholder={'Name'}/>
                    </Fade>
                    <Fade duration={1400} triggerOnce>
                        <input type={'email'} placeholder={'E-mail'}/>
                    </Fade>
                    <Fade duration={2000} triggerOnce>
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