import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Header from "../Header";
import ArticleActions from '../../actions/ArticleActions';
import './UpdateArticlePage.css';
import history from "../../history";
import api from "../../api";

class UpdateArticlePage extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            body: '',
            redirect: false,
        };
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleTextChange = (event) => {
        this.setState({ body: event.target.value });
    };

    redirectArticle = () => {
        if( this.state.redirect) {
            return <Redirect to="/articles"/>
        }
    };

    handleArticleUpdate = () => {
        const updateArticle = {
            title: this.state.title,
            body: this.state.body
        };

        ArticleActions.updateArticle(updateArticle, this.props.location.state.currentIdArticle);
        this.setState({ title: '', body: '' });
        api.listArticle(1).then(res => {
            history.push(`/#/articles?page=${res.data.page}&limit=${res.data.limit}`);
            this.setState({ articlesState: res.data.articles });
            this.setState({ allData: res.data });
        });
        this.setRedirect();
    };

    render() {
        return(
            <div>
                {this.redirectArticle()}
                <Header/>
                <div className="create-article-page">
                    <h2 className="title-article-create">Article / update</h2>
                    <form className="form-create-article">
                        <div className="form-group">
                            <label className="title-name">Title:</label>
                            <input type="text"
                                   className="form-control title-form-control"
                                   onChange={this.handleTitleChange} />
                        </div>
                        <div className="form-group">
                            <label className="title-name">Body:</label>
                            <textarea className="form-control"
                                      rows="9"
                                      onChange={this.handleTextChange}/>
                        </div>
                        <button className="btn btn-success button-create"
                                onClick={this.handleArticleUpdate}>Update</button>
                        <button className="btn btn-warning button-cancel"
                                onClick={this.setRedirect}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateArticlePage;