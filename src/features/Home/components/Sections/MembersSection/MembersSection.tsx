import { Title } from '@/components/common';
import { MemberCard } from '@/components/MemberCard';
import { Container, Row } from 'react-bootstrap';
// import os1 from '@/public/images/members/os1.png';
// import os2 from '@/public/images/members/os2.png';
// import os3 from '@/public/images/members/os3.png';
// import os4 from '@/public/images/members/os4.png';
import styles from './MembersSection.module.css';
import arrow from '@/public/images/icons/arrow_left.svg';
import Image from 'next/image';

export const MembersSection = ({
  data: { member1, member2, member3, member4 },
}) => {
  return (
    <>
      <Title title="Nasi członkowie" />
      <Container>
        <Row className={styles.row}>
          <MemberCard member={member1} />
          <MemberCard member={member2} />
          <MemberCard member={member3} />
          <MemberCard member={member4} />
        </Row>
      </Container>
      <div className={styles.link}>
        Poznaj wszystkich{` `}
        <Image src={arrow} alt="Poznaj wszystkich" className={styles.img} />
      </div>
    </>
  );
};
