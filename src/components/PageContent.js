import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
  } from 'react-router-dom';

import Form from './Form';
import Resume from './Resume';
import SocialMedia from './SocialMedia';



const PageContent = () => {
    return (
        <HashRouter>
            <Switch>
                <div className='page-content-container'>
                    {/* <Route exact path="/" component={Resume}></Route> */}
                    <Route exact path="/form" component={Form}></Route>
                    <Route exact path="/social" component={SocialMedia}></Route>
                </div>
            </Switch>
        </HashRouter>
    )
}

export default PageContent
