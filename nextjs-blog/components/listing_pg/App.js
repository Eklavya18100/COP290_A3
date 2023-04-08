
import React , {useEffect} from "react";
import { useRouter } from 'next/router'

import config from "../../config" 
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";
import Navbar from "./components/navbar"
import Listing_Box  from "./components/listing_box";
import Card  from "./components/card";
import products from "./data/products"
import Dropdown from "./components/dropdown"
import st from "../../styles/listing_pg/app.module.css"
import cross from "../../public/listing_pg/cross.png" 

// {
//   id : 1 , 
//   company_name: "Denotation Design",
//   category: "Interior Designers & Decorators",
//   location : "North Delhi", 
//   company_img_url : "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png",
//   product_img_url : "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
//   contractor_name:"Aaveg",
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
//   rating : "4" (not implemented in ER) 
// }

// {
//   "p_uid": "vycs78",
//   "location": {
//     "id": "vycs78",
//     "name": "Noida"
//   },
//   "category": {
//     "id": "vycs78",
//     "name": "Interior design"
//   },
//   "product_list": {
//     "id": "vycs78",
//     "p_uid": "vycs78",
//     "p_img_url": "string",
//     "p_description": "string",
//     "company": {
//       "company_uid": "string",
//       "name": "string",
//       "company_img_url": "string",
//       "address": "string"
//     },
//     "p_contractor": {
//       "contractor_id": "vycs78",
//       "username": "Aaveg",
//       "emailid": "aavegj1904@gmail.com",
//       "phone_number": 9205231951,
//       "address": "string",
//       "company_uid": "string"
//     }
//   }
// }


function App() {
  let router = useRouter() 
  let card_array = products.map((obj) => <Card obj = {obj} key = {obj.id} />)
  // let arr = ["aaveg","arnav"]

  // let [newLocation,setLocationState] = React.useState("Delhi")  
  // let [newCategory,setCategoryState] = React.useState("Interior Designers & Decorators") 

  let [newState, SetState] = React.useState({location : "", category : ""}) 
  let [cardsState, setCardsState] = React.useState([]) 

  let {apiURL} = config
  

  function locationHandler(location){
   
    SetState((prevState) => {
      return { ...prevState, 
          location : location
    }
  }) 
  }

  function categoryHandler(category){
    SetState((prevState) => {
      return { ...prevState, 
          category : category
    }
  }) 
  }

  function remove_category() { 
    SetState((prevState) => {
      return { ...prevState, 
          category : ""
    }
  }) 
  }

  function remove_location() { 
    SetState((prevState) => {
      return { ...prevState, 
          location : ""
    }
  }) 
  }

  
useEffect(() => {
  fetch(`${apiURL}/api/products?location=${newState.location}&category=${newState.category}` , {
    method : 'GET', 
      headers: {
        "Content-Type": "application/json" 
          // Authorization: `Bearer ${jwt}`,
      }
  }).then(response =>
    response.json().then(data => {
      function gen_obj(data){
        let id = data.p_uid 
        let company_name = data.product_list.company.name
        let category = data.category.name 
        let location = data.location.name 
        let company_img_url = data.product_list.company.company_img_url
        let product_img_url = data.product_list.p_img_url
        let contractor_name = data.p_contractor.username 
        let description = data.product_list.p_description
        let obj = {id,company_name,category,location,company_img_url,product_img_url,contractor_name,description}
        return obj 
      }
      let query_obj = {company_img_url, product_img_url, description, contractor_name,
                        category, id } 
      let new_card_array = data.map((obj) => <Card clicker = {() => router.push('/product_pg' , query = query_obj) }
                                                   obj = {gen_obj(obj)} key = {obj.p_uid} />)
      setCardsState(new_card_array) 
    })
  ).catch((err) => console.error(err));
}, [newState]);
 

 

  const locations = ["Delhi","New Delhi", "South Delhi", "West Delhi"] 
  const categories = ["Interior Designers & Decorators", "Architects & Building Designers", "Civil Engineers & Contractors",
                      "Design-Build Firms"]
  return (
    <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter>
   <div>
    <Listing_Box/>
    <div className = {st.container}>
        <div className={st.search_bars}>
                        <div className={st.location}>
                          <h3>Location</h3>
                          <Dropdown 
                                  trigger_text = "Select Location" 
                                  values = {locations}
                                  f = { locationHandler }
                          />
                        </div>
                        <div className={st.category}>
                          <h3>Category</h3>
                          <Dropdown 
                                  trigger_text = "Select Category" 
                                  values = {categories}
                                  f = { categoryHandler }
                          />
                        </div>
        </div>
                    
        <div className={st.display_tags} >
            { (newState.location !== "" ) && <div className={st.tag} >{newState.location} 
                                                              <button className={st.tag_button} onClick={remove_location}><img src ={cross} className={st.img_button} /></button>      
                                                        </div>} 
            { (newState.category !== "") && <div className={st.tag}>{newState.category} 
                                                              <button className={st.tag_button} onClick={remove_category}><img src ={cross} className={st.img_button} /></button>
                                                        </div>}
        </div>
        <div className= {st.cards}>{cardsState}</div>
     
   </div>
  </div>

</PageTemplate>
  );

  
 
}

export default App;
