const axios = require('axios')

const MY_BOT_TOKEN = "YOUR_TELEGRAM_TOKEN"

const BASE_URL = `https://api.telegram.org/bot${MY_BOT_TOKEN}`

function getAxiosInstance() {
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 5000, // Timeout for requests in milliseconds
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return {
        async get(method, params) {
            try {
                const response = await instance.get(`/${method}`, { params });
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        async post(method, data) {
            try {
                const response = await instance.post(`/${method}`, data);
                return response.data;
            } catch (error) {
                throw error;
            }
        }
    };
}

module.exports = getAxiosInstance;