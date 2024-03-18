import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:9099/api',
    headers: {
        'ngrok-skip-browser-warnings': "true"
    }
})