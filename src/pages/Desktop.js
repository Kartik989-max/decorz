import ServicesContainer from "../components/ServicesContainer";
import ContainerCard from "../components/ContainerCard";
import FAQContainer from "../components/FAQContainer";
import SlideComponent from "../components/SlideComponent";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop14}>
      <img
        className={styles.main3Icon}
        alt=""
        src="/6evolve-harrison2-0074-1@2x.png"
      />
      <div className={styles.main2}>
        <div className={styles.main2Txt}>
          <b
            className={styles.aliveStudioBest}
          >{`ALIVE STUDIO: BEST INTERIOR DESIGNING FIRM IN GURGAON & DELHI NCR`}</b>
          <div className={styles.aliveStudioIsContainer}>
            <p
              className={styles.aliveStudioIs}
            >{`Alive Studio is a distinguished name in the architectural and interior design industry that has always worked with a customer-firstapproach. Our team of designers symbolizescreativity and originality combined `}</p>
            <p className={styles.aliveStudioIs}>
              with innovation and elegance. Alive Studio strives to customize
              each project as per your visions and ideas and brings out your
              personality in the space we design. It is in our culture to infuse
              artistry with expertise and deliver only the very best.
            </p>
          </div>
        </div>
        <div className={styles.main2Btn}>
          <div className={styles.bookAConsultant}>BOOK A CONSULTANT</div>
        </div>
      </div>
      <ServicesContainer />
      <img
        className={styles.evolveHarrison3411Icon}
        alt=""
        src="/15evolve-harrison-341-1@2x.png"
      />
      <div className={styles.about}>
        <div className={styles.gulmoharDecorzIsContainer}>
          <p className={styles.aliveStudioIs}>
            Gulmohar Decorz is one of the only Leadership of Energy and
            Efficient Design Accredited Professionals residential designers in
            New York City, and her firm is dedicated to not only creating homes
            that are visually beautiful,
          </p>
          <p className={styles.aliveStudioIs}>
            {" "}
            but also sustainable and healthy.Many times “clean” living is
            associated with the color white, yet we focus on bringing in color
            safely with natural dyes and water based finishes. When working with
            our clients to create sustainable interior design
          </p>
          <p
            className={styles.aliveStudioIs}
          >{`, we determine what is the best way to approach the design to be environmentally safe yet still highly refined and beautiful.If we decide to create a custom piece, `}</p>
          <p
            className={styles.aliveStudioIs}
          >{`we make sure it is made of nontoxic materials and sustainable to the planet. We bring in antique pieces that are high quality and beautiful to reduce waste and reuse. We design for life, whether that be extra durable fabrics that `}</p>
        </div>
        <div className={styles.aboutBtn}>
          <div className={styles.aboutUs}>About Us</div>
        </div>
      </div>
      <ContainerCard />
      <div className={styles.architect}>
        <div className={styles.architectInner}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-14@2x.png"
          />
        </div>
        <div className={styles.architectAnupamSinghContainer}>
          <p className={styles.aliveStudioIs}>
            <span className={styles.architectAn}>ARCHITECT AN</span>
            <span className={styles.architectAn}>UPAM SINGH</span>
          </p>
          <p className={styles.principalDesigner}>Principal Designer</p>
          <p
            className={styles.principalDesigner}
          >{`Architecture is yet another vital form of art and Alive Studio carefully integrates it into its bespoke interior designing services. We are a team of talented artists, painters and sculptors who look to design your space as per your preference, keeping the cultural relevance of the place intact and bringing out the exclusive characteristics of the landscape. Alive Studio is all about personalisation. We strive to build a relationship with our clients, as only then can we imagine on your behalf and deliver art that will interact with you. Comfort and luxury are key elements of our interior designing services. `}</p>
        </div>
      </div>
      <div className={styles.main5}>
        <div className={styles.withABackgroundContainer}>
          <span className={styles.withABackgroundContainer1}>
            <p className={styles.aliveStudioIs}>
              With a background in art history and architecture, combined with
              an undying love for travel and culture, I’m able to take even a
              contemporary white box apartment in the middle of Manhattan and
              transform it into a richly layered jewel box.
            </p>
            <p className={styles.aliveStudioIs}>
              {" "}
              What starts as a thought of grey turns into highly detailed
              palettes of color inspired by the space, the clients, and the
              future stories
            </p>
            <p
              className={styles.aliveStudioIs}
            >{`When putting the design together, I take the inspiration I’ve seen from around the world, such as a rich blue plaster wall in Morocco `}</p>
          </span>
        </div>
      </div>
      <FAQContainer />
      <SlideComponent
        slideComponent4Width="90.44rem"
        slideComponent4Height="46.38rem"
        slideComponent4Position="absolute"
        slideComponent4Top="1.44rem"
        slideComponent4Left="-0.25rem"
        evolveHarrison200741IconTop="0rem"
        evolveHarrison200741IconLeft="197.47rem"
        evolveHarrison200741IconWidth="90.42rem"
        evolveHarrison200741IconHeight="44.5rem"
        evolveHarrison200745IconTop="0rem"
        evolveHarrison200745IconLeft="296.21rem"
        evolveHarrison200745IconWidth="90.42rem"
        evolveHarrison200745IconHeight="44.5rem"
        evolveHarrison200743IconTop="0rem"
        evolveHarrison200743IconLeft="0rem"
        evolveHarrison200743IconWidth="90.42rem"
        evolveHarrison200743IconHeight="44.5rem"
        evolveHarrison200742IconTop="1.88rem"
        evolveHarrison200742IconLeft="98.74rem"
        evolveHarrison200742IconWidth="90.42rem"
        evolveHarrison200742IconHeight="44.5rem"
      />
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <b className={styles.decorz}> DECORZ</b>
          <div className={styles.frame}>
            <div className={styles.frame1}>
              <div className={styles.home}>HOME</div>
              <div className={styles.gallery}>GALLERY</div>
            </div>
            <div className={styles.frame2}>
              <div className={styles.services}>SERVICES</div>
              <div className={styles.contact}>CONTACT</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.frame3}>
          <img
            className={styles.evolveAthertonbrookline251Icon}
            alt=""
            src="/evolve-athertonbrookline25-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
