import axios from 'axios';


const KEY = 'AIzaSyBIZBpSccNpUU7trBZnG8RkmA9_L97L1II';

export default axios.create({
    baseURL: 'https://www.googleapis.com',
    params: {
        key: KEY,
        maxResults: 5,
    }
});