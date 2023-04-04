import st from "./nav.module.scss";
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link"
import {useDispatch, useSelector} from 'react-redux'
//import CircleImage from "@components/reusable/widgets/CircleImage";
import { FETCH_USER_SUCCESS } from "../../redux/reducers/user";
// import useOutsideDetector from "../../helpers/useOutsideDetector";
import Router from 'next/router'
import classNames from 'classnames'
//import HeartList from "@components/icon/HeartList";
//import Search from "@components/icon/Search";
//import Plus from "@components/icon/Plus";
import {modalTypes, SET_UX_VALUE} from "../../redux/reducers/ux";
import {RootState} from '../../redux/reducers';

export default function BottomNav({ search = true, createListing = true }) {

  const user = useSelector((state:RootState) => state.profile);


  const userReady = user.readyStatus === FETCH_USER_SUCCESS;



  const [regionMenuActive, setRegionMenuActive] = useState(false)
  const [accountMenuActive, setAccountMenuActive] = useState(false)

  const dispatch = useDispatch();

  const filterMenuActiveOnMobile = useSelector((state:RootState) => state.ux.filterMenuActiveOnMobile);

  const modalOpened = useSelector((state:RootState) => state.ux.modalType !== modalTypes.INVALID );

  const titleRef = useRef(null);

  // useOutsideDetector(titleRef, () => setAccountMenuActive(false));

  return <React.Fragment>
    <div className={filterMenuActiveOnMobile ||  modalOpened ? classNames(st.filterMenuActiveOnMobile, st.bottomNav):st.bottomNav } data-cy='btmNav' >
      <div className={st.appNavRow } >
        <Link href={"/"}>
          <button>
              Search
          </button>
        </Link>
        <Link href={"/dashboard/favorite"}>
          <button>
            HeartList
          </button>
        </Link>
        <Link href={"/create"}>
          <button>
             Plus
          </button>
        </Link>
        <button>
          {userReady ?
            <div onClick={() => Router.push("/dashboard")} data-cy='account'>
              Circle
            </div>
            :
            <svg viewBox="0 0 31 31"
                 onClick={() => dispatch({ type: SET_UX_VALUE, key: 'modalType', value: modalTypes.REGISTER})} data-cy='signup'>
              <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M21.0898 11.1715C21.0898 12.6529 20.5089 14.0736 19.4749 15.1211C18.4409 16.1686 17.0385 16.7571 15.5762 16.7571C14.1138 16.7571 12.7114 16.1686 11.6774 15.1211C10.6434 14.0736 10.0625 12.6529 10.0625 11.1715C10.0625 9.69013 10.6434 8.26942 11.6774 7.22192C12.7114 6.17442 14.1138 5.58594 15.5762 5.58594C17.0385 5.58594 18.4409 6.17442 19.4749 7.22192C20.5089 8.26942 21.0898 9.69013 21.0898 11.1715V11.1715ZM18.333 11.1715C18.333 11.9122 18.0425 12.6226 17.5255 13.1463C17.0085 13.6701 16.3073 13.9643 15.5762 13.9643C14.845 13.9643 14.1438 13.6701 13.6268 13.1463C13.1098 12.6226 12.8193 11.9122 12.8193 11.1715C12.8193 10.4308 13.1098 9.72047 13.6268 9.19672C14.1438 8.67297 14.845 8.37873 15.5762 8.37873C16.3073 8.37873 17.0085 8.67297 17.5255 9.19672C18.0425 9.72047 18.333 10.4308 18.333 11.1715V11.1715Z"
                />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.5766 0C7.20274 0 0.414062 6.87725 0.414062 15.3604C0.414062 23.8435 7.20274 30.7207 15.5766 30.7207C23.9505 30.7207 30.7391 23.8435 30.7391 15.3604C30.7391 6.87725 23.9505 0 15.5766 0ZM3.17089 15.3604C3.17089 18.2788 4.1537 20.9655 5.8009 23.0992C6.95771 21.5602 8.45007 20.313 10.1614 19.455C11.8728 18.597 13.7567 18.1515 15.6662 18.1532C17.5509 18.1513 19.4112 18.5854 21.1053 19.4222C22.7994 20.259 24.2826 21.4765 25.4419 22.9819C26.6362 21.395 27.4404 19.5429 27.7878 17.5787C28.1353 15.6145 28.016 13.5947 27.4399 11.6864C26.8638 9.77817 25.8475 8.03633 24.4749 6.60501C23.1024 5.17369 21.4131 4.09404 19.547 3.4554C17.6808 2.81675 15.6913 2.63747 13.7431 2.93239C11.795 3.22732 9.94412 3.98796 8.34375 5.15138C6.74338 6.31481 5.43949 7.84757 4.53997 9.62284C3.64044 11.3981 3.17114 13.3649 3.17089 15.3604V15.3604ZM15.5766 27.9279C12.7287 27.9323 9.96683 26.9398 7.75824 25.1184C8.64722 23.8291 9.83046 22.7765 11.2073 22.0501C12.5841 21.3236 14.1138 20.9448 15.6662 20.9459C17.1992 20.9447 18.7104 21.314 20.0743 22.0232C21.4381 22.7323 22.6153 23.7609 23.508 25.0234C21.2823 26.904 18.4748 27.932 15.5766 27.9279V27.9279Z"
                />
              </g>
            </svg>
          }
        </button>
        <button onClick={() => setRegionMenuActive(!regionMenuActive)}>

          <svg  viewBox="0 0 32 29">
            <path d="M15.8657 28.9688C7.50554 28.9688 0.703125 22.4704 0.703125 14.4839C0.703125 6.4975 7.50554 -0.000860214 15.8657 -0.000860214C24.2258 -0.000860214 31.0282 6.4975 31.0282 14.4839C31.0282 22.4704 24.2258 28.9688 15.8657 28.9688ZM26.6009 21.9017C24.9673 21.2828 23.2876 20.7916 21.5652 20.4697C20.8338 22.7708 19.6717 24.9747 18.0761 26.968C21.5706 26.4034 24.5995 24.5362 26.6009 21.9017ZM20.1568 10.5368C17.3103 10.9097 14.4199 10.9097 11.5728 10.5368C10.9888 13.1333 10.987 15.8204 11.5692 18.4186C12.983 18.2342 14.4122 18.1051 15.8657 18.1051C17.3191 18.1051 18.7465 18.2336 20.1603 18.4186C20.7426 15.8204 20.7402 13.1333 20.1568 10.5368ZM19.6658 20.189C17.1432 19.8778 14.5863 19.8778 12.0638 20.189C12.8409 22.5174 14.1107 24.7246 15.8657 26.68C17.6206 24.7246 18.8887 22.5174 19.6658 20.189ZM13.6517 26.968C12.0561 24.9747 10.8958 22.7708 10.1643 20.4697C8.44313 20.7922 6.76399 21.2828 5.13047 21.9017C7.13003 24.5362 10.159 26.4034 13.6517 26.968ZM2.59844 14.4839C2.59844 16.595 3.14986 18.5833 4.10877 20.3356C5.92058 19.6238 7.77977 19.0648 9.69226 18.697C9.08398 15.9143 9.08398 13.0406 9.69404 10.2562C7.78332 9.89238 5.91643 9.33618 4.10877 8.62665C3.14986 10.3829 2.59844 12.3712 2.59844 14.4839ZM5.13047 7.06614C6.76399 7.68514 8.44372 8.17627 10.1643 8.49821C10.8958 6.19705 12.0579 3.99321 13.6535 1.99985C10.159 2.56453 7.13003 4.43172 5.13047 7.06614ZM12.0656 8.77886C14.5863 9.09005 17.1432 9.09005 19.6658 8.77886C18.8887 6.45054 17.6188 4.2433 15.8657 2.28785C14.1107 4.2433 12.8426 6.45054 12.0656 8.77886ZM18.0755 1.99985C19.6711 3.99321 20.8332 6.19705 21.5646 8.49821C23.2858 8.1757 24.9667 7.68344 26.6003 7.06614C24.5995 4.43172 21.5706 2.56453 18.0755 1.99985ZM22.0349 10.2596C22.645 13.0423 22.6473 15.916 22.0367 18.6987C23.9492 19.0665 25.8102 19.6238 27.622 20.3373C28.5815 18.5833 29.1329 16.595 29.1329 14.4839C29.1329 12.3712 28.5815 10.3829 27.6226 8.63005C25.8143 9.33844 23.9474 9.89407 22.0349 10.2596Z"/>
          </svg>

        </button>

      </div>
    </div>
  </React.Fragment>
}
