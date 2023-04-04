export const urlEncodeVal =  (val) => {
  const type = typeof val;
  if(val == null){
    return ''
  }
  if(type === 'object') {
    const objString = JSON.stringify(val);
    return val !== {} ? encodeURIComponent(objString) : '';
  }
  else if(type === 'number'){
    return encodeURIComponent(val.toString())
  }
  else if(type === 'string'){
    return encodeURIComponent(val)
  }
  else{
    return ''
  }
};

//%7B%22type%22%3A%22REDIRECT_TO_ZOOM%22%7D


export const urlDecodeObj =  (obj) => {
  if(typeof obj !== 'string'){
    return null
  }
  const objString = decodeURIComponent(obj);
  try{
    return JSON.parse(objString);
  }
  catch(err){
    console.log(err)
    return null
  }
};

export const urlDecodeString =  (val) => {
  return decodeURIComponent(val);
};

export const urlDecodeNum =  (val) => {
  const str = decodeURIComponent(val);
  return Number(str)
};

export const objToUrlQuery = (url, obj) => {
  const queryArr = Object.keys(obj).map(
    k => {
      return `${k}=${urlEncodeVal(obj[k])}`
    });
  if(queryArr.length === 0){
    return url
  }
  else if(queryArr.length === 1){
    return `${url}?${queryArr[0]}`
  }
  else{
    return `${url}?${queryArr.join('&')}`
  }
};