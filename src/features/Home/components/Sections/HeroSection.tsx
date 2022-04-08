import styles from './HeroSection.module.css';
export const HeroSection = () => {
  return (
    <>
      <div
        className="card border-0 bg-transparent"
        style={{ width: `22rem`, marginTop: `12em` }}
      >
        <div className="card-body">
          <h5 className="card-title fw-bold fs-2">Lorem ipsum</h5>
          <h6 className="card-subtitle mb-2 fs-2 fw-light">
            iusto odio dignissimos ducimus qui blanditiis
          </h6>
          <p className="card-text fw-lighter">
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
