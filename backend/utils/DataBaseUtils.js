import mongoose from 'mongoose';
import config from '../etc/config.json';
import '../models/Article';

const Article = mongoose.model('Article');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useNewUrlParser: true })
}

export function listArticles() {
    return Article.find();
}

export function createArticle(data) {
    const article = new Article({
        title: data.title,
        body: data.body,
        updated_at: data.updated_at,
        created_at: data.created_at,
    });

    return article.save();
}

export function viewArticle(id) {
    return Article.findById(id);
}

export function updateArticle(data, id) {
    const updateArticle = {
        title: data.title,
        body: data.body,
        updated_at: data.updated_at,
    };

    return Article.findOneAndUpdate({_id: id}, updateArticle, {new: true})
}