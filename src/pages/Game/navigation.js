import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        let dataEx={
            star:"36",
            numberQuestion:"5"
        }
        return (
            <div className="gameMode1-info">
                <div className="number-question">{`Câu ${this.props.numberQuestion}`}</div>
                <i className="far fa-question-circle btn-guide fa-lg"></i>
                <div className="star-info"><i className="fas fa-star fa-md"></i>{dataEx.star}</div>
                <div className="clearfix"></div>
            </div>
        )
    }
}
