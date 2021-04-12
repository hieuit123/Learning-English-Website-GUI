import React, { Component } from 'react'
import WordDetailPopup from '../../../biz-smart/Word-Detail-Popup'
export default class Word extends Component {
    render() {
        return (<>
            <div className="word-item" data-toggle="modal" data-target="#popup-word-detail">
                <span>information</span>
                <i className="fas fa-volume-up fa-lg"></i>
                <div className="clearfix"></div>
                <span className="ex-sentence">ví dụ: i'm working at information technology company</span>

            </div>
            <WordDetailPopup />
            
        </>
        )
    }
}
