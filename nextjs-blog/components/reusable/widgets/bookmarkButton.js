import React, { useEffect } from "react";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
} from "../../../redux/actions/bookmarks";
import styleLib from "../../../constants/styleLib";
import { SET_NAVI_SCRN, SET_UX_VALUE } from "../../../redux/reducers/ux";
import authModalPages from "../../../constants/authModalPages";
import styles from './bookmarkButton.module.scss'

const toInt = (v) => (v != null && v !== "" && !isNaN(v) ? parseInt(v) : null);

export default function BookmarkButton({ product, size = 24 }) {
  const catId = useSelector((state) => state.ux.cat_id);
  const bookmarks = useSelector((state) => state.bookmarks);
  const jwt = useSelector((state) => state.storage.jwt);
  const bookmarksData = bookmarks.data != null ? bookmarks.data : [];
  const dispatch = useDispatch();
  const prod = Object.assign({}, product);
  prod.p_lower_age = toInt(product.p_lower_age);
  prod.p_sum_ins = toInt(product.p_sum_ins);
  prod.p_ann_pre = toInt(product.p_ann_pre);
  prod.deductible = toInt(product.prod_deductible);
  prod.medical_benefit = product.prod_benefit;
  const isShortTerm = catId === 5 || catId === 6 || catId === 8;
  if (isShortTerm) {
    prod.room = prod.p_payment_term;
    prod.p_payment_term = null;
  } else {
    prod.room = null;
    prod.p_payment_term = toInt(product.p_payment_term);
    prod.deductible = null;
    prod.medical_benefit = null;
    prod.geographic_coverage = null;
  }
  const added =
    bookmarksData.findIndex(
      (b) =>
        b.product_id === prod.p_iid &&
        b.p_gender === prod.p_gender &&
        b.p_smoking_st === prod.p_smoking_st &&
        b.p_lower_age === prod.p_lower_age &&
        b.p_payment_term === prod.p_payment_term &&
        b.room === prod.room &&
        b.p_sum_ins === prod.p_sum_ins &&
        b.p_ann_pre === prod.p_ann_pre &&
        b.deductible === prod.deductible &&
        b.medical_benefit === prod.medical_benefit &&
        b.geographic_coverage === prod.geographic_coverage
    ) >= 0;

  const toggleBookmark = () => {
    if (jwt == null) {
      dispatch({
        type: SET_UX_VALUE,
        key: "authModalPage",
        value: authModalPages.GATEWAY,
      });
    }
    if (added) {
      dispatch({ type: REMOVE_BOOKMARK, product: prod });
    } else {
      dispatch({ type: ADD_BOOKMARK, product: prod });
    }
  };

  return (
      <div className={styles.mainContainer} onClick={toggleBookmark}>
        {added ? (
          <AiFillHeart color="#ff687f" size={size} />
        ) : (
          <AiOutlineHeart size={size} />
        )}
      </div>
  );
}
