import React, { useState } from 'react'
import ToolBar from '../ToolBar'
import BookOfStore from './BookOfStore'
import axios from 'axios'

export default function BooksList() {
    const [bookData, setBookData] = useState(null)
    const initData = async () => {
        if (bookData == null) {
            let bookDataResult = await axios.get("/word/getallbookofstore")
            if(bookDataResult.status) setBookData(bookDataResult.data.data)
        }
    }
    initData()
    const BookListHtml = ()=>{
            let bookListHtml = bookData.map((book)=>{
                return <BookOfStore key={book.BOS_Id} name={book.BOS_nameBookOfStore}  
                link={"word-store/"+book.BOS_Id} image={book.BOS_Image} />
            }) 
            return bookListHtml
    }
    return (

        <div className="container">
            <ToolBar title="CỬA HÀNG TỪ VỰNG" />
            <div className="row g-2 container-book-list">
               {(bookData)? <BookListHtml/> : ""}
            </div>
        </div>
    )
}
