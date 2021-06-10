import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"

export default function Dictionary() {
    const { word } = useParams(); 
    useEffect(() => {
    })
    console.log(word)
    return (
        <div>
            <div id="lbdict_plugin_frame"></div>
        </div>
    )
}