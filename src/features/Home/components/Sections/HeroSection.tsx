import Image from 'next/image';
import styles from './HeroSection.module.css';
import Murray_Rothbard from '../../../../../public/images/backgrounds/Murray_Rothbard.png';
import checkered from '../../../../../public/images/backgrounds/checkered.svg';

export const HeroSection = () => {
  return (
    <>
      <div className={styles.murray}>
        <Image src={Murray_Rothbard} alt="Murray Rothbard" />
      </div>
      <div className={styles.checkered}>
        <Image src={checkered} alt="background" />
      </div>
      <div className={`card border-0 bg-transparent ${styles[`hero-card`]}`}>
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum</h5>
          <h6 className="card-subtitle">
            iusto odio dignissimos ducimus qui blanditiis
          </h6>
          <p className="card-text">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus.
          </p>
          <button
            type="button"
            className={`btn rounded-pill me-4 ${styles[`custom-btn`]} ${
              styles[`ylw`]
            }`}
          >
            <a href="#" className="card-link text-dark text-decoration-none">
              Consequatur
            </a>
          </button>
          <button
            type="button"
            className={`btn btn-light btn-outline-dark rounded-pill ${
              styles[`custom-btn`]
            }`}
            style={{ width: `140px` }}
          >
            <a href="#" className="card-link text-dark text-decoration-none">
              Similique sunt
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
