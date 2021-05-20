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
            <div className="col col-lg-3 col-sm-4 col-xl-2">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <>
                    <div className="category-of-book-front" onClick={handleClick}>
                        <img src={this.props.image}/>
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
