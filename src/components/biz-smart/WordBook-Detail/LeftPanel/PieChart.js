import React from 'react'
import { Pie } from 'react-chartjs-2'
export default function PieChart(props) {
    return (
        <div>
            <Pie
                data={{
                    labels:['Từ mới', 'Từ đang học', 'Từ đã nhớ'],
                    datasets : [{
                        data : [20, 30, 50],
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
