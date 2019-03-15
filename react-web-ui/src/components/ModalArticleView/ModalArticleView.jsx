import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import api from "../../api";
import './ModalArticleView.css';

class ModalArticleView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            dataCurrentArticle: {}
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        api.currentArticle(this.props.idarticle).then(res => {
            this.setState({ show: true });
            this.setState({ dataCurrentArticle: res.data });
        });
    }

    render() {
        return (
            <div className="modal-article-view">
                <Button type="button"
                        variant="primary"
                        className="btn btn-info button-view"
                        onClick={this.handleShow}>View</Button>

                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.dataCurrentArticle.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.dataCurrentArticle.body}</Modal.Body>
                    <Modal.Footer>
                        Created: <div className="time-created">{this.state.dataCurrentArticle.created_at}</div>
                        Updated: <div className="time-update">{this.state.dataCurrentArticle.updated_at}</div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalArticleView;