import Image from "next/image"
import { Col } from "react-bootstrap"
import styles from './MemberCard.module.css'

export const MemberCard = (props: any) => {
    return (
        <Col sm={6} md={6} lg={3} className={styles.col}>
            <div className={styles.img}>
                <Image src={props.member.img} alt='member' />
            </div>
            <div className={styles.bottom}>
                <div className={styles.name}>{props.member.name}</div>
                <div className={styles.title}>{props.member.title}</div>
            </div>
        </Col>
    )
}