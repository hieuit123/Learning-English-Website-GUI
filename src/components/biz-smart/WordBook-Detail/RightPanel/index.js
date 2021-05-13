import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Word from './Word'
import * as actions from './../../../../actions'
import loadingIcon from './../../../../assets/images/loading.gif'

class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelNullWords: null,
            classLoadingPanel: "show"
        }
    }

    componentWillUnmount() {
        this.props.callWordsMange(actions.resetWordbookDataAction())
    }

    render() {
        //init word data

        const initWordsData = async () => {
            let result = await axios.get("/word/getallbyidwordbook/" + this.props.id)
            let finalResult = result.data
            let resultStateData = await axios.get("/word/statisticsByIdWordBook/" + this.props.id)
            let finalResultStateData = resultStateData.data
            if (finalResult.status && finalResultStateData.status) {
                this.setState({ classLoadingPanel: "hide-component" }) // hide loading panel
                this.props.callWordsMange(actions.initWordsDataAction(finalResult.data, finalResultStateData))
            }
            else {
                this.setState({
                    labelNullWords: "Bạn chưa thêm từ vựng vào sổ từ này.",
                    classLoadingPanel: "hide-component"
                });
            }
        }
        let myListWord
        if (this.props.wordsManage.wordsData !== "notFoundWords") {

            if (this.props.wordsManage.wordsData !== null) {
                console.log("object");
                let tmp_wordsData = this.props.wordsManage.wordsData
                myListWord = tmp_wordsData.map((word, index) => {
                    return <Word key={index} id={word.W_Id} ipa={word.W_ipaWord} title={word.W_originalWord} example={word.W_Phrase} avatar={word.W_Avatar} translation={word.W_translatedWord} idState={word.W_idState} />
                })
            }
            else {
                initWordsData()
            }
        }
        else{
            myListWord = "Không có kết quả"
        }
        // if (this.state.labelNullWords !== '') classLoadingPanel = "hide-component"
        return (
            <div className="right-panel-wb-detail">
                <img className={this.state.classLoadingPanel} src={loadingIcon} />
                { (this.state.classLoadingPanel === "hide-component") ? myListWord : ""}
                {this.state.labelNullWords}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        wordsManage: state.wordsManage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callWordsMange: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightPanel)
