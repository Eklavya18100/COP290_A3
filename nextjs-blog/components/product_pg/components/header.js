// import React from "react" 

import st from "../../../styles/product_pg/header.module.css"

export default function Header({header_image_url, company_img_url,no_of_reviews,rating,contractor,category}){  
    return (
        <div className={st.header}>
            <div className={st.header_img}>
                <img src = {header_image_url} className={st.img1} /> 
            </div>
            <div className={st.company_img}>
                <img src = {company_img_url} className={st.img2} /> 
            </div>
            <div className={st.contractor_info}>
                <div className={st.contractor_name}>
                    {contractor}
                </div>
                <div className={st.rating_reviews}>
                    <img src = "" />    {/* rating component will come here */} 
                    <div className={st.reviews} >{no_of_reviews}</div>
                </div>
                <div className={st.category}>
                    {category} 
                </div>
            </div>
        </div>
    )
}