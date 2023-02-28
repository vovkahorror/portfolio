import React, {ReactNode} from 'react';
import styles from './Title.module.css';

export const Title = ({children}: TitlePropsType) => {
    return (
        <div className={styles.title}>
            <h2>{children}</h2>
        </div>
    );
};

type TitlePropsType = {
    children: ReactNode
}