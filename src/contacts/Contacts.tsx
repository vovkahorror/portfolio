import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';


const Contacts = () => {
    return (
        <div className={styles.contactsBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.form} id={'contactsForm'} action="#">
                    <input type="text" placeholder={'Type your text...'}/>
                    <input type="text" placeholder={'Type your text...'}/>
                    <textarea  placeholder={'Type your message...'}></textarea>
                </form>
                <button className={styles.button} form={'contactsForm'}>Submit</button>
            </div>
        </div>
    );
};

export default Contacts;