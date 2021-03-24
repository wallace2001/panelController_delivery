import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sitefood-com-br.umbler.net',
})

export default api;