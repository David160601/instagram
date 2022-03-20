import axios from 'axios';
const apiUrl = process.env.DEVELOPMENT_API_URL;
const service = {
    post: async (url: string, data: any) => {
        return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, data)
    }
};
export default service;