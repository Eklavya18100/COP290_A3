import React from "react";
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";
import st from "./about.module.scss";
import useTranslation from "next-translate/useTranslation";
import Animation from "../../components/reusable/template/Animation";
import { VscChevronDown } from "@react-icons/all-files/vsc/VscChevronDown";
// import Header from "../components/header";
// import Footer from "../components/reusable/template/Footer.tsx";

export default function About() {
  

  const wwo = [
    {
      title1: "1.Home design ",
      title2: "professionals",
      desc: "We provide access to a vast database of home design professionals, including architects, interior designers, and contractors, which can help homeowners find the right professionals for their home renovation projects.",
      img: "/about/worker.png",
    },
    {
      title1: "2.Communication ",
      title2: "tools",
      desc: "From education savings, retirement planning, life protection to wealth inherited.",
      img: "/about/about2.svg",
    },
    {
      title1: "3.Inspirational ",
      title2: "design ideas",
      desc: "Users can create ideabooks on proVis to save and organize their favorite design ideas, photos, and articles.",
      img: "/about/hand.png",
    },
  
    {
      title1: "4.Mobile ",
      title2: "app",
      desc: "proVis has a mobile app that allows users to access all the platform's features on the go.",
      img: "/about/booking.png",
    },
  ];

  return (
    <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter>
      

      <div className={st.banner}>
        <div className={st.circle} />
        <div className={st.largeHeader} highlightword="Let's">
          {" "}
          design your house
        </div>
        <div className={st.smallHeader}>
        proVis is an online platform that offers a wide range of services related to home design and renovation.We provide a comprehensive platform for homeowners and design professionals, offering a wide range of tools and resources that can help simplify the home renovation process.
        </div>
        <div className={st.contactUs}>
          <p>Contact Us</p>
          <VscChevronDown size={"100px"} />
        </div>
      </div>
      <div className={st.whatWeOffer}>
        <div className={st.header}>What We Offer</div>
        <div className={st.wwo}>
          {wwo.map((offer, index) =>
            index % 2 == 0 ? (
              <Animation>
                <div
                  key={index}
                  className={st.wwo_item}
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className={st.right}>
                    <img width="150px" src={offer.img} />
                  </div>
                  <div className={st.left}>
                    <div className={st.title}>
                      <div className={st.title1} highlightword={offer.title1}>
                        {` ${offer.title2}`}
                      </div>
                    </div>
                    <div className={st.desc} style={{ color: "#000000" }}>
                      {offer.desc}
                    </div>
                  </div>
                </div>
               </Animation>
            ) : (
              <Animation fadeFromRight>
                <div
                  key={index}
                  className={st.wwo_item}
                  style={{
                    backgroundColor: "#c24181",
                    flexDirection: "row-reverse",
                  }}
                >
                  <div className={st.right}>
                    <img width="150px" src={offer.img} />
                  </div>
                  <div className={st.left}>
                    <div className={st.title}>
                      <div className={st.title2}>
                        {`${offer.title1} ${offer.title2}`}
                      </div>
                    </div>
                    <div className={st.desc} style={{ color: "#ffffff" }}>
                      {offer.desc}
                    </div>
                  </div>
                </div>
             </Animation>
            )
          )}
        </div>
      </div>
    
    </PageTemplate>
  );
}
