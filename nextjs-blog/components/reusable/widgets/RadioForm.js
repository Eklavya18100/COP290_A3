import React, {useState} from 'react';
import styleLib from '../../../constants/styleLib';
import {useSelector} from 'react-redux';
import {tabNames} from '../../../constants/tabNames';
import styles from './RadioForm.module.scss'

export default function RadioForm({radio_props, onClick, initial}) {
  const navi_scrn = useSelector(state => state.ux.navi_scrn)
  const color = navi_scrn === tabNames.DNA ? styleLib.DNA_THEME_COLOR : styleLib.ACTIVE_BLUE
  const [selectedIdx, setSelectedIdx] = useState(initial);
  return <>{
    radio_props.map((i, idx) => {
      const selected = selectedIdx === idx
      return <button className={styles.radio}
                               onClick={() => {
                                 setSelectedIdx(idx);
                                 onClick(i.value);
                               }}>
        <div className={styles.label}>
          <div className={styles.thumb}>
            <div className={selected ? styles.innerThumbActive : styles.innerThumb}/>
          </div>
          <h4 className={selected ? styles.txtActive : styles.txt}> {i.label}</h4>
        </div>
      </button>;
    })
  }
  </>;
}
