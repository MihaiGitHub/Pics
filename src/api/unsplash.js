import axios from 'axios';

// Customize axios to make requests to a specific URL
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ff8bb662d583b86b0fc76d88ab91cef5a46908721a9a5d1c0e43568daf424c3a'
    }
});