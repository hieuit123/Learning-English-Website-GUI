import React,{useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios'

import ToolBar from '../ToolBar';
import WordOfCategory from './WordOfCategory';

export default function WordsList(props) {
    let { categoryId } = useParams()
    const [wordData, setWordData] = useState(null)
    const [listWordBook, setListWordBook] = useState(null)
    const [categoryName, setCategoryName] = useState("");

    let currentUrl = window.location + ""
    let arrayUrl = currentUrl.split("/")
    let backLink = ""
    for(let i = 3; i < (arrayUrl.length - 1) ; i++) backLink = backLink.concat("/", arrayUrl[i])

    const initData = async () => {
        if (wordData == null)  {
            let accountId = localStorage.getItem("accountIDlve");
            let wordDataResult = await axios.get("/word/getallwordofstore/"+categoryId)
            if(wordDataResult.data.status) setWordData(wordDataResult.data.data)
            else setWordData("notFound");
            let listWordBookResult = await axios.get("/wordbook/getallbyidaccount/"+accountId);
            if(listWordBookResult.data.status) setListWordBook(listWordBookResult.data.data);

            let categoryDataResult = await axios.get("/word/getOneCategoryOfBook/"+categoryId);
            console.log(categoryDataResult);
            if(categoryDataResult.data.status){
                console.log(categoryDataResult.data.data[0].COB_Name);
                setCategoryName(categoryDataResult.data.data[0].COB_Name)
            }
        }
    }
    initData();
    const WordListHtml = ()=>{
            let wordListHtml = wordData.map((word,index)=>{
                return <WordOfCategory key={index} originalWord={word.WOS_originalWord} 
                translateWord = {word.WOS_translateWord} 
                image={word.WOS_Avatar} 
                listWordBook = {listWordBook}
                 />
            }) 
            return wordListHtml
    }
    return (
        <div className="container">
            <ToolBar title={categoryName} backLink = {backLink} />
            <div className="row g-2 container-book-list">
            {(wordData && wordData != "notFound") ? <WordListHtml/> : ""}
            {(wordData == "notFound") ? <h3 className="toolbar-store">Tạm thời chưa có dữ liệu</h3> : ""}
            </div>
        </div>
    )
}
