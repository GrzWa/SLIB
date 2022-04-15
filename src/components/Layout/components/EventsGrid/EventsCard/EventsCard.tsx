import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import styles from './EventsCard.module.css'

export const EventsCard = (props) => {
    return (
    <Container className={styles.container}>
    <Row>
        <Col className={styles.col}>
        <Image src={props.image} alt='obrazek'/>
        </Col>
    </Row>
    <Row>
        <Col className={styles.col}>
            hello
        </Col>
    </Row>
    </Container>
    )
}