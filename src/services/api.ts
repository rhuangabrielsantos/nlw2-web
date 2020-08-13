import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffy-deploy-rhuan.herokuapp.com/',
});

export default api;