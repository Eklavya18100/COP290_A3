// import React from "react" 
import st from "../../../styles/listing_pg/listing_box.module.css"

export default function Listing_Box() { 
    return (
        <div className= {st.listing_box}>
            <div className={st.box1}>Get matched with Local Professionals</div>
            <div className={st.box2}>We’ll put you in touch with pros who can help</div>
        </div>
    )
}