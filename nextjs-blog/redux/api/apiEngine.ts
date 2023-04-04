import axios,  { AxiosResponse, Method }  from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const getApiUrl = (path, query = null) => {

  let queryString = '';

  if(query){
    Object.keys(query).map( (k, i) => {
      queryString += (i === 0)?'?':'&';
      queryString += `${k}=${query[k]}`
    })
  }

  return `${path}${queryString}`
};

type IProps = {
  params?: any,
  data?: any,
  files? : any,
  query?: any,
  cache?: any,
  onUploadProgress?: any, 
  auth?: any
}

const ApiEngine = (method : Method, path : string,
                   { params, data, files, query, cache, onUploadProgress, auth
                   }: IProps = {}
                   ): Promise<AxiosResponse> => {
  const content = {
    method,
    url: getApiUrl(path, query),
    withCredentials: true
  };

  const headers = {};
  const config = {};
  const credentials = {};
  if (cache) {
    Object.assign(headers, { 'Cache-Control': 'no-cache' });
    Object.assign(config, {
      adapter: cacheAdapterEnhancer(axios.defaults.adapter, (true as any))
    })
  }

  if (params) {
    Object.assign(content, { params });
  }
  if (data) {
    if(params)
    Object.assign(headers, {
      'Content-Type': 'application/json',
      withCredentials: true
    });
    Object.assign(content, { data });
  }
  if(auth != null){
    Object.assign(headers, { 'Authorization': `Bearer ${auth}`});
  }

  Object.assign(headers, {
    withCredentials: true
  });

  if (files) {
    const formData = new FormData();
    Object.keys(files).forEach(name => {
      formData.append(name, files[name]);
    })
    Object.assign(headers, { 'Content-Type': 'multipart/form-data' });
    Object.assign(content, { data: formData });
  }
  if(Object.getOwnPropertyNames(headers).length !== 0) {
    Object.assign(content, {headers});
  }
  if(Object.getOwnPropertyNames(credentials).length !== 0) {
    Object.assign(content, {credentials});
  }
  if(Object.getOwnPropertyNames(config).length !== 0) {
    Object.assign(content, {config});
  }
  return axios(content);
}

export default ApiEngine


