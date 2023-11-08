import axios from 'axios';

// ! Настройкой аксиоса заниматься здесь!
export const $API = axios.create({
    baseURL: __API__,
    headers: {

    },
});
