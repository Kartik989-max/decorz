import styles from "./ContainerCard.module.css";

const ContainerCard = () => {
  return (
    <div className={styles.fotter}>
      <div className={styles.fotterTxt}>
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.fotterMainTxtLeft}>
              <div className={styles.decorz}>DECORZ</div>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.frame2}>
                    <div className={styles.noidaOffice}>Noida Office</div>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.gaurCity1Container}>
                    <p className={styles.noidaUttarPradesh}>
                      Gaur City 1, Sector 64,
                    </p>
                    <p className={styles.noidaUttarPradesh}>
                      Noida, Uttar Pradesh,
                    </p>
                    <p className={styles.noidaUttarPradesh}>India</p>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frame3}>
                    <div className={styles.haryanaOffice}>Haryana Office</div>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.unitNo16}>
                    Unit No. 16, 2nd Floor, Supreme Work, Sector 49, Gurugram,
                    Haryana 122018
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frame4}>
            <div className={styles.fotterMainTxtRight}>
              <div className={styles.getInTouchContainer}>
                <p className={styles.getInTouch}>GET IN TOUCH</p>
                <p className={styles.contactOurCreative}>
                  Contact our creative team to explore your personalized design
                  options. Discuss your visions and bring them to life with
                  Alive Studio. We maintain an ambiance of collaboration and
                  trust as we design with our hearts and soul.
                </p>
              </div>
              <div className={styles.icon}>
                <img
                  className={styles.image7Icon}
                  alt=""
                  src="/image-7@2x.png"
                />
                <img
                  className={styles.image7Icon}
                  alt=""
                  src="/image-8@2x.png"
                />
                <img
                  className={styles.image7Icon}
                  alt=""
                  src="/image-9@2x.png"
                />
                <img
                  className={styles.image10Icon}
                  alt=""
                  src="/image-10@2x.png"
                />
                <img
                  className={styles.image7Icon}
                  alt=""
                  src="/image-11@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.fotterMain}>
            @2024 Gulmohar Decorz All Copyright Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
