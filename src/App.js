import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { store } from "./Redux/index";
import Login from "./Components/Login/index";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import GlobalStyles from "./Components/GlobalStyles";
import LayoutDashboard from "./Layout/index";
import NewCollection from "./Components/NewCollection";
import ListCollections from "./Components/ListCollections";
const App = (props) => {
  const is_login = () => {
    if (!props.access) {
      return <Redirect to="/login" />;
    }
  };
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />

          <Route>
            <LayoutDashboard>
              <Switch>
                <Route exact path="/add-collection" component={NewCollection} />
                <Route exact path="/feed" component={Dashboard} />
                <Route
                  exact
                  path="/list-collections"
                  component={ListCollections}
                />
                <Redirect from="/" to="/feed" />
                {is_login()}
              </Switch>
            </LayoutDashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
