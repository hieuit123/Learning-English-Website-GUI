import React, { Component } from 'react'
import Word from './Word'
import axios from 'axios'
export default class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordData: null
        }
    }
    async componentWillMount() {
        let result = await axios.get("/word/getallbyidwordbook/" + this.props.id)
        let finalResult = result.data
        if (finalResult.status) this.setState({ wordData: finalResult.data })
    }
    render() {
        let myListWord
        if (this.state.wordData) {
            console.log("davao");
            myListWord = this.state.wordData.map((word, index) => {
                return <Word key={index} id={word.W_Id} ipa={word.W_ipaWord} title={word.W_originalWord} example={word.W_Phrase} avatar={word.W_Avatar} translation={word.W_translatedWord} />
            })
        }
        return (
            <div className="right-panel-wb-detail">
                {myListWord}
            </div>
        )
    }
}
