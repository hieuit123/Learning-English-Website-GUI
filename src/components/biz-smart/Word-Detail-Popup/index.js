import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import spellWord from './../../../utils/spellWord'
export default class WordDetailPopup extends Component {
    render() {     
        return (
            <div className="modal fade" id={`popuplve${this.props.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* left header */}
                            <div className="header-toolbar">
                                <div className="btn-done" data-tip="Đánh dấu từ này đã thuộc" data-for="btn-level-tip"><i className="fas fa-check fa-sm"></i></div>
                                <div className="btn-star" data-tip="Ưu tiên học từ này" data-for="btn-level-tip"><i className="fas fa-star fa-sm"></i></div>
                                <div className="btn-word-level" data-tip="Đã thuộc 70%" data-for="btn-level-tip"><i className="far fa-circle fa-sm"></i></div>
                                <div className="btn-word-level" data-tip="Xóa" data-for="btn-level-tip" ><i className="far fa-trash-alt"></i></div>
                                <ReactTooltip type="info" className="tooltipButton" id="btn-level-tip" wrapper="span" place="top" effect="solid" />
                                <div className="clearfix"></div>

                            </div>

                            {/* right header */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                        </div>
                        <div className="modal-body">
                            <img className="img-word" alt="avatar-word" src={this.props.avatar} />

                            <div className="title-word"  onClick={()=>spellWord(this.props.title)}>{`${this.props.title}: ${this.props.translation}`}</div>
                            <div>
                                <i className="fas fa-volume-up fa-md"  onClick={()=>spellWord(this.props.title)}></i>
                                <div className="ipa-word"  onClick={()=>spellWord(this.props.title)}>{this.props.ipa}</div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="content-word-popup">{this.props.example}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
