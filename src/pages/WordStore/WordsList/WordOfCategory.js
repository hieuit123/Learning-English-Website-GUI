import ReactCardFlip from 'react-card-flip'
import React, { Component } from 'react'
import convertPostData from './../../../utils/convertPostData'

class WordOfCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            isClick: false,
            listWordBook: null
        }
    }
    
    render() {
        async function getExample2(sel) {
            let result = await fetch("https://wordsapiv1.p.rapidapi.com/words/" + sel.replace(" ", "%20") + "/examples", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "4163873f00mshac33a4e6303fe2ap107817jsn8c6abd690fd1",
                        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                    }
                })
                .then(response => {
                    return response.json()
                })
                .catch(err => {
                    console.error(err);
                    return ""
                });
            return result
        }
        
        async function getIpaWord(sel) {
            let result = await fetch("https://wordsapiv1.p.rapidapi.com/words/" + sel.replace(" ", "%20") + "/pronunciation", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "4163873f00mshac33a4e6303fe2ap107817jsn8c6abd690fd1",
                        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                    }
                })
                .then(response => {
                    return response.json()
                })
                .catch(err => {
                    console.error(err);
                    return null
                });
            if (!result.success) return null
            return result
        }
        let isClick = false
        const handleClick = () => {
            if (!isClick) this.setState({ isFlipped: !this.state.isFlipped })
            isClick = false
        }
        const handleSelect = () => {
            isClick = true
        }

        const handleAddWord = async () => {
            isClick = true;
            let accountId = localStorage.getItem("accountIDlve");
            let resultGetExample2 = await getExample2(this.props.originalWord);
            let resultIpaWord = await getIpaWord(this.props.originalWord)
            let phrase;
            let ipaWord;
            if (resultIpaWord) {
                if (resultIpaWord.pronunciation.all) ipaWord = resultIpaWord.pronunciation.all
                if (!resultIpaWord.pronunciation.all) ipaWord = resultIpaWord.pronunciation
            }
            else ipaWord = "";
            console.log(resultGetExample2);
            if (resultGetExample2) {
                let examplesArray = resultGetExample2.examples
                phrase = examplesArray[0]
                
                let minLength = examplesArray[0].length
                examplesArray.forEach(element => {
                    if (element.length < minLength) phrase = element
                });
            }
            else phrase = "";
            console.log(phrase);
            let optionWB = document.getElementById("selectWordbook").value;
            var today = new Date()
            let fullDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
            alert(optionWB)
            let data = {
                W_originalWord: this.props.originalWord,
                W_translatedWord: this.props.translateWord,
                W_Phrase: phrase,
                W_Avatar: this.props.image,
                W_linkPost: "",
                W_phraseMean: "",
                W_learnTimes: "0",
                W_Degree: "0",
                W_idLearningNumberDay: "0",
                W_idCustomDegree: "0",
                W_idState: 3,
                W_wrongTimes: "0",
                W_idCatalogStored: 1,
                AC_Id: accountId,
                W_ipaWord: ipaWord,
                W_dateCreated: fullDate,
                W_typeOfWord: "",
                W_idWordBook: optionWB
            }
            let wordData = convertPostData(data);
            let response = await fetch("/word/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: wordData
            }).then(data => data.json());

            console.log(response);
            if (response.status === true) {
                alert("Thêm thành công!")
            }
        }
        
        return (
            <div className="col col-lg-3 col-sm-4 col-xl-2">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <>
                        <div className="category-of-book-front" onClick={handleClick}>
                            <img src={this.props.image} />
                            <div>{this.props.originalWord}</div>
                        </div>
                    </>
                    <>
                        <div className="category-of-book-back" onClick={handleClick}>
                            <div>{this.props.translateWord} </div>
                            <select id="selectWordbook" onClick={handleSelect}>
                                {(this.props.listWordBook) ? this.props.listWordBook.map((wordbook) => {
                                    return <option value={wordbook.WB_Id}>{wordbook.WB_Name}</option>
                                }) : ""}
                            </select>

                            <button onClick={handleAddWord}>Thêm vào sổ từ</button>
                        </div>
                    </>

                </ReactCardFlip>
            </div>
        );
    }
}

export default WordOfCategory;
