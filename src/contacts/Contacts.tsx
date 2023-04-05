import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from '../common/components/title/Title';


const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title>Contacts</Title>
                <form className={styles.form} id={'contactsForm'} action="#">
                    <input type="text" placeholder={'Type your text...'}/>
                    <input type="text" placeholder={'Type your text...'}/>
                    <textarea placeholder={'Type your message...'}></textarea>
                </form>
                <button className={styles.button} form={'contactsForm'}>Submit</button>
            </div>
        </section>
    );
};

export default Contacts;