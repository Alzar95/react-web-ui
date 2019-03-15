import axios from 'axios';
import { apiPrefix } from '../etc/config.json';

export default {
    listArticle(pageNumber) {
        return axios.get(`${apiPrefix}/articles?page=${pageNumber}&limit=10`);
    },

    currentArticle(id) {
        console.log(id);
        return axios.get(`${apiPrefix}/articles/${id}`);
    },

    updateArticle(data, id) {
        console.log(id);
        return axios.put(`${apiPrefix}/articles/${id}/edit`, data);
    },

    createArticle(data) {
        return axios.post(`${apiPrefix}/articles`, data);
    }
}