import React from 'react'
import {
    useParams
  } from "react-router-dom";

export default function WordsList() {
    let {categoryId} = useParams()
    return (
        <div>
            WordsList : {categoryId}
        </div>
    )
}
