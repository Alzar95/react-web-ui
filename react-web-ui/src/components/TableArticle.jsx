import React from 'react';
import { Link } from 'react-router-dom'
import './TableArticle.css';
import ModalArticleView from './ModalArticleView/ModalArticleView';

const TableArticle = () => ({
    render() {
        return(
            <div>
                <div className="table-of-articles">
                    <div className="block-title-and-button-create">
                        <h1 className="title-articles">Articles</h1>
                        <Link to="/articles/create"><button type="button" className="btn btn-success button-create">
                            Create</button></Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th/>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.articlesdata.map(article =>
                                <tr>
                                    <td>{article._id}</td>
                                    <td>{article.title}</td>
                                    <td>{article.body}</td>
                                    <td>
                                        <div className="buttons-edit-view">
                                            <Link to={{pathname: `/articles/${article._id}/edit`, state: { currentIdArticle: article._id}}} className="link-button-edit">
                                                <button type="button" className="btn btn-primary button-edit">Edit</button></Link>
                                            <ModalArticleView idarticle={article._id}/>
                                        </div>
                                    </td>
                                </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});

export default TableArticle;