import config from '../../config';
const mediaFileServerUrl = config.mediaFileServerUrl
export default path => `${mediaFileServerUrl}${path}`
