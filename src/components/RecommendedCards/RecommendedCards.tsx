import { Col, Container, Row } from "react-bootstrap"
import rec1 from '@/public/images/img/rec1.png'
import rec2 from '@/public/images/img/rec2.png'
import rec3 from '@/public/images/img/rec3.png'
import rec4 from '@/public/images/img/rec4.png'
import Image from "next/image"
import styles from './RecommendedCards.module.css'

export const RecommendedCards = () => {
    return (
        <>
            <Container className={styles.container}>
                <Row>
                    <Col sm={6} md={3} className={styles.down}>
                        <Image src={rec1} alt='img'/>
                    </Col>
                    <Col sm={6} md={3} className={styles.up}>
                        <Image src={rec3} alt='img'/>
                    </Col>
                    <Col sm={6} md={3}  className={styles.down}>
                        <Image src={rec2} alt='img'/>
                    </Col>
                    <Col sm={6} md={3}  className={styles.up}>
                        <Image src={rec4} alt='img' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}