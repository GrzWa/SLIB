import { Title } from "@/components/common"
import { MemberCard } from "@/components/MemberCard"
import { Container, Row } from "react-bootstrap"
import os1 from '@/public/images/members/os1.png'
import os2 from '@/public/images/members/os2.png'
import os3 from '@/public/images/members/os3.png'
import os4 from '@/public/images/members/os4.png'
import styles from './MembersSection.module.css'
import arrow from '@/public/images/icons/arrow_left.svg'
import Image from "next/image"

export const MembersSection = () => {
    const mem1 = {name: 'Przemysław Hankus', title: 'Prezes Zarządu', img: os1}
    const mem2 = {name: 'Wojciech Walczak', title: 'Wiceprezes Zarządu', img: os2}
    const mem3 = {name: 'Radosław Maziarka', title: 'Przewodniczący komisji rewizyjnej', img: os3}
    const mem4 = {name: 'Marek Granowicz', title: 'Koordynator oddziału wrocławskiego', img: os4}
    return (
        <>
            <Title title='Nasi członkowie'/>
            <Container>
                <Row className={styles.row}>
                    <MemberCard member={mem1}/>
                    <MemberCard member={mem2}/>
                    <MemberCard member={mem3}/>
                    <MemberCard member={mem4}/>
                </Row>
            </Container>
            <div className={styles.link}>Poznaj wszystkich <Image src={arrow} alt='Poznaj wszystkich' className={styles.img}/></div>
        </>
    )
}