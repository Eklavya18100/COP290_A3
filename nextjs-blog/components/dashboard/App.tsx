// import React, { useEffect } from "react" 
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/reducers"
// import config from "../../config";
// import Card from "./components/card"
// import PageTemplate from "@components/reusable/template/PageTemplate";
// import st from "../../styles/dashboard/app.module.css" 

export default function App(){
    // const id = useSelector((state : RootState) => state.storage.userID)
    // // get user id from state
    // let [userState, setUserState] = React.useState({name : "", emailid: ""})

    // let [orderState, setOrderState] = React.useState([]) 

    // function genarr(data){
    //     return data.map((x) => <Card obj = {x} /> ) 
    // }

    // const { apiUrl } = config;

    // useEffect(() => {
    //     fetch(`${apiUrl}/api/customer/${id}` , {
    //         method : 'GET', 
    //           headers: {
    //             "Content-Type": "application/json" 
    //               // Authorization: `Bearer ${jwt}`,
    //           }
    // }).then((response) => response.json().then((data) => {
    //     setUserState({name : data.name, emailid : data.emailid})
    // })).catch((err) => console.error(err))
    // }, []) 

    // useEffect(() => {
    //     fetch(`${apiUrl}/api/customers/${id}/orders`, {
    //             method : "GET",
    //             headers : {
    //                 "Content-Type": "application/json" 
    //             }
    //     }).then((response) => response.json().then((data) => {
    //         setOrderState(genarr(data))
    //     })).catch((err) => console.error(err))
    // }, []) 



    // let dashboard_url = "https://img.freepik.com/free-photo/brown-wooden-flooring_53876-90802.jpg?w=996&t=st=1680938897~exp=1680939497~hmac=d5bfaf1218dcd7b4c1c96e2696088de57dc236aa8f4fb73e46df65a56e51fda8" 
    return (
        <div></div>
        // <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter>

        //     <div className="container">

        //         <div className="header">
        //             <img src = {dashboard_url} className={st.dashboard_img} />
        //         </div>

        //         <div className="user_details">
        //             <h3>User Details</h3>
        //             <h5><button>Edit profile</button></h5>
        //             <div className="details">
        //                 <label htmlFor = "name" className="label">Name</label>
        //                 <p id = "name" className="info">{userState.name}</p>

        //                 <label htmlFor = "email" className="label">Email</label>
        //                 <p id = "email" className="info">{userState.emailid}</p>
        //             </div>
        //         </div>

        //         <div className="order_details">
        //             {orderState} 
        //         </div>

        //     </div>



        // </PageTemplate>
    )
}