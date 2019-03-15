import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import api from "../api";
import Header from "./Header";
import TableArticle from './TableArticle';
import './Articles.css';
import history from '../history';

class Articles extends Component {
    constructor() {
        super();

        this.state = {
            articlesState: [],
            allData: {},
            currentArticles: [],
            currentPage: 1
        };
    }
    componentDidMount() {
        api.listArticle(1).then(res => {
            history.push(`/#/articles?page=${res.data.page}&limit=${res.data.limit}`);
            this.setState({ articlesState: res.data.articles });
            this.setState({ allData: res.data });
        });
    }

    pageClick = data => {
        api.listArticle(data.selected + 1).then(res => {
            history.push(`/#/articles?page=${data.selected + 1}&limit=${res.data.limit}`);
            this.setState({ articlesState: res.data.articles });
            this.setState({ allData: res.data });
        });
    };

    render() {
        return(
            <div>
                <Header/>
                <TableArticle articlesdata={this.state.articlesState} />
                <div className="react-paginate">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(this.state.allData.count/this.state.allData.limit)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.pageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'page-item page-link'}
                    activeClassName={'page-item active'}/>
                </div>
            </div>
        )
    }
}

export default Articles;