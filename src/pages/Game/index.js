import React, { Component } from 'react'
import Navigator from '../../components/smart/Navigator'

export default class Game extends Component {
    render() {
        return (
            <div className="container">
                <div className="navigator col-12">
                    <Navigator />
                </div>
                <div className="col-12">
                    Game panel
                </div>
            </div>
        )
    }
}
