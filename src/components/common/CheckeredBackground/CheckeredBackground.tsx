import Image from 'next/image';
import checkered from '@/public/images/backgrounds/checkered.svg';
import styles from './CheckeredBackground.module.css'

export const CheckeredBackground = () => {
    return (<div className={styles.container}>
        <div className={styles.checkered}>
            <Image src={checkered} alt="background" />
        </div>
        </div>)
}