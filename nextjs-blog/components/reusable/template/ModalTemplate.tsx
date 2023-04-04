import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import st from './modal.module.scss'
import { RootState } from '../../../redux/reducers';

export default function ModalTemplate({ children, onClose }) {
    return (   
        <div className={st.modalContainer}
             onClick={e => {
                 e.preventDefault()
                 if(e.target === e.currentTarget) {
                     onClose()
                 }
             }}>
            <div>
                { children }
            </div>
        </div>
    )
}
