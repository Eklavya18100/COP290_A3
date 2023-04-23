import styles from "../../styles/index.module.scss";
import { useEffect, useState } from "react";
import Animation from "../reusable/template/Animation";

export default function Card({
  dataToShow = [],
  backgroundColor = "transparent",
  size = "100px",
  descFontSize = "16px",
  titleFontSize = "32px",
  gap = "1vw",
  padding = "10vh 1vw",
  descColor = "black",
  alignImage = "center",
  height = "auto",
}) {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // * the following function is used because
  // * homepage uses this component twice so the width
  // * of each component must be calculated separately
  const handleResize = () => {
    setContainerWidth(Math.floor(100 / dataLength) - 2);
  };

  const dataLength = dataToShow.length;

  const [containerWidth, setContainerWidth] = useState(
    Math.floor(100 / dataLength) - 2
  );

  return (
    <Animation fadeFromRight>
      <div className={styles.featuresContainer}>
        {dataToShow.map((data) => (
          <div
            className={styles.featureDataContainer}
            style={{
              width: `${containerWidth}%`,
              backgroundColor: backgroundColor,
              gap: gap,
              padding: padding,
              height: height,
            }}
          >
            <img
              src={data.imgUrl}
              className={styles.featureImage}
              style={{ width: size, alignSelf: alignImage }}
            />
            <h1 style={{ fontSize: titleFontSize }}>{data.title}</h1>
            <p style={{ fontSize: descFontSize, color: descColor }}>
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </Animation>
  );
}
