import apiEngine from "./apiEngine";
import { GET, POST } from "./methods";
import config from '../../config';

const apiUrl = config.apiUrl

export default {
    getPolicyProduct: (data, jwt) => {
    return apiEngine(POST, `${apiUrl}/get-policy-product`,
        { data, auth: jwt })
},
    getMedicalProduct: (data, jwt) => apiEngine(POST, `${apiUrl}/get-medical-product`,
        { data, auth: jwt }),
};
