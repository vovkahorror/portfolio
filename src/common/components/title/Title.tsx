import React, {FC, ReactNode} from 'react';
import styles from './Title.module.css';

const Title: FC<TitlePropsType> = ({children}) => {
    return (
        <div className={styles.title}>
            <h2>{children}</h2>
        </div>
    );
};

type TitlePropsType = {
    children: ReactNode
}

export default Title;