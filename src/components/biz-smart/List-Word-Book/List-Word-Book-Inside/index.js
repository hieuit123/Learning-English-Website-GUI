import React, { Component } from 'react'
import Book from './Book'
import axios from 'axios'
import {connect} from 'react-redux'

class ListWordBookInside extends Component {

    render() {

        let htmlWordBooks
        const colors = ['green-color', 'yellow-color', 'blue-white-color']
        if (this.props.wordbookData) {
            htmlWordBooks = this.props.wordbookData.map((wordbook, index) => {
                let indexColor = index > 2 ? index % 3 : index;
                let color = "wb-item " + colors[indexColor];
                return <Book key={index} wordbook={wordbook} color={color} />
            })
        } else htmlWordBooks = "Bạn chưa thêm sổ từ"
        return (
            <div className="container-list-wb">
                {htmlWordBooks}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        wordbookData:state.accountManage.wordbookData
    }
}

export default connect(mapStateToProps)(ListWordBookInside)