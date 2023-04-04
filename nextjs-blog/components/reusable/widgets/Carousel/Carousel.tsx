import st from './carousel.module.scss'
import {useState, useRef, useEffect} from "react";
import classNames from 'classnames'

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  }
]

const useContainerDimensions = myRef => {
  const getDimensions = () => ({
    width: myRef.current.offsetWidth,
    height: myRef.current.offsetHeight
  })

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions;
};

export default function Carousel(){

  const getDotClass = (i) => {
    return i === idx ? classNames(st.selected, st.dot) : st.dot
  };

  const goPrev = () => {
    const len = data.length;
    if(idx - 1 < 0) {
      setIdx(len - 1)
    }
    else{
      setIdx(idx - 1)
    }
  }


  const goNext = () => {
    const len = data.length;
    if(idx + 1 === len) {
      setIdx(0)
    }
    else{
      setIdx(idx + 1)
    }
  };

  const componentRef = useRef()
  const { width, height } = useContainerDimensions(componentRef)

  const [ idx, setIdx] = useState(0);
  return(
    <div ref={componentRef} className={st.outerCarouselContainer}>
      <div  className={st.carouselContainer}>
        <div style={{'right': `${width * idx}px` }} className={st.carouselContainerContent}>
          {
            data.map(d => <div>{d.id}</div>)
          }

        </div>
        <div className={st.dots}>
          {
            [0,1,2,3,4].map(i =>
              <button className={getDotClass(i)} onClick={() => setIdx(i)}></button>)
          }
        </div>
        <div onClick={goPrev} className={st.leftArrow}>
          {'<'}
        </div>
        <div onClick={goNext} className={st.rightArrow}>
          {'>'}
        </div>
      </div>
    </div>
  )
}