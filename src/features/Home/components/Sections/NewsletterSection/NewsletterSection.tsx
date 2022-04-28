import { Button } from '@/components/Button'
import { Col, Container, FormCheck, Row } from 'react-bootstrap'
import styles from './NewsletterSection.module.css'

export const NewsletterSection = () => {
    return (
        <div className={styles.section}>
            <div className={styles.background}/>
            <Container className={styles.container}>
                <Row>
                    <Col className={styles.text} md={12} lg={4}>
                    <div>Bądź na bieżąco<br />z działalnością<br />
                    <span>Stowarzyszenia<br />Libertariańskiego!</span></div>
                    Dołącz do naszego Newslettera
                    </Col>

                    <Col className={styles.form}>
                        <Row>
                            <Col sm={6}>
                                <input placeholder='Imię'/>   
                            </Col>
                            <Col sm={6}>
                                <input placeholder='Nazwisko'/>   
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <input placeholder='Adres email'/>   
                            </Col>
                        </Row>
                        <Row>
                            <div className={styles.zgoda}>Wyrażam zgodę na otrzymywanie wiadomości email od Stowarzyszenia Libertariańskiego</div>
                        </Row>
                        <Row>
                            <div>
                            <Button variant='black'>Zapisz się</Button>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </ div>
    )
}