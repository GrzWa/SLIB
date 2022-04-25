import { FC } from "react";
import styles from './FormElement.module.css'

interface Props {
    title: string;
    description?: string;
}

export const FormElement: FC<Props> = ({title, description}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <input></input>
        </ div>
    )
}