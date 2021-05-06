import React, { Component } from 'react'
import { connect } from 'react-redux'

import Word from './Word'

class RightPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myListWord
        if (this.props.wordsManage.wordsData) {
            let tmp_wordsData = this.props.wordsManage.wordsData
            myListWord = tmp_wordsData.map((word, index) => {
                return <Word key={index} id={word.W_Id} ipa={word.W_ipaWord} title={word.W_originalWord} example={word.W_Phrase} avatar={word.W_Avatar} translation={word.W_translatedWord} idState={word.W_idState} />
            })
        }
        return (
            <div className="right-panel-wb-detail">
                {myListWord}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        wordsManage: state.wordsManage
    }
}


export default connect(mapStateToProps,null)(RightPanel)
