// import logo from './logo.svg';
import st from "./App.module.css";
import project_data from "./data/projects";

// import React from "react"
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Request_Btn from "./components/request_btn/request_btn";
import MainContent from "./components/main-content/main-content";

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
  let url1 =
    "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg";
  let url2 =
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png";

  let business_details = {
    name: "Aaveg",
    address: "B250, MG Road, New Manglapuri Mehrauli- Gurgaon Road South Delhi",
    phone_number: 9205231951,
    website: "www.treac.in",
  };

  let obj = {
    about_us:
      "TR Engineer and Contractor. Construction and renovation services. Www.trengineer.com",
    projects: project_data,
    business_details: business_details,
  };

  return (
    <div>
      <Navbar className={st.navbar} />
      <div className={st.container}>
        <Header
          header_image_url={url1}
          company_img_url={url2}
          no_of_reviews={162}
          rating="4"
          contractor="Aaveg"
          category="Civil Engineers & Contractors"
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
          />
        </div>

        <MainContent obj={obj} className={st.main_content} />
      </div>
    </div>
  );
}

export default App;
