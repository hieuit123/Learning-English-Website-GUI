import React, { Component } from 'react'
import WordDetailPopup from '../../../biz-smart/Word-Detail-Popup'
import spellWord from './../../../../utils/spellWord'
export default class Word extends Component {
    render() {
        return (<>
            <div className="word-item">
                <div className="content-word" data-toggle="modal" data-target="#popup-word-detail">
                    <span>information</span>
                    <div className="clearfix"></div>
                    <span className="ex-sentence">ví dụ: i'm working at information technology company</span>
                </div>
                <i className="fas fa-volume-up fa-lg" onClick={()=>spellWord("information")}></i>
                <div className="clearfix"></div>
            </div>

            <WordDetailPopup />

        </>
        )
    }
}
