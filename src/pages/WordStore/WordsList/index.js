import React from 'react'
import {
    useParams
} from "react-router-dom";
import ToolBar from '../ToolBar';
import WordOfCategory from './WordOfCategory';

export default function WordsList() {
    let { categoryId } = useParams()
    return (
        <div className="container">
            <ToolBar />
            <div className="row g-2 container-book-list">
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            <WordOfCategory/>
            </div>
        </div>
    )
}
