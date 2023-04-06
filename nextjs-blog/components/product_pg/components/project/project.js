import st from "./project.module.css"

export default function Project(props){
    let obj = props.project 

    // obj = {
    //     name : ""
    //     imgs : ["urls"] 
    // }
    let el = ""
    if (!obj.imgs || obj.imgs.length > 1) 
                 {
                    el = ` ${obj.imgs.length} Images` 
                }
    else {
                   el = ` ${obj.imgs.length} Image `
    }
    let fallback = "http://beepeers.com/assets/images/commerces/default-image.jpg" ; 
    return (
        <div className={st.project}>
            <img src = {!obj.imgs ? fallback : (obj.imgs)[0] } /> 
            <div className={st.project_name}>
                {obj.name} < br/>
                {el}  
            </div>
        </div>
    )
}