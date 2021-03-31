import React, { Component } from 'react'
import Book from './Book'

export default class ListWordBookInside extends Component {

    render() {
        const colors = ['green-color','yellow-color','blue-white-color']
        var initialWordBooks = [
            [ 'Công Nghệ Thông Tin','technology/công nghệ', 'wireless/không dây','operation/phép tính','hello/xin chào' ],
            [ 'Công Nghệ Thông Tin','technology/công nghệ', 'wireless/không dây','operation/phép tính','hello/xin chào' ],
            [ 'Công Nghệ Thông Tin','technology/công nghệ', 'wireless/không dây','operation/phép tính','hello/xin chào' ],
            [ 'Công Nghệ Thông Tin','technology/công nghệ', 'wireless/không dây','operation/phép tính','hello/xin chào' ],
            [ 'Công Nghệ Thông Tin','technology/công nghệ', 'wireless/không dây','operation/phép tính','hello/xin chào' ],
            [ 'Công Nghệ Thông Tin','technology/công nghệ', 'wireless/không dây','operation/phép tính','hello/xin chào' ],
            [ 'Công Nghệ Thông Tin','technology/công nghệ', 'wireless/không dây','operation/phép tính','hello/xin chào' ]
        ]
        const listWordBook = initialWordBooks.map((wordbook,index) =>{
            let indexColor = index > 2 ? index%3 : index;
            let color = "wb-item "+colors[indexColor];
            return <Book id="w" key={index} wordbook={wordbook} color={color}/>
        })
        return (
            <div className="container-list-wb">
                {listWordBook}
            </div>
        )
    }
}
