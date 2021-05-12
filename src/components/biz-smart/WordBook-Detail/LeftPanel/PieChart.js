import React from 'react'
import { Pie } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

export default function PieChart(props) {

    let dangHoc,daThuoc,tuMoi
    const wordbookStates = useSelector(state => state.wordsManage.statesWordbook)
    if(wordbookStates){
        dangHoc = wordbookStates.dangHoc
        daThuoc = wordbookStates.daThuoc
        tuMoi = wordbookStates.tuMoi
    }
    return (
        
        <div>
            <Pie
                data={{
                    labels:['Từ mới', 'Từ đang học', 'Từ đã nhớ'],
                    datasets : [{
                        data : [tuMoi, dangHoc, daThuoc],
                        backgroundColor: [
                            '#4fea3d',
                            '#5c9dff',
                            '#ff9031'
                        ]
                    }]
                }}
                
                width={300}
                height={300}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}
