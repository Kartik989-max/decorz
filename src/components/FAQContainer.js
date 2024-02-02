import styles from "./FAQContainer.module.css";

const FAQContainer = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.faqTxt}>
        <div className={styles.faqTxt1}>
          <div className={styles.frame}>
            <div className={styles.whatServicesCanContainer}>
              <span className={styles.whatServicesCanContainer1}>
                <p className={styles.whatServicesCan}>
                  What Services Can I Expect From Interior Designers Firm?
                </p>
                <p className={styles.whatServicesCan}>&nbsp;</p>
                <p className={styles.interiorDesignersAimToPlan}>
                  <span className={styles.interiorDesignersAim}>
                    Interior designers aim t
                  </span>
                  <span className={styles.interiorDesignersAim}>
                    o plan and imp
                  </span>
                  <span className={styles.interiorDesignersAim}>
                    rove the interiors of a space. If you decide to go with an
                    interior desig
                  </span>
                  <span className={styles.interiorDesignersAim}>
                    n firm in the Delhi NCR area.
                  </span>
                </p>
              </span>
            </div>
            <div className={styles.whatIsTheContainer}>
              <span className={styles.whatServicesCanContainer1}>
                <p className={styles.interiorDesignersAimToPlan}>
                  <span
                    className={styles.interiorDesignersAim}
                  >{`What Is The Normal Budget For Interior `}</span>
                  <span className={styles.interiorDesignersAim}>Design?</span>
                </p>
                <p className={styles.interiorDesignersAimToPlan}>
                  <span className={styles.interiorDesignersAim}>
                    Again, it depends on the scope and scal
                  </span>
                  <span className={styles.interiorDesignersAim}>
                    e of a particular project. Your typical project cost will
                    depend on the size of the area, designer costs, material
                    costs, labour charges
                  </span>
                </p>
              </span>
            </div>
          </div>
          <div className={styles.whatServicesCanContainer2}>
            <span className={styles.whatServicesCanContainer1}>
              <p className={styles.whatServicesCan}>
                What Services Can I Expect From Interior Designers Firm?
              </p>
              <p className={styles.whatServicesCan}>&nbsp;</p>
              <p className={styles.interiorDesignersAimToPlan}>
                <span className={styles.interiorDesignersAim}>
                  Interior designers aim t
                </span>
                <span className={styles.interiorDesignersAim}>o</span>
                <span className={styles.interiorDesignersAim}>
                  {" "}
                  plan and improve the interiors of a space.
                </span>
              </p>
              <p className={styles.interiorDesignersAimToPlan}>
                <span className={styles.interiorDesignersAim}>If you d</span>
                <span className={styles.interiorDesignersAim}>
                  ecide to go with an interior design firm in the Delhi NCR
                </span>
              </p>
              <p className={styles.interiorDesignersAimToPlan}>
                <span className={styles.interiorDesignersAim}>area, you</span>
                <span
                  className={styles.interiorDesignersAim}
                >{`’ll discuss internal plans, `}</span>
                <span className={styles.interiorDesignersAim}>
                  budget, materials
                </span>
              </p>
            </span>
          </div>
        </div>
        <b className={styles.faqHead}>FAQS</b>
      </div>
    </div>
  );
};

export default FAQContainer;
