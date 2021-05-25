import React from 'react'

export default function Notify(props) {
    return (
        <div className="modal fade" id="notify-lve" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <div>{props.title}</div>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                </div>
                <div className="modal-body">
                    {props.content}
                </div>
            </div>
        </div>
    </div>
    )
}
