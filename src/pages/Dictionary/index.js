import React from 'react'
import {useParams} from "react-router-dom"
export default function Dictionary() {
    const {word} = useParams()
    console.log(word)
    return (
        <div>
            {word}
        </div>
    )
}
