import Head from "next/head";
import React from "react";
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";
import st from "../styles/Home.module.css";
import { useRouter } from "next/router";
// import home_pg_pic from "../public/home_pg/home_pg_pic.jpg" 

export default function Home() {
  return (
    <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter>
      <div className={st.container}>

         <div className={st.box1}>
              Building a home has never been easier. 
         </div>

         <div className={st.box2}>
              The best engineers, designers and architects are a click away.
         </div>

         <div className={st.box3} onClick={() => (console.log("link to be added"))}>
              Start your journey  { /* (a button to take to the search pg) */ }
         </div>

         <div className={st.box4}>
              <img src= {"/home_pg/home_pg_pic.jpg"} className={st.img} /> 
         </div>



      </div>

    </PageTemplate>
    
  )
}
