import { Col, Row } from 'react-bootstrap';
import styles from './BranchesMap.module.css';
import map from '@/public/images/img/snazzy-image.png';
import Image from 'next/image';
import GoogleMapReact from 'google-map-react';

export const BranchesMap = ({ data: { branches } }) => {
  return (
    <>
      <Row>
        <Col sm={4}>
          <ol className={styles.list}>
            {branches?.map((branch) => (
              <li key={branch}>{branch}</li>
            ))}
          </ol>
        </Col>
        <Col sm={8}>
          {/* <Image src={map} alt="" layout="responsive" /> */}
          <GoogleMapReact
            defaultCenter={{ lat: 51.9323504, lng: 16.8869548 }}
            defaultZoom={11}
          ></GoogleMapReact>
        </Col>
      </Row>
    </>
  );
};
