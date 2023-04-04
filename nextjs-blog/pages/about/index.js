import React from "react";
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";
import st from "./about.module.scss";
import useTranslation from "next-translate/useTranslation";
// import Animation from "../../components/reusable/template/Animation";
import { VscChevronDown } from "@react-icons/all-files/vsc/VscChevronDown";
// import Header from "../components/header";
// import Footer from "../components/reusable/template/Footer.tsx";

export default function About() {
  const { t } = useTranslation("about");

  const wwo = [
    {
      title1: "1.Compare",
      title2: "Insurance Products",
      desc: "In term of insurance coverage terms, premiums, and various KPIs.",
      img: "/web/about/about1.svg",
    },
    {
      title1: "2.Product",
      title2: "Illustration",
      desc: "Instant real time quotation and interactive value throughout the insurance period.",
      img: "/web/about/about2.svg",
    },
    {
      title1: "3.Financial",
      title2: "Planning",
      desc: "From education savings, retirement planning, life protection to wealth inherited.",
      img: "/web/about/about3.svg",
    },
    {
      title1: "4.AI Driven",
      title2: "Insurance Analysis",
      desc: "Find out the best insurance solution to cope with the common health diseases including cancer, heart attract, stroke, diabetes etc.",
      img: "/web/about/about4.png",
    },
  ];

  return (
    <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter>
      {/* return <div> */}

      {/* <div className={st.mobileCircle} /> */}

      {/* <div className={st.banner}>
        <div className={st.circle}>{"Let's"}</div>
        <div className={st.headers}>
          <div className={st.largeHeader}>Change How We Manage Insurance</div>
          <div className={st.smallHeader}>
            iProtect is a digital online platform that provides AI-driven
            insurance solutions. We help to analyze more than 100 hottest
            insurance products from over 30 insurance companies in Hong Kong
            covering savings insurance, medical insurance, critical illness
            insurance, retirement annuity, and others.
          </div>
          <div
            className={st.contactUs}
            // onClick={() => {
            //   window.scrollTo(0, document.body.scrollHeight);
            // }}
          >
            <p>Contact Us</p>
            <VscChevronDown size={"100px"} />
          </div>
        </div>
      </div> */}

      <div className={st.banner}>
        <div className={st.circle} />
        <div className={st.largeHeader} highlightword="Let's">
          {" "}
          Change How We Manage Insurance
        </div>
        <div className={st.smallHeader}>
          iProtect is a digital online platform that provides AI-driven
          insurance solutions. We help to analyze more than 100 hottest
          insurance products from over 30 insurance companies in Hong Kong
          covering savings insurance, medical insurance, critical illness
          insurance, retirement annuity, and others.
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
              // <Animation>
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
              // </Animation>
            ) : (
              // <Animation fadeFromRight>
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
              // </Animation>
            )
          )}
        </div>
      </div>
      {/* <Footer /> */}
      {/* </div> */}
    </PageTemplate>
  );
}
