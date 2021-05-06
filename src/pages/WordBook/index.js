import React, { Component } from 'react'
import AccountStatusPanel from '../../components/biz-smart/Account-Status-Panel'
import ListWordBook from '../../components/biz-smart/List-Word-Book'
import WordBookDetail from '../../components/biz-smart/WordBook-Detail';
import Navigator from '../../components/smart/Navigator'
import { connect } from 'react-redux'

class WordBook extends Component {
    render() {

        return (
            <div className="container">

                <div className="row">
                    <div className="navigator col-12">
                        <Navigator />
                    </div>
                    <div className="account-container">
                        <AccountStatusPanel />
                    </div>
                    <div className="word-book-container">
                        {this.props.isShowWBDetail ? <WordBookDetail id={this.props.id} /> : <ListWordBook />}
                    </div>
                </div>


            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShowWBDetail: state.showComponentReducer.isShowWBDetail,
        id: state.showComponentReducer.idItem
    }
}
export default connect(mapStateToProps, null)(WordBook)