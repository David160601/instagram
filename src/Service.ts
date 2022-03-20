import axios from 'axios';
const apiUrl = process.env.DEVELOPMENT_API_URL;
const service = {
    post: async (url: string, data: any) => {
        return await axios.post(`https://nest-api-socail-media.herokuapp.com/${url}`, data)
    }
};
export default service;