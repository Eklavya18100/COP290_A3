import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import PageTemplate from "@components/reusable/template/PageTemplate";
import Animation from "../../components/reusable/template/Animation";
import { VscChevronDown } from "@react-icons/all-files/vsc/VscChevronDown";

export default function Dashboard(){
    const user = useSelector(
        (state: RootState) => state.user 
      );
    
      const dispatch = useDispatch() 

      const { isLoggedIn } = useSelector((state: RootState) => state.storage);
      

     
    
    return (
        <PageTemplate transparentNav={false} outsideApp darkBg={true} noFilter >

        </PageTemplate>
    )
}