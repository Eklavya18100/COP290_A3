import React, {useEffect, useState} from 'react'
import st from './circularImage.module.scss'

function CircleImage({imageUrl= '',
                       errorImage = '/app/img/default_avatar.png',
                       size='30px',
                       borderRadius='50%'
}){
  const [hasError, setHasError] = useState(false)
  const [errorLink, setErrorLink] = useState(null)

  const handleError = (imageUrl) => {
      setHasError(true)
      setErrorLink(imageUrl)
  };

//&& userReady

  return (
    <img
      style={{'width': size, 'height': size, 'borderRadius': borderRadius}}
      className={st.profileIcon}
      alt="me"
      onError={() => handleError(imageUrl)}
      src="./profilePic.png"
    />
    
  )
}

export default CircleImage
