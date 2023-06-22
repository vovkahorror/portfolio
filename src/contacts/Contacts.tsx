import React from 'react';
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {motion, Variants} from 'framer-motion';


const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Fade direction={'up'} triggerOnce>
                    <Title>Contacts</Title>
                </Fade>
                <form className={styles.form} id={'contactsForm'} action=".">
                    <motion.input
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true, amount: 0}}
                        variants={inputVariantsLeft}
                        type="text" placeholder={'Name'}></motion.input>
                    <motion.input
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true, amount: 0}}
                        variants={inputVariantsRight}
                        type="email" placeholder={'E-mail'}></motion.input>
                    <motion.textarea
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true, amount: 0}}
                        variants={inputVariantsLeft}
                        placeholder={'Your message'}></motion.textarea>
                    {/*<Fade direction={'right'} triggerOnce>
                        <input type="email" placeholder={'E-mail'}/>
                    </Fade>
                    <Fade direction={'left'} triggerOnce>
                        <textarea placeholder={'Your message'}></textarea>
                    </Fade>*/}
                    <Fade direction={'down'} triggerOnce>
                        <button className={styles.button} form={'contactsForm'}>Send message</button>
                    </Fade>
                </form>
            </div>
        </section>
    );
};

const inputVariantsLeft: Variants = {
    offscreen: {
        x: -500,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.8,
        },
    },
};

const inputVariantsRight: Variants = {
    offscreen: {
        x: 500,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.8,
        },
    },
};

export default Contacts;