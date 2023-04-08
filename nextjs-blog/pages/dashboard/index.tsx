import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import PageTemplate from "@components/reusable/template/PageTemplate";
import Animation from "../../components/reusable/template/Animation";
import { VscChevronDown } from "@react-icons/all-files/vsc/VscChevronDown";

import App from "../../components/dashboard/App"
export default function Dashboard(){
   
    return (
        <App />
    );
    
}