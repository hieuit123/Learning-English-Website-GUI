import React from 'react'
import {useLocation} from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function MainDisplay(mode){
    switch(mode){
        case "wordStore": 
        break
        case "wordCategory": 
        break
        case "wordList": 
        break
    }
    
}

export default function WordStore() {

    let query = useQuery();
    console.log(query.get("wordCategoryId")+" ddddddddddddd");
    return (
        <div>
            fff
        </div>
    )
}

