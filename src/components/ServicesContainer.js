import styles from "./ServicesContainer.module.css";

const ServicesContainer = () => {
  return (
    <div className={styles.services}>
      <div className={styles.serviceTxt}>
        <b className={styles.ourServices}>OUR SERVICES</b>
        <div className={styles.weKnowYou}>
          We know you are unique, and we make sure your home is too!
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.architecture}>
          <img
            className={styles.j7a63511Icon}
            alt=""
            src="/-j7a6351-1@2x.png"
          />
          <div className={styles.archTxt}>
            <div className={styles.architecture1}>ARCHITECTURE</div>
            <div className={styles.architecturalExcellenceRuns}>
              Architectural excellence runs in our DNA. Get customised
              architectural designs for your homes,offices, penthouses or
              hotels. Bespoke and luxurious.
            </div>
          </div>
        </div>
        <div className={styles.interior}>
          <img
            className={styles.j7a62682Icon}
            alt=""
            src="/-j7a6268-2@2x.png"
          />
          <div className={styles.intTxt}>
            <div className={styles.interior1}>INTERIOR</div>
            <div className={styles.architecturalExcellenceRuns1}>
              Architectural excellence runs in our DNA. Get customised
              architectural designs
            </div>
          </div>
        </div>
      </div>
      <div className={styles.serviceBtn}>
        <div className={styles.bookAConsultant}>BOOK A CONSULTANT</div>
      </div>
    </div>
  );
};

export default ServicesContainer;
