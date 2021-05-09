import React from 'react'

export default function ReviewInfo(props) {
    return (
        <div className="review-info">
            Bạn cần ôn lại <span>{props.reviewWords} từ</span> <br></br> để hoàn thành mục tiêu
        </div>
    )
}
