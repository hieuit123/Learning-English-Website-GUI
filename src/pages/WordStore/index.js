import React from 'react'
import {useLocation} from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import BooksList from './BooksList'
import CategoriesList from './CategoriesList'  
import WordsList from './WordsList'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function WordStore() {
    let { path, url } = useRouteMatch();
    let query = useQuery();
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <BooksList/>
                </Route>
                <Route exact path={`${path}/:bookId`} >
                    <CategoriesList/>
                </Route>
                <Route exact path={`${path}/:bookId/:categoryId`} >
                    <WordsList/>
                </Route>
            </Switch>
        </div>
    )
}

