import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Articles from './Articles'
import CreateArticlePage from './CreateArticlePage/CreateArticlePage';
import UpdateArticlePage from './UpdateArticlePage/UpdateArticlePage';

const RouteArticle = () => (
    <Switch>
        <Route exact path='/articles' component={Articles}/>
        <Route path='/articles/create' component={CreateArticlePage}/>
        <Route path='/articles/:id/edit' component={UpdateArticlePage}/>
    </Switch>
);


export default RouteArticle