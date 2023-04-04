import React, {useEffect, useState} from 'react'
// import { getImg} from '../../../helpers/getFile/getImg';
// const defaultImage = getImg('default_avatar')
const defaultSize = '25vh'
const defaultHalfSize = '8vh'

export default function ProfileIcon({imageUrl= null,
                       errorImage,
                       size= defaultSize,
                       borderRadius= defaultHalfSize
                     }){
  const [hasError, setHasError] = useState(false)
  const [errorLink, setErrorLink] = useState(null)

  const handleError = (imageUrl) => {
    setHasError(true)
    setErrorLink(imageUrl)
  };

  return <img
        alt={'profile'}
        src="/login/account.png"
        // src={getImg('default_avatar')}
        style={{height: size, width:size, borderRadius: borderRadius,
        borderWidth: 6, borderColor: '#fff'}}
        onError={() => handleError(imageUrl)}
      />
}
