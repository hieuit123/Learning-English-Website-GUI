import React from 'react'
import {
    useParams
} from "react-router-dom";
import ToolBar from '../ToolBar';
import WordOfCategory from './WordOfCategory';

export default function WordsList(props) {
    let { categoryId } = useParams()
    let currentUrl = window.location + ""
    let arrayUrl = currentUrl.split("/")
    let backLink = ""
    for(let i = 3; i < (arrayUrl.length - 1) ; i++) backLink = backLink.concat("/", arrayUrl[i])

    return (
        <div className="container">
            <ToolBar title="CÂY CỐI" backLink = {backLink} />
            <div className="row g-2 container-book-list">
            <WordOfCategory originalWord="informationdnosaddsfdsfsdf" translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            <WordOfCategory originalWord="blue sky"translateWord="Bầu trời màu xanh"/>
            </div>
        </div>
    )
}
