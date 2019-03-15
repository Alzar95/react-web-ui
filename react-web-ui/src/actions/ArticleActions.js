import * as constants from '../unit/constants';
import api from '../api';

const ArticleActions = {
    createArticle(article) {
        api.createArticle(article);
    },
    updateArticle(article, id) {
        api.updateArticle(article, id);
    },
    articleData(data) {
        return {
            type: constants.ARTICLE,
            data
        };
    }
};

export default ArticleActions;