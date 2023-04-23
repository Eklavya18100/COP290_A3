import Link from "next/link";
import React from "react";
import styles from "../../styles/index.module.scss";
import Animation from "../reusable/template/Animation";

type threeItemContainerProps = {
  dataToShow: {
    title: string;
    data: {
      imgUrl: string;
      desc: string;
    }[];
    mainImageUrl: string;
  };
  reverseOrder?: boolean;
  link?: string;
};

export default function ThreeItemContainer({
  dataToShow,
  reverseOrder,
  link
}: threeItemContainerProps) {
  return (
    <div>
      <h1
        className={styles.tItemTitle}
        style={{ textAlign: reverseOrder ? "right" : "left" }}
      >
        {dataToShow.title}
      </h1>
      <div
        className={styles.tItemContainer}
        style={reverseOrder ? { flexDirection: "row-reverse" } : {}}
      >
        <div>
          {dataToShow.data.map((data, index) => (
            <Animation
              fadeFromRight={reverseOrder && true}
              delay={index * 0.25}
            >
              <div
                className={styles.tItemDataCont}
                style={reverseOrder ? { flexDirection: "row-reverse" } : {}}
              >
                <img src={data.imgUrl} className={styles.tItemDataImage} />
                <p className={styles.tItemDataText}>{data.desc}</p>
              </div>
            </Animation>
          ))}
          {/* // ? maybe can add some localization later */}
          <Link href={link}><p className={styles.tItemBtn}>Learn More</p></Link>
        </div>
        <div style={{ flexDirection: reverseOrder ? "row-reverse" : "row" }}>
          <img src={dataToShow.mainImageUrl} className={styles.tItemImage} />
        </div>
      </div>
    </div>
  );
}

ThreeItemContainer.defaultProps = {
  dataToShow: [],
  reverseOrder: false,
};
