import React from 'react'

export default function ExpBar() {
    return (
        <div>
            <div className="info-exp">
                999/1000 KIM CƯƠNG
            </div>
            <div className="exp-bar">
                <div className="progress" style={{ height: '25px' }}>
                    <div className="progress-bar"  role="progressbar" style={{ width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
            </div>
            <div className="info-level">
                <p className="left">LV5</p>
                <p className="right">LV6</p>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}
