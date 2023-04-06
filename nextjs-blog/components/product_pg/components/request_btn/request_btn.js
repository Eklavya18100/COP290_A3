import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import st from "./request_btn.module.css";

export default function Request_Btn(props) {
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
              <input className={st.Input} id="name" defaultValue="" />
            </fieldset>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <Dialog.Close asChild>
                <button className={st.Button} green>
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
