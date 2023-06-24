import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {useInView} from 'react-intersection-observer';


const Contacts = () => {
    const {ref, inView} = useInView();

    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Title>Contacts</Title>
                <form className={styles.form} id={'contactsForm'} action=".">
                    <Fade duration={600} triggerOnce>
                        <input className={`${styles.input} ${inView ? styles.inView : ''}`} placeholder={'Name'}/>
                    </Fade>
                    <Fade duration={1400} triggerOnce>
                        <input className={`${styles.input} ${inView ? styles.inView : ''}`} type="email"
                               placeholder={'E-mail'}/>
                    </Fade>
                    <Fade duration={2000} triggerOnce>
                        <textarea className={`${styles.textarea} ${inView ? styles.inView : ''}`}
                                  placeholder={'Your message'}></textarea>
                    </Fade>
                    <button ref={ref} className={`${styles.button} ${inView ? styles.inView : ''}`}
                            form={'contactsForm'}>
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;