import React, { Component } from 'react'
import InformationWordBookPanel from '../../components/biz-smart/Information-Word-Book-Panel'
import StreakBar from '../../components/common/XL-Streak-Bar'
import Navigator from '../../components/smart/Navigator'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="info-wb-panel col-12">
                    <InformationWordBookPanel />
                </div>
                <div className="xl-streak-bar col-12"> 
                    <StreakBar/>
                </div>
            </>

        )
    }
}
