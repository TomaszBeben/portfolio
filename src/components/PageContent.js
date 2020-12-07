import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
  } from "react-router-dom";

import Example from './Example';
import Form from './Form';


const PageContent = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/form" component={Form}></Route>
                <Route exact path="/example" component={Example}></Route>
            </Switch>
        </HashRouter>
    )
}

export default PageContent
