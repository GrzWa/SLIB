import { Title } from "@/components/common"
import s1 from '@/public/images/sponsors/s1.png'
import s2 from '@/public/images/sponsors/s2.png'
import s3 from '@/public/images/sponsors/s3.png'
import s4 from '@/public/images/sponsors/s4.png'
import s5 from '@/public/images/sponsors/s5.png'
import s6 from '@/public/images/sponsors/s6.png'
import s7 from '@/public/images/sponsors/s7.png'
import s8 from '@/public/images/sponsors/s8.png'
import Image from "next/image"
import { Col } from "react-bootstrap"
import styles from './PartnersSection.module.css'

export const PartnersSection = () => {
    return (
        <>
            <Title title='Partnerzy' />
            <div className={styles.container}>
                <Col className={styles.col}>
                    <Image src={s1} alt='sponsor' />
                </Col>
                <Col className={styles.col}>
                    <Image src={s2} alt='sponsor' />
                </Col>
                <Col className={styles.col}>
                    <Image src={s3} alt='sponsor' />
                </Col>
                <Col className={styles.col}>
                    <Image src={s4} alt='sponsor' />
                </Col>
                <Col className={styles.col}>
                    <Image src={s5} alt='sponsor' />
                </Col>
                <Col className={styles.col}>
                    <Image src={s6} alt='sponsor' />
                </Col>
                <Col className={styles.col}>
                    <Image src={s7} alt='sponsor' />
                </Col>
                <Col className={styles.col}>
                    <Image src={s8} alt='sponsor' />
                </Col>
            </div>
        </>
    )
}