import { Col } from 'react-bootstrap';
import styles from './FooterColumn.module.css';

export const FooterColumn = ({ data }: any) => {
  return (
    <>
      <Col className={styles.col}>
        {data?.top?.map((el, index) => (
          <div key={`${el}${index}`} className={styles.top}>
            {el}
          </div>
        ))}
        {data?.bot?.length > 0 ? (
          // data.bot.length > 9 ? (
          //   <Col>
          //     <ul>
          //       {data.bot.map((el) => (
          //         <li key={el}>{el}</li>
          //       ))}
          //       <li></li>
          //     </ul>
          //   </Col>
          // ) : (
          <Col>
            <ul>
              {data.bot.map((el) => (
                <li key={el}>{el}</li>
              ))}
              <li></li>
            </ul>
          </Col>
        ) : // )
        null}
      </Col>
    </>
  );
};
