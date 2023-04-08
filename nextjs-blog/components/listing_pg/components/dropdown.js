import { useState } from 'react';
// import Select from 'react-select';
import st from "../../../styles/listing_pg/dropdown.module.css"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {ArrowDownIcon} from '@radix-ui/react-icons';
import {ArrowUpIcon} from '@radix-ui/react-icons';


// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'





export default function Dropdown(props) {
    let arr = props.values ; 
    let new_arr = arr.map((x) => 
        <DropdownMenu.Item className = {st.dropdown_new} 
                            onSelect = { () => handleChange(x)  }  
                            value = {x}>
            {x} 
          </DropdownMenu.Item >)
    // console.log(new_arr) ;
    function handleChange(value){ 
        (props.f)(value)
    }
    return (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button className = {st.dropdown_new_2}>
        {props.trigger_text}  
        <span className={st.downarrow} ><ArrowDownIcon />
        </span>  
      </button>
      
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content className = {st.DropdownMenuContent} >
      
      <DropdownMenu.Group >
          {new_arr} 

      </DropdownMenu.Group>

        
        {/* <DropdownMenu.Separator />
        <DropdownMenu.Arrow /> */}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
)
}
