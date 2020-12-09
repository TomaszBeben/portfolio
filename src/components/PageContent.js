import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
  } from "react-router-dom";

import Form from './Form';



const PageContent = () => {
    return (
        <HashRouter>
            <Switch>
                <div className='page-content-container'>
                    <Route exact path="/form" component={Form}></Route>
                </div>
            </Switch>
        </HashRouter>
    )
}

export default PageContent
