import React, { Component } from 'react'
import Book from './Book'
import axios from 'axios'
export default class ListWordBookInside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordBookData: null
        }
    }
    async componentWillMount() {
        let accountID = localStorage.getItem("accountIDlve")
        let result = await axios.get("/wordbook/getallbyidaccount/" + accountID)
        let finalResult = result.data
        if (finalResult.status) this.setState({ wordBookData: finalResult.data });
    }

    render() {
        let htmlWordBooks
        const colors = ['green-color','yellow-color','blue-white-color']
        if (this.state.wordBookData) {
            htmlWordBooks = this.state.wordBookData.map((wordbook, index) => {
                let indexColor = index > 2 ? index % 3 : index;
                let color = "wb-item " + colors[indexColor];
                return <Book key={index} wordbook={wordbook} color={color} />
            })
        }else htmlWordBooks = "Bạn chưa thêm sổ từ"
        return (
            <div className="container-list-wb">
                {htmlWordBooks}
            </div>
        )
    }
}
