// import React from "react" 
// import logo from "/product_pg/logo.jpg" 
// import search from "../../public/Ellipse\ 65.jpg" 
 
import st from "../../../styles/product_pg/navbar.module.css"

export default function Navbar() { 
    return (
        <header>
            <nav className={st.navbar}>
                
                <img src = "/product_pg/logo.jpg" className={st.nav_img1} /> 
                <div className={st.nav_text}>proVis</div>
                <img src = {"/product_pg/Search_duotone_line.png"} className={st.nav_img2} /> 
                <img src = {"/product_pg/User_box_duotone_line.png"}  className={st.nav_img3} /> 
                <h3 >
                    <ul className={st.nav_list}>
                        <li className={st.login}>Log In</li>
                        <li className={st.signup}>Sign Up</li>
                        <li className={st.about_us}>About Us</li>
                    </ul>
                </h3>
            </nav>
            
            

        </header>
    )
}