import {ReactComponent as PreloaderImage} from '../../../assets/icons/preloader.svg';
import styles from './Preloader.module.scss';

export const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <PreloaderImage className={styles.image}/>
        </div>
    );
};