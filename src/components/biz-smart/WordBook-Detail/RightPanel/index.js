import React, { Component } from 'react'
import Word from './Word'
import axios from 'axios'
export default class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.setState({
            dataword: "sssssss"
        })

    }

    render() {  
        const getListWord = async ()=>{
            let words = await getWordsData()
            sessionStorage.setItem("words",JSON.stringify(words))
        }   
        const getWordsData = async ()=>{
            let result = await axios.get("/word/getallbyidwordbook/3")
            return result.data.data
        }
        let listWord = getListWord()
        let tmp = sessionStorage.getItem("words")
        let myListWord = JSON.parse(tmp)
        myListWord = myListWord.map((word,index)=>{
            return <Word key={index} id={word.W_Id} ipa={word.W_ipaWord} title={word.W_originalWord} example={word.W_Phrase} avatar={word.W_Avatar} translation={word.W_translatedWord}/>
        })
        return (
            <div className="right-panel-wb-detail">
{myListWord}
            </div>
        )
    }
}
