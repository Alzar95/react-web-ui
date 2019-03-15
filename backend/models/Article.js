import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: { type: String },
    body: { type: String },
    updated_at: { type: Date },
    created_at: { type: Date },
});

const Article = mongoose.model('Article', ArticleSchema);