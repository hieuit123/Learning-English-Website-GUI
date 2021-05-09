import React, { Component } from 'react'
import WordDetailPopup from '../../../biz-smart/Word-Detail-Popup'
import spellWord from './../../../../utils/spellWord'
export default class Word extends Component {
    render() {
        let handleClick = () => {
            spellWord(this.props.title)
        }
        return (<>
            <div className="word-item" >
                <div onClick={handleClick} className="content-word" data-toggle="modal" data-target={`#popuplve${this.props.id}`}>
                    <span>{this.props.title}</span>
                    <div className="clearfix"></div>
                    <span className="ex-sentence">{this.props.example}</span>
                </div>
                <i className="fas fa-volume-up fa-lg" onClick={() => spellWord(this.props.title)}></i>
                <div className="clearfix"></div>
            </div>
            <WordDetailPopup key={this.props.id} idState={this.props.idState} ipa={this.props.ipa} id={this.props.id} title={this.props.title} example={this.props.example} avatar={this.props.avatar} translation={this.props.translation} />
        </>
        )
    }
}
