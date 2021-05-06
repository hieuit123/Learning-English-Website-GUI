import React from 'react'

export default function ExpBar(props) {

    return (
        <div>
            <div className="info-exp">
                {props.currentExp}/{props.nextLevelExp} SAO
            </div>
            <div className="exp-bar">
                <div className="progress" style={{ height: '25px' }}>
                    <div className="progress-bar"  role="progressbar" style={{ width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
            </div>
            <div className="info-level">
                <p className="left">{props.currentLevel}</p>
                <p className="right">{props.nextLevel}</p>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}
