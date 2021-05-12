import ReactCardFlip from 'react-card-flip'
import React, { Component } from 'react';

class WordOfCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            isClick:false
        }
    }

    render() {
        let isClick = false
        const handleClick = () => {
            if(!isClick) this.setState({ isFlipped: !this.state.isFlipped })
            isClick = false

        }
        const handleSelect = () => {
            isClick = true
        }
        const handleAddWord = ()=>{
            isClick = true
            
        }
        return (
            <div className="col-2 col-6-sm">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <>
                    <div className="category-of-book-front" onClick={handleClick}>
                        <img src="https://i.pinimg.com/736x/6a/aa/fe/6aaafefd23a9955c602ca8892d7f77c2.jpg"/>
                        <div>{this.props.originalWord}</div>
                        <span>(v)</span>
                    </div>
                    </>
                    <>
                    <div className="category-of-book-back" onClick={handleClick}>
                        <div>{this.props.translateWord} </div>

                        <select onClick={handleSelect}>
                            <option value="0">Hang ngay</option>
                            <option value="0">Hang ngay</option>
                        </select>

                        <button onClick = {handleAddWord}>Thêm vào sổ từ</button>
                    </div>
                    </>
                    
                </ReactCardFlip>
            </div>
        );
    }
}

export default WordOfCategory;
