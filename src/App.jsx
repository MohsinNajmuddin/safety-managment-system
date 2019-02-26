import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ReactLoading from "react-loading";

import Page from "./components/Page/page";

import { LOGIN } from "./router/routes";

import "./styles/app.css";

class App extends React.Component {
  render() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      return (
        <div className="pageLoader">
          <ReactLoading type="spin" color="#000" />
        </div>
      );
    }
    return (
      <Page>
        <Switch>
          <Route exact path={LOGIN} render={() => <div />} />
          <Route exact path="/" render={() => <div />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Page>
    );
  }
}
export default App;
