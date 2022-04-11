import { Col, Container, Row } from 'react-bootstrap';
import { MenuItem } from './MenuItem';

export const MenuItems = ({ data }: any) => {
  // console.log(data);
  return (
    <>
      <Container style={{ padding: `0` }}>
        <Row style={{ margin: `0` }}>
          {data?.map((props: any) => (
            <Col key={props} lg={1} style={{ minWidth: `6.5vw`, padding: `0` }}>
              <MenuItem key={props} item={props} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
