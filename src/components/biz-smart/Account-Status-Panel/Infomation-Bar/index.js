import React from 'react'
import avatar from './../../../../assets/images/avatar.png'; 
export default function InformationBar(props) {
    return (
        <div>            
            <div className="avatar">
                <img alt="avatar" src={avatar}/>
            </div>
            <div className="info-account">
                <div className="name">TRAN MINH HIEU</div>
                <div className="level">VÀNG</div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}
