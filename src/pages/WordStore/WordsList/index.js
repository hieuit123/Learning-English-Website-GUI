import React,{useState} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios'

import ToolBar from '../ToolBar';
import WordOfCategory from './WordOfCategory';

export default function WordsList(props) {
    let { categoryId } = useParams()
    const [wordData, setWordData] = useState(null)
    let currentUrl = window.location + ""
    let arrayUrl = currentUrl.split("/")
    let backLink = ""
    for(let i = 3; i < (arrayUrl.length - 1) ; i++) backLink = backLink.concat("/", arrayUrl[i])

    const initData = async () => {
        if (wordData == null)  {
            let wordDataResult = await axios.get("/word/getallwordofstore/"+categoryId)
            if(wordDataResult.data.status) setWordData(wordDataResult.data.data)
            else setWordData("notFound")
        }
    }
    initData()
    const WordListHtml = ()=>{

            let wordListHtml = wordData.map((word)=>{
                return <WordOfCategory key={word.WOS_Id} originalWord={word.WOS_originalWord} 
                translateWord = {word.WOS_translateWord} 
                image={word.WOS_Avatar} 
                 />
            }) 
            return wordListHtml
    }
    return (
        <div className="container">
            <ToolBar title="CÂY CỐI" backLink = {backLink} />
            <div className="row g-2 container-book-list">
            {(wordData && wordData != "notFound") ? <WordListHtml/> : ""}
            {(wordData == "notFound") ? <h3 className="toolbar-store">Tạm thời chưa có dữ liệu</h3> : ""}
            </div>
        </div>
    )
}
