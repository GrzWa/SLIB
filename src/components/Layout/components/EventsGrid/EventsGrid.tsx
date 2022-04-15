import { Col, Container, Row } from "react-bootstrap"
import styles from './EventsGrid.module.css'
import stock1 from '@/public/images/img/stock1.png'
import stock2 from '@/public/images/img/stock2.png'
import stock3 from '@/public/images/img/stock3.png'
import stock4 from '@/public/images/img/stock4.png'
import Image from "next/image"
import { EventsCard } from "./EventsCard"

export const EventsGrid = () => {
    const text1 = ['20 marca | 15:00', 'At vero eos et accusamus et iusto odio dignissimos']
    const text2 = ['5 kwietnia | 12:00', 'Nam libero tempore']
    const text3 = ['3 maja | 12:00', 'Dolore magnam aliquam quaerat voluptatem']
    const text4 = ['6 maja | 10:30', 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae']

    return (<>
    <Container>
        <Row>
            <Col sm={12} md={6} lg={4} xl={3} className={styles.col}>
                <EventsCard image={stock1} text={text1} />
            </Col>
            <Col md={6} lg={4} xl={3} className={`${styles.col} d-none d-md-inline`}>
            <EventsCard image={stock2} text={text2} />
            </Col>
            <Col lg={4} xl={3} className={`${styles.col} d-none d-lg-inline`}>
            <EventsCard image={stock3} text={text3} />
            </Col>
            <Col xl={3} className={`${styles.col} ${styles.forth} d-none d-xl-inline`}>
            <EventsCard image={stock4} text={text4} />
            </Col>
        </Row>
    </Container>
    </>)
}