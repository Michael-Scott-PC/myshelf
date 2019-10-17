import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com',
    params: {
        key: API_KEY,
        maxResults: 5,
    }
});
