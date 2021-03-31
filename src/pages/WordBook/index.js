import React, { Component } from 'react'
import AccountStatusPanel from '../../components/biz-smart/Account-Status-Panel'
import ListWordBook from '../../components/biz-smart/List-Word-Book'
import WordBookDetail from '../../components/biz-smart/WordBook-Detail';
import Navigator from '../../components/smart/Navigator'

export default class WordBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowWBDetail:true
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="navigator col-12">
                    <Navigator />
                </div>
                <div className="list-word-book container">
                    <div className="row">
                        <div className="account-container">
                            <AccountStatusPanel />
                        </div>
                        <div className="word-book-container">
                            { this.state.isShowWBDetail? <WordBookDetail/> :  <ListWordBook />}
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}
