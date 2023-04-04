import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import styleLib from '../../../constants/styleLib';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {tabNames} from '../../../constants/tabNames';
import {IoIosAdd} from '@react-icons/all-files/io/IoIosAdd';
import {IoIosRemove} from '@react-icons/all-files/io/IoIosRemove';
import styles from './Slider.module.scss'
import {RootState} from '../../../redux/reducers';

export default function TheSlider({ onValueChange = () => {},
                                      onAdd, onMinus, minimumValue, maximumValue,
                                 steps, value, onSlidingComplete = () => {}}){
  const navi_scrn = useSelector((state: RootState) => state.ux.navi_scrn)
  const color = navi_scrn === tabNames.DNA ? styleLib.DNA_THEME_COLOR : styleLib.ACTIVE_BLUE
  return <div className={styles.btm_m_col2} style={{margin:'1rem 0'}}>
    <button className={styles.btm_m_col} onClick={onMinus}>
      <IoIosRemove className={styles.icoSt} size={18}/>
    </button>
    <Slider
        className={ styles.slider}
        handleStyle={{width: '24px', height: '24px',
            top: '0px',
          borderRadius: '12px',
           borderColor: '#eee', backgroundColor: color
        }}
        railStyle={{ height: '4px', borderRadius: '2px',
            backgroundColor: '#ccc'}}
        trackStyle={{ height: '4px', borderRadius: '2px',
            backgroundColor: color}}
        step={steps}
        min={minimumValue}
        max={maximumValue}
        value={value}
        onChange={onValueChange}
        onAfterChange={onSlidingComplete}
    />
    <button className={styles.btm_m_col} onClick={onAdd}>
      <IoIosAdd className={styles.icoSt}/>
    </button>
  </div>
}



