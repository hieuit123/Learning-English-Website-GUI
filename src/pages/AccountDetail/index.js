import React, { Component } from 'react'
import AccountStatusPanel from '../../components/biz-smart/Account-Status-Panel'

export default class AccountDetail extends Component {

    render() {
        return (
                    <div className="account-page col-12">
                        <AccountStatusPanel isAccountPage={true} />
                    </div>
        )
    }
}
