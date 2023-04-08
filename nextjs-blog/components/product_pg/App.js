// import logo from './logo.svg';
import React from "react"
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";
import st from "../../styles/product_pg/App.module.css"
import project_data from "./data/projects";
import { useRouter } from 'next/router'
import config from "../../config";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react"
import Navbar from "./components/navbar";
import Header from "./components/header";
import Request_Btn from "./components/request_btn";
import MainContent from "./components/main-content";

// id : 1 ,
//         company_name: "Influitive",
//         category: "Civil Engineers & Contractors",
//         location : "East Delhi",
//         company_img_url : "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png",
//         product_img_url : "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
//         contractor_name:"Aaveg",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
//         rating : "4"

function App() {
  let router = useRouter() 
  // let url1 =
  //   "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg";
  // let url2 =
  //   "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png";

  


  let slug = router.query 
  let url1 = slug.product_img_url 
  let url2 = slug.company_img_url 
  
  const jwt = useSelector((state) => state.storage.jwt);

  const { apiUrl } = config;

  let [profileState, SetState] = React.useState({
    p_uid : "", 
    projects : [{ id : "", project_name : "", project_address : "", project_img_url : ""}],
    business: {id : "", contractor_id : "", website_link : "", address : "",},
    aboutus : {is : "", description : ""}
  })

  useEffect( () => {
    fetch(`${apiUrl}/api/product_profiles/${slug.id}`, {
      method : 'GET', 
      headers: {
        "Content-Type": "application/json" 
          // Authorization: `Bearer ${jwt}`,
      },
    }).then((response) => response.json().then(
      (data) => {
        SetState(data) ; 
      }
    )).catch((err) => console.error(err));
  }, [])

  function genobj(data){
    let about_us = data.about_us 
    let business_details = { name : slug.contractor_name, address : data.business.address, website : data.business.website_link}
    let project_data = data.projects.map((x) => { return {name : x.project_name, img : x.project_img_url} } )
    return {about_us, business_details, projects : project_data} 
  }
  // let business_details = {
  //   name: "Aaveg",
  //   address: "B250, MG Road, New Manglapuri Mehrauli- Gurgaon Road South Delhi",
  //   phone_number: 9205231951,
  //   website: "www.treac.in",
  // };

  // let obj = {
  //   about_us:
  //     "TR Engineer and Contractor. Construction and renovation services. Www.trengineer.com",
  //   projects: project_data,
  //   business_details: business_details,
  // };

  return (
    <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter>
    <div>
      
      <div className={st.container}>
        <Header
          header_image_url={url1}
          company_img_url={url2}
          no_of_reviews={162}
          rating="4"
          contractor= {slug.contractor_name} 
          category= {slug.category}
          className={st.header}
        />
        <div className={st.sticky}>
          <Request_Btn
            btn_text="Make a Request"
            modal_header="Make a Request"
            modal_description="Send a message to this pro to meet them"
            label="Message"
            modal_btn_text="Send"
            className={st.request_btn}
            p_uid = {slug.id} 
          />
        </div>

        <MainContent obj={genobj(profileState)} className={st.main_content} />
      </div>
    </div>
  </PageTemplate>
  );
}

export default App;
