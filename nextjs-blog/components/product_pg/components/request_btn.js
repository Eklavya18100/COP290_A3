import React from "react" 
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import st from "../../../styles/product_pg/request_btn.module.css"
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import { request } from "http";

export default function Request_Btn(props) {
  let [msgState, statehandler] = React.useState("") 

  function getCurrentDateTimeString() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const day = now.getUTCDate();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const milliseconds = now.getUTCMilliseconds();
  
    // Zero-pad month, day, hours, minutes, and seconds to two digits
    const zeroPad = (num) => num.toString().padStart(2, '0');
    const monthStr = zeroPad(month);
    const dayStr = zeroPad(day);
    const hoursStr = zeroPad(hours);
    const minutesStr = zeroPad(minutes);
    const secondsStr = zeroPad(seconds);
  
    // Format the date-time string
    const dateTimeStr = `${year}-${monthStr}-${dayStr}T${hoursStr}:${minutesStr}:${secondsStr}.${milliseconds}Z`;
    
    return dateTimeStr;
  }


  const request_body = {
    
    "order_date": "2023-04-07T13:13:20.235Z",
    "p_uid": props.p_id, 
    "scheduling_status": "pending",
    "payment_status": "meeting pending",
    "exchange_emails": "string"
  }

  function handleChange(event) {
    let msg = event.target.value ;
   
    statehandler(msg)  

  }

  
  // const jwt = useSelector((state) => state.storage.jwt);
  async function handleSubmit(event) { 
      
      const { apiUrl } = config;

      request_body.order_date =  getCurrentDateTimeString()
      request_body.exchange_emails = msgState ;

      const response = await fetch(`${apiUrl}/api/customer/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(request_body) 
      });

      if (response.ok) {
        console.log("response worked!");
        statehandler("") 
      }
    }
  

  return (
    <>
      <Dialog.Root className={st.DialogRoot}>
        <Dialog.Trigger asChild>
          <div className={st.button_wrapper}>
            <h3>Connect with the contractor</h3>
            <button className={st.Button} violet>
              {props.btn_text}
            </button>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={st.DialogOverlay} />
          <Dialog.Content className={st.DialogContent}>
            <Dialog.Title className={st.DialogTitle}>
              {props.modal_header}
            </Dialog.Title>
            <Dialog.Description className={st.DialogDescription}>
              {props.modal_description}
            </Dialog.Description>
            <fieldset className={st.Fieldset}>
              <label className={st.Label} htmlFor="msg">
                {props.label}
              </label>
              <input className={st.Input} id="name" defaultValue="" value = {msgState} onChange={handleChange}/>
            </fieldset>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <Dialog.Close asChild>
                <button className={st.Button} onClick={handleSubmit} green>
                  {props.modal_btn_text}
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className={st.IconButton} aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
