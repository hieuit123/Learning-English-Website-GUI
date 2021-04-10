import React, { Component } from 'react'

export default class Word extends Component {
    render() {
        return (<>
            <div className="word-item" data-toggle="modal" data-target="#popup-word-detail">
                <span>information</span>
                <i className="fas fa-volume-up fa-lg"></i>
                <div className="clearfix"></div>
                <span className="ex-sentence">ví dụ: i'm working at information technology company</span>

            </div>
            <div className="modal fade" id="popup-word-detail" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                        </div>
                        <div className="modal-body">
                            ...
            </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
