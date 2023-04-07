import Project from "./project"
import st from "../../../styles/product_pg/main_content.module.css"
import * as Separator from '@radix-ui/react-separator';

export default function MainContent(props){
    let obj = props.obj 
    let project_cards = obj.projects.map( (x) => <Project project = {x} /> ) 

    return(
        
        <div className={st.main_content}>
            <header>
                <nav className={st.nav}>
                    <a href="#aboutus">About Us</a>
                    <a href="#business">Business</a>
                    <a href="#projects">Projects</a>
                    <a href="">Reviews</a>
                </nav>
            </header>

            <Separator.Root className={st.SeparatorRoot} style={{ margin: '15px 0' }} />
            <div className={st.about_us} id = "aboutus">
                <div className={st.heading}>
                    About Us
                </div>
                <div className={st.greybg}>
                    {obj.about_us}
                </div>
                
            </div>

            <Separator.Root className={st.SeparatorRoot} style={{ margin: '15px 0' }} />
            
            <div id = "projects">
                <div className={st.heading}>
                        Projects
                    </div>
                    <p>{obj.projects.length} Projects</p>
                    <div className={st.projects}>
                        {project_cards}
                    </div>
            </div>
            

            <Separator.Root className={st.SeparatorRoot} style={{ margin: '15px 0' }} /> 

            <div id = "business" className={st.business_details}>
            <div className={st.heading}>
                    Business 
            </div>
            <div className={st.business_container}>
                <div className={st.business_item}>
                    <label className={st.business_label}>
                        Business Name
                    </label>
                    <div className={st.business_text}>
                        {obj.business_details.name} 
                    </div>
                </div>
                
                <div className={st.business_item}></div>
                    <label className={st.business_label}>
                        Phone Number
                    </label>
                    <div className={st.business_text}>
                        {obj.business_details.phone_number} 
                    </div>
                </div>
                
                <div className={st.business_item}>
                    <label className={st.business_label}>
                        Website
                    </label>
                    <div className={st.website_link}>
                        <a href={obj.business_details.website} >
                        {obj.business_details.website}
                        </a>
                    </div>
                </div>

                <div className={st.business_item}>
                    <label className={st.business_label}>
                        Address
                    </label>
                    <div className={st.business_text}>
                        {obj.business_details.address} 
                    </div>
                </div>

            </div>

            {/* <Footer />  */}

            {/* <Separator.Root className={st.SeparatorRoot" style={{ margin: '15px 0' }} />  */}

            {/* <div className={st.reviews">

            </div> */}
        </div>
        
    )
}