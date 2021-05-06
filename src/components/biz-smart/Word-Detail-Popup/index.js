import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

import spellWord from './../../../utils/spellWord'
import * as configUrl from './../../../assets/config/config-url'
import convertPostData from './../../../utils/convertPostData'

export default class WordDetailPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowTrashIcon: false,
            isShowStarIcon: false,
            isShowDoneIcon: false
        }
    }

    componentDidMount() {
        let initStateWord = this.props.idState
        console.log(this.props.idState);
        switch (initStateWord) {
            case 1:
                this.setState({ isShowStarIcon: true });
                break;
            case 2:
                this.setState({ isShowStarIcon: false });
                break;
            case 4:
                this.setState({ isShowDoneIcon: true })
                break;
            case 5:
                this.setState({ isShowDoneIcon: false });
                this.setState({ isShowStarIcon: true });
                break;
            case 6:
                this.setState({ isShowDoneIcon: true });
                this.setState({ isShowStarIcon: true });
                break;
        }
    }

    render() {
        const updateStateWord = async (idState) => {
            let requestData = {
                W_Id: this.props.id,
                W_idState: idState
            }
            console.log(idState + "HEREEEEEEEEEEEEE");
            let formBody = convertPostData(requestData)

            fetch(`${configUrl.NODE_SERVER_URL}/word/updatewordstate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            }).then(data => data.json()).then(json => { if (json.status == false) alert("Đã có lỗi xảy ra") })

        }
        const deleteWordById = () => {
            let isRemove = window.confirm("Bạn chắc chắn muốn xóa từ này ?")
            console.log(isRemove + " deleted word with id = " + this.props.id)
        }
        const changeStateWord = (idState) => {
            
            switch (idState) {
                case 1:

                    if (!this.state.isShowStarIcon) {
                        if (this.state.isShowDoneIcon) updateStateWord(6)
                        else updateStateWord(1)
                    }
                    else {
                        updateStateWord(1)
                    }
                    this.setState({ isShowStarIcon: !this.state.isShowStarIcon });
                    break;
                case 3:
                    if (!this.state.isShowDoneIcon) {
                        if (this.state.isShowStarIcon) updateStateWord(6)
                        else updateStateWord(4)
                    }
                    else {
                        updateStateWord(3)
                    }
                    this.setState({ isShowDoneIcon: !this.state.isShowDoneIcon });
                    break;
            }

        }
        return (
            <div className="modal fade" id={`popuplve${this.props.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* left header */}
                            <div className="header-toolbar">
                                <div onClick={() => changeStateWord(3)} className={(this.state.isShowDoneIcon) ? "btn-done active" : "btn-done"} data-tip="Đánh dấu từ này đã thuộc" data-for="btn-level-tip"><i className="fas fa-check fa-sm"></i></div>
                                <div onClick={() => changeStateWord(1)} className={(this.state.isShowStarIcon) ? "btn-star active" : "btn-star"} data-tip="Ưu tiên học từ này" data-for="btn-level-tip"><i className="fas fa-star fa-sm"></i></div>
                                <div className="btn-word-level" data-tip="Đã thuộc 70%" data-for="btn-level-tip"><i className="far fa-circle fa-sm"></i></div>
                                <div onClick={() => deleteWordById()} className={(this.state.isShowTrashIcon) ? "btn-trash active" : "btn-trash"} data-tip="Xóa" data-for="btn-level-tip" ><i className="far fa-trash-alt"></i></div>
                                <ReactTooltip type="info" className="tooltipButton" id="btn-level-tip" wrapper="span" place="top" effect="solid" />
                                <div className="clearfix"></div>

                            </div>

                            {/* right header */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                        </div>
                        <div className="modal-body">
                            <img className="img-word" alt="avatar-word" src={this.props.avatar} />

                            <div className="title-word" onClick={() => spellWord(this.props.title)}>{`${this.props.title}: ${this.props.translation}`}</div>
                            <div>
                                <i className="fas fa-volume-up fa-md" onClick={() => spellWord(this.props.title)}></i>
                                <div className="ipa-word" onClick={() => spellWord(this.props.title)}>{this.props.ipa}</div>
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
