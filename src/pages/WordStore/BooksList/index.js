import React from 'react'
import ToolBar from '../ToolBar'
import BookOfStore from './BookOfStore'

export default function BooksList() {
    return (
        <div className="container">
            <ToolBar />
            <div className="row g-2 container-book-list">
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
                    <BookOfStore name="3000 từ thông dụng" />
            </div>
        </div>
    )
}
