import st from "../../../styles/product_pg/project.module.css"

export default function Project(props){
    let obj = props.project 
    // assume obj.img is img url 
    // obj = {
    //     name : ""
    //     imgs : ["urls"] 
    // }
    let el = "1 Image"
    // if (!obj.imgs || obj.imgs.length > 1) 
    //              {
    //                 el = ` ${obj.imgs.length} Images` 
    //             }
    // else {
    //                el = ` ${obj.imgs.length} Image `
    // }
    let fallback = "http://beepeers.com/assets/images/commerces/default-image.jpg" ; 
    return (
        <div className={st.project}>
            <img src = {(obj.img)} /> 
            <div className={st.project_name}>
                {obj.name} < br/>
                {el}  
            </div>
        </div>
    )
}