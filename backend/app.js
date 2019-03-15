import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';
import { serverPort } from './etc/config.json';

const app = express();
const currentTime = new Date();

db.setUpConnection();

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get('/articles', async (req, res) => {
    let page = req.query.page;
    let limit = req.query.limit;


    let currentArticleOnPage = [];

    db.listArticles().then(data => {
        let countPage = Math.ceil(data.length/+limit);
        let index;
        if (+page < countPage && +page > 0) {
            index = +limit * +page;
            for (let i = +limit; i > 0; i--) {
                currentArticleOnPage.push(data[index - 1]);
                index--;
            }
        } else if (+page === countPage) {
            let limitForLastPage = data.length % +limit;
            if (limitForLastPage === 0) {
                limitForLastPage = +limit;
            }
            index = data.length - 1;

            for (let i = limitForLastPage; i > 0; i--) {
                currentArticleOnPage.push(data[index]);
                index--;
            }
        } else {
            currentArticleOnPage = data;
        }

        res.send({
            count: data.length,
            page: +page,
            limit: +limit,
            articles: currentArticleOnPage
        })
    });
});

app.get('/articles/:id', (req, res) => {
    db.viewArticle(req.params.id).then(data => res.send(data));
});

app.put('/articles/:id/edit', (req, res) => {
    req.body.updated_at = currentTime;
    if (req.body.title === '') {
        res.status(422).send({
            errors: [{
                "field": "title",
                "error": "title is required"
            }]
        });
    } else if (req.body.body === '') {
        res.status(422).send({
            errors: [{
                "field": "body",
                "error": "body is required"
            }]
        });
    } else {
        db.updateArticle(req.body, req.params.id).then(data => res.send(data));
    }
});

app.post('/articles', (req, res) => {
    req.body.updated_at = currentTime;
    req.body.created_at = currentTime;
    if (req.body.title === '') {
        res.status(422).send({
            errors: [{
                "field": "title",
                "error": "title is required"
            }]
        });
    } else if (req.body.body === '') {
        res.status(422).send({
            errors: [{
                "field": "body",
                "error": "body is required"
            }]
        });
    } else {
        db.createArticle(req.body).then(data => res.send(data));
    }
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});