import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import NotesApp from './containers/NotesApp'

export default class Routes extends Component<{}, {}> {
    render() {
        return (
        <>
            <Switch>
                <Route exact path="/" component={NotesApp} />
            </Switch>
        </>    
        );
    }
}