import React from "react";
import { History } from "history";
import { Router } from 'react-router-dom';
import Routes from './Routes';
import './App.scss';
import { Container } from "@material-ui/core";
interface OwnProps {
    history: History;
}

class App extends React.Component<OwnProps,{}> {

    public render() {
        const { history } = this.props;

        return (
          <Router history={history}>
            <Container className="main-container">
              <Routes />
            </Container>
          </Router>
        );
    }
}

export default App;