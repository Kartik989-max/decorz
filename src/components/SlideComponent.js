import { useMemo } from "react";
import styles from "./SlideComponent.module.css";

const SlideComponent = ({
  slideComponent4Width,
  slideComponent4Height,
  slideComponent4Position,
  slideComponent4Top,
  slideComponent4Left,
  evolveHarrison200741IconTop,
  evolveHarrison200741IconLeft,
  evolveHarrison200741IconWidth,
  evolveHarrison200741IconHeight,
  evolveHarrison200745IconTop,
  evolveHarrison200745IconLeft,
  evolveHarrison200745IconWidth,
  evolveHarrison200745IconHeight,
  evolveHarrison200743IconTop,
  evolveHarrison200743IconLeft,
  evolveHarrison200743IconWidth,
  evolveHarrison200743IconHeight,
  evolveHarrison200742IconTop,
  evolveHarrison200742IconLeft,
  evolveHarrison200742IconWidth,
  evolveHarrison200742IconHeight,
}) => {
  const slideComponent4Style = useMemo(() => {
    return {
      width: slideComponent4Width,
      height: slideComponent4Height,
      position: slideComponent4Position,
      top: slideComponent4Top,
      left: slideComponent4Left,
    };
  }, [
    slideComponent4Width,
    slideComponent4Height,
    slideComponent4Position,
    slideComponent4Top,
    slideComponent4Left,
  ]);

  const evolveHarrison200741IconStyle = useMemo(() => {
    return {
      top: evolveHarrison200741IconTop,
      left: evolveHarrison200741IconLeft,
      width: evolveHarrison200741IconWidth,
      height: evolveHarrison200741IconHeight,
    };
  }, [
    evolveHarrison200741IconTop,
    evolveHarrison200741IconLeft,
    evolveHarrison200741IconWidth,
    evolveHarrison200741IconHeight,
  ]);

  const evolveHarrison200745IconStyle = useMemo(() => {
    return {
      top: evolveHarrison200745IconTop,
      left: evolveHarrison200745IconLeft,
      width: evolveHarrison200745IconWidth,
      height: evolveHarrison200745IconHeight,
    };
  }, [
    evolveHarrison200745IconTop,
    evolveHarrison200745IconLeft,
    evolveHarrison200745IconWidth,
    evolveHarrison200745IconHeight,
  ]);

  const evolveHarrison200743IconStyle = useMemo(() => {
    return {
      top: evolveHarrison200743IconTop,
      left: evolveHarrison200743IconLeft,
      width: evolveHarrison200743IconWidth,
      height: evolveHarrison200743IconHeight,
    };
  }, [
    evolveHarrison200743IconTop,
    evolveHarrison200743IconLeft,
    evolveHarrison200743IconWidth,
    evolveHarrison200743IconHeight,
  ]);

  const evolveHarrison200742IconStyle = useMemo(() => {
    return {
      top: evolveHarrison200742IconTop,
      left: evolveHarrison200742IconLeft,
      width: evolveHarrison200742IconWidth,
      height: evolveHarrison200742IconHeight,
    };
  }, [
    evolveHarrison200742IconTop,
    evolveHarrison200742IconLeft,
    evolveHarrison200742IconWidth,
    evolveHarrison200742IconHeight,
  ]);

  return (
    <div className={styles.slideComponent4} style={slideComponent4Style}>
      <img
        className={styles.evolveHarrison200741Icon}
        alt=""
        src="/6evolve-harrison2-0074-11@2x.png"
        style={evolveHarrison200741IconStyle}
      />
      <img
        className={styles.evolveHarrison200745Icon}
        alt=""
        src="/6evolve-harrison2-0074-5@2x.png"
        style={evolveHarrison200745IconStyle}
      />
      <img
        className={styles.evolveHarrison200743Icon}
        alt=""
        src="/6evolve-harrison2-0074-3@2x.png"
        style={evolveHarrison200743IconStyle}
      />
      <img
        className={styles.evolveHarrison200742Icon}
        alt=""
        src="/6evolve-harrison2-0074-2@2x.png"
        style={evolveHarrison200742IconStyle}
      />
    </div>
  );
};

export default SlideComponent;
